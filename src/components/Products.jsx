import { Card } from "antd";
const { Meta } = Card;

const items = [
  {
    key: 0,
    url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    key: 1,
    url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    key: 2,
    url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    key: 3,
    url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    key: 4,
    url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    key: 5,
    url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    key: 6,
    url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    key: 7,
    url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    key: 8,
    url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    key: 9,
    url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    key: 10,
    url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    key: 11,
    url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    key: 12,
    url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    key: 13,
    url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    key: 14,
    url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    key: 15,
    url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
];

const ProductCard = ({ url }) => (
  <Card
    className="mt-4"
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={url} />}
  >
    <Meta
      className="text-left"
      title="Europe Street beat"
      description="www.instagram.com"
    />
    <div className="price-tag">₹ 999</div>
  </Card>
);

const Products = () => (

  <div className="mt-12">
    <div className="container">
      {items.map((item) => (
        <ProductCard key={item.key} url={item.url} />
      ))}
    </div>
  </div>
);

export default Products;
