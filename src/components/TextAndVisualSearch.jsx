import { UploadOutlined } from "@ant-design/icons";
import { Input, Space, message, Upload, Button } from "antd";

const { Search } = Input;

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const suffix = (
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>
      {window.innerWidth <= 768 ? "" : "Click to Upload"}
    </Button>
  </Upload>
);

const onSearch = (value) => console.log(value);

const TextAndVisualSearch = () => (
  <Space direction="vertical">
    <Search
      enterButton="Search"
      placeholder="input search text"
      suffix={suffix}
      onSearch={onSearch}
    />
  </Space>
);

export default TextAndVisualSearch;
