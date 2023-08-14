import { Select, Space } from "antd";

const Filters = ({ allCategories, setSuggestedCategories }) => {
  const handleChange = (value) => {
    setSuggestedCategories(value);
  };
  let options = [];
  for (let i = 0; i < allCategories.length; i++) {
    if (!["Top Deals", "Top Offers"].includes(allCategories[i])) {
      options.push({
        label: allCategories[i],
        value: allCategories[i],
      });
    }
  }
  return (
    <Space
      style={{
        width: "100%",
      }}
      direction="vertical"
    >
      <Select
        mode="multiple"
        allowClear
        style={{
          width: "100%",
          padding: "2rem",
          textAlign: "left",
        }}
        placeholder="Apply Filters"
        onChange={handleChange}
        options={options}
      />
    </Space>
  );
};
export default Filters;
