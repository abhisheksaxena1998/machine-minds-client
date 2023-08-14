import { UploadOutlined } from "@ant-design/icons";
import { Input, Space, Button, Tag, Image, Spin, notification, Steps, Result } from "antd";
import { useSubmitDataMutation } from "../store/api";
import { useRef, useState, useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import cogoToast from 'cogo-toast';

const { Search } = Input;

const TextAndVisualSearch = ({ suggestedCategory, setSuggestedCategory }) => {
  const [search, setSearch] = useState("");
  const [file, setFile] = useState(null);
  const [src, setSrc] = useState("");
  const [step, setStep] = useState(0)
  const [apiFn, result] = useSubmitDataMutation();
  const inputRef = useRef(null);
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

  const openNotification = () => {
    notification.open({
      message: 'Result successfully generated !',
      description: 'You can find the category label below the image',
      type: 'success'
    })
  }

  const handleSubmit = async () => {
    const before = Date.now()
    const response = await apiFn({
      search: search,
      file: file,
    }).unwrap()
    const after = Date.now()
    setDiff((after - before) / 1000)
    if (response.status == "success") {
      setSuggestedCategory(response.category);
      openNotification()
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
        setSrc(imageUrl);
      }
    }
  };

  const suffix = (
    <>
      <Button
        icon={<UploadOutlined />}
        onClick={() => inputRef.current.click()}
      >
        {file ? "Re-upload" : "Click to Upload"}
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
        {file && <Tag>{file.name}</Tag>}
        {src && <Image src={src} />}
        {(result.isLoading || result.isFetching) && <Spin indicator={antIcon} />}
        {suggestedCategory && <Tag color="blue">{suggestedCategory}</Tag>}
        {result.isSuccess && <Result
          status="success"
          title="Successfully generated the category label"
          subTitle={`The process took ${diff} seconds`}
        />}
      </Space>
    </>
  );
};

export default TextAndVisualSearch;
