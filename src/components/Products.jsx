import { Card } from "antd";
import { useEffect } from "react";

const { Meta } = Card;

const items_list = [
  {
    category: "Top Offers",
    items: [
      {
        key: 0,
        url: "https://s.hdnux.com/photos/01/15/52/15/20357974/7/1200x0.jpg",
        title: "Laptop",
      },
      {
        key: 1,
        url: "https://th.bing.com/th/id/OIP.2JkSNigfTvmaMwVkzc7A9wHaHa?pid=ImgDet&rs=1",
        title: "Phone",
      },
      {
        key: 2,
        url: "https://png.pngtree.com/png-clipart/20220523/ourmid/pngtree-cool-black-realistic-eyeglasses-png-image_4707488.png",
        title: "Sunglasses",
      },
      {
        key: 3,
        url: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
        title: "Perfume",
      },
      {
        key: 4,
        url: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F61%2F70%2F61708115ff10932bd9bb771f3110089435ac345e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
        title: "Shirts",
      },
    ],
  },
  {
    category: "Top Deals",
    items: [
      {
        key: 0,
        url: "https://m.media-amazon.com/images/I/71VjM5LOeYL._AC_UY1000_.jpg",
        title: "Watch",
      },
      {
        key: 1,
        url: "https://rukminim2.flixcart.com/image/832/832/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70",
        title: "Shoes",
      },
      {
        key: 2,
        url: "https://m.media-amazon.com/images/I/51wQ18eozvL._SX679_.jpg",
        title: "Laptop",
      },
      {
        key: 3,
        url: "https://m.media-amazon.com/images/I/81ecSfN2OOL._AC_UY1100_.jpg",
        title: "Wallet",
      },
      {
        key: 4,
        url: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F2c%2F91%2F2c916835024d8f6cf56292cdc738a7da870fd4cf.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_accessories_belts%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        title: "Belt",
      },
      {
        key: 5,
        url: "https://m.media-amazon.com/images/I/91Xhzn4NGnL._AC_UY1000_.jpg",
        title: "Brown bag",
      },
    ],
  },
  {
    category: "Something",
    items: [
      {
        key: 0,
        url: "https://m.media-amazon.com/images/I/71VjM5LOeYL._AC_UY1000_.jpg",
        title: "Watch",
      },
      {
        key: 1,
        url: "https://rukminim2.flixcart.com/image/832/832/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70",
        title: "Shoes",
      },
      {
        key: 2,
        url: "https://m.media-amazon.com/images/I/51wQ18eozvL._SX679_.jpg",
        title: "Laptop",
      },
      {
        key: 3,
        url: "https://m.media-amazon.com/images/I/81ecSfN2OOL._AC_UY1100_.jpg",
        title: "Wallet",
      },
      {
        key: 4,
        url: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F2c%2F91%2F2c916835024d8f6cf56292cdc738a7da870fd4cf.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_accessories_belts%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        title: "Belt",
      },
      {
        key: 5,
        url: "https://m.media-amazon.com/images/I/91Xhzn4NGnL._AC_UY1000_.jpg",
        title: "Brown bag",
      },
    ],
  },
];

const ProductCard = ({ url, title }) => (
  <Card
    className="mt-4"
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={url} />}
  >
    <Meta className="text-left" title={title} description="www.instagram.com" />
    <div className="price-tag">₹ 999XX</div>
  </Card>
);

const Products = ({
  suggestedCategory,
  setAllCategories,
  selectedCategories,
  setSuggestedCategories,
  setShowFilters,
}) => {
  let allCategories = [];
  for (var i = 0; i < items_list.length; i++) {
    allCategories.push(items_list[i].category);
  }
  useEffect(() => {
    if (allCategories) {
      setAllCategories(allCategories);
    }
    if (selectedCategories.length === 0) {
      setSuggestedCategories(["Top Deals", "Top Offers"]);
    }
    if (suggestedCategory) {
      setShowFilters(false);
    }
  }, [items_list, selectedCategories, suggestedCategory]);
  const items = suggestedCategory
    ? items_list.filter(function (el) {
        return el.category === suggestedCategory;
      })
    : selectedCategories
    ? items_list.filter(function (el) {
        return selectedCategories.includes(el.category);
      })
    : items_list;
  return (
    <div>
      {items.map((item) => {
        return (
          <div key={item.category}>
            <span
              className={
                suggestedCategory
                  ? "predicted-category ml-8 mb-2 float-left"
                  : "ml-8 mb-2 float-left font-bold"
              }
            >
              {suggestedCategory
                ? "Suggested Products By Our A.I. Model: " + suggestedCategory
                : item.category}
            </span>
            <div className="mt-12">
              <div className="container">
                {item.items.map((item) => (
                  <ProductCard
                    key={item.key}
                    url={item.url}
                    title={item.title}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
