import { UploadOutlined } from "@ant-design/icons";
import { Input, Space, Button, Tag, Image, Spin } from "antd";
import { useSubmitDataMutation } from "../store/api";
import { useRef, useState, useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";

const { Search } = Input;

const TextAndVisualSearch = ({ suggestedCategory, setSuggestedCategory }) => {
  const [search, setSearch] = useState("");
  const [file, setFile] = useState(null);
  const [src, setSrc] = useState("");
  const [apiFn, result] = useSubmitDataMutation();
  const inputRef = useRef(null);

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    setFile(file);
    setSuggestedCategory(null);
  };

  const handleSubmit = async () => {
    const response = await apiFn({
      search: search,
      file: file,
    }).unwrap();
    if (response.status == "success") {
      setSuggestedCategory(response.category);
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
    </Space>
  );
};

export default TextAndVisualSearch;
