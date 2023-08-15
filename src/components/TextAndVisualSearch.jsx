import { UploadOutlined } from "@ant-design/icons";
import { Input, Space, Button, Tag, Spin, notification, Steps, Result, Card } from "antd";
import { useSubmitDataMutation } from "../store/api";
import { useRef, useState, useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";

const { Search } = Input;
const { Meta } = Card;

const TextAndVisualSearch = ({ suggestedCategory, setSuggestedCategory }) => {

  const isMobile = window.innerWidth <= 768
  const [search, setSearch] = useState("");
  const [file, setFile] = useState(null);
  const [src, setSrc] = useState("");
  const [step, setStep] = useState(0)
  const [apiFn, result] = useSubmitDataMutation();
  const inputRef = useRef(null);
  const [resultName, setResultName] = useState("")
  const [diff, setDiff] = useState(0)

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    setFile(file);
    setSuggestedCategory(null);
    setStep(1)
  };

  const openSuccessNotification = () => {
    notification.open({
      message: 'Result successfully generated !',
      description: 'You can find the category label below the image',
      type: 'success'
    })
  }

  const openErrorNotification = () => {
    notification.open({
      message: 'Error generating the result',
      description: 'Please try again !',
      type: 'error'
    })
  }

  const handleSubmit = async () => {
    try {
      const before = Date.now()
      const response = await apiFn({
        search: search,
        file: file,
      }).unwrap()
      const after = Date.now()
      setDiff((after - before) / 1000)
      if (response.status == "success") {
        setSuggestedCategory(response.category);
        openSuccessNotification()
        setStep(2)
        if (response.base64_data) {
          const base64Data = response.base64_data;
          const imageData = atob(base64Data);
          const imageArray = new Uint8Array(imageData.length);
          for (let i = 0; i < imageData.length; i++) {
            imageArray[i] = imageData.charCodeAt(i);
          }
          const blob = new Blob([imageArray], { type: "image/png" });
          const imageUrl = URL.createObjectURL(blob);
          setSrc(imageUrl)
          setResultName(search)
        }
      }
    } catch (error) {
      openErrorNotification()
    }
  };

  const suffix = (
    <>
      <Button
        icon={<UploadOutlined />}
        onClick={() => inputRef.current.click()}
      >
        {file ? "Re-upload" : isMobile ? "" : "Click to upload"}
      </Button>
    </>
  );

  useEffect(() => {
    if (file) {
      setSrc(URL.createObjectURL(file));
    }
  }, [file]);


  return (
    <>
      <Steps
        color="green"
        style={{ marginBottom: 20 }}
        current={step}
        items={[
          {
            title: 'Upload image',
          },
          {
            title: 'Click search and fetch result',
          },
          {
            title: 'Show result',
          },
        ]}
      />
      <Space direction="vertical">
        <Search
          enterButton="Search"
          placeholder="Search here !"
          suffix={suffix}
          onChange={(e) => {
            setSearch(e.target.value);
            if (file) {
              setFile(null);
              setSrc(null);
              setSuggestedCategory(null);
            }
          }}
          onSearch={handleSubmit}
        />
        <input
          type="file"
          hidden={true}
          ref={inputRef}
          accept="image/*;capture=camera"
          onChange={handleInputChange}
        />
        {result.isSuccess && suggestedCategory && <><Result
          status="success"
          title={
            <div style={
              { display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "center", alignItems: "center" }

            }>
              <h3>Successfully generated the category {" "}</h3>
              {suggestedCategory && <Tag style={{ marginLeft: 10 }} color="green" >{suggestedCategory}</Tag>}
            </div>}
          subTitle={`The process took ${diff} seconds`}
        />
        </>}
        {src && !(result.isLoading || result.isFetching) && <Card
          hoverable
          style={{ margin: "0 auto", width: "20rem" }}
          cover={<img src={src} />}
        >
          <Meta title={file ? "Uploaded Image" : "Generated Image"} description={<Tag color="blue">{file ? file.name : resultName ?`${resultName}.png` : `${search}.png`}</Tag>} />
        </Card>}
        {(result.isLoading || result.isFetching) && <Spin indicator={antIcon} />}

      </Space>
    </>
  );
};

export default TextAndVisualSearch;
