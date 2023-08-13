import { UploadOutlined } from "@ant-design/icons";
import { Input, Space, message, Upload, Button, Tag, Image } from "antd";
import { useSubmitDataMutation } from "../store/api";
import { useRef, useState, useEffect } from "react";

const { Search } = Input;


const TextAndVisualSearch = () => {

  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")
  const [file, setFile] = useState(null)
  const [src, setSrc] = useState("")
  const [apiFn, result] = useSubmitDataMutation()
  const inputRef = useRef(null)

  const handleInputChange = (e) => {
    const file = e.target.files[0]
    if (!file) {
      return
    }
    setFile(file)
  }

  const handleSubmit = async () => {
    const response = await apiFn({
      search: search,
      file: file
    }).unwrap()
    if (response.status == "success") {
      setCategory(response.category)
      const base64Data = response.base64_data
      const imageData = atob(base64Data);
      const imageArray = new Uint8Array(imageData.length);
      for (let i = 0; i < imageData.length; i++) {
        imageArray[i] = imageData.charCodeAt(i);
      }
      const blob = new Blob([imageArray], { type: 'image/png' });
      const imageUrl = URL.createObjectURL(blob)
      setSrc(imageUrl)
    }
  }

  const suffix = (
    <>
      <Button icon={<UploadOutlined />} onClick={() => inputRef.current.click()} >
        {file ? "Re-upload" : "Click to Upload"}
      </Button>
    </>
  );

  useEffect(() => {
    if (file) {
      setSrc(URL.createObjectURL(file))
    }
  }, [file])

  return <Space direction="vertical">
    <Search
      enterButton="Search"
      placeholder="Search here !"
      suffix={suffix}
      onChange={e => setSearch(e.target.value)}
      onSearch={handleSubmit}
    />
    <input type="file" hidden={true} ref={inputRef} accept="image/*;capture=camera" onChange={handleInputChange} />
    {file && <Tag>{file.name}</Tag>}
    {src && <Image src={src} />}
    {(result.isLoading || result.isFetching) && "Loading result ..."}
    {category && <Tag color="blue">{category}</Tag>}
  </Space>
}

export default TextAndVisualSearch;
