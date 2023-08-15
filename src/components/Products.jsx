import { Card } from "antd";
import { useEffect } from "react";
import { CheckCircleOutlined } from "@ant-design/icons";

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
    category: "Cufflinks",
    items: [
      {
        key: 0,
        url: "https://kinclimg3.bluestone.com/f_jpg,c_scale,w_1024,q_80,b_rgb:f0f0f0/giproduct/BIAB0119C21_YAA18DIG4XXXXXXXX_ABCD00-PICS-00004-1024-38265.png",
        title: "Calvin Cufflinks",
      },
      {
        key: 1,
        url: "https://m.media-amazon.com/images/I/51hzv5mCIpL._AC_UY1100_.jpg",
        title: "Brushed Square Gold Cufflinks",
      },
      {
        key: 2,
        url: "https://res.cloudinary.com/zinodavidoff/image/upload/v1507235568/22887_DAVIDOFF_PARIS_Cufflinks_Square_LightGold_4096x4096.png",
        title: "Paris Cufflinks",
      },
      {
        key: 3,
        url: "https://img.tatacliq.com/images/i7/658Wx734H/MP000000003265231_658Wx734H_202111250044521.jpeg",
        title: "Lapis Bard Cufflinks",
      },
      {
        key: 4,
        url: "https://sencowebfiles.s3.ap-south-1.amazonaws.com/products/WcpNp23mNDTyzWdA13IOpyZg3rAv3FstrWxHhhes.jpeg",
        title: "Captivative Chunks",
      },
    ],
  },
  {
    category: "Saree",
    items: [
      {
        key: 0,
        url: "https://5.imimg.com/data5/SELLER/Default/2022/8/BC/IT/RJ/18451800/traditional-look-soft-silk-saree-with-blouse.jpeg",
        title: "Royal Party Wear",
      },
      {
        key: 1,
        url: "https://assets.shopkund.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/a/c/act2025-silk-weaving-yellow-south-indian-saree-with-blouse-sr19079.jpg",
        title: "Yellow Weaving South Saree",
      },
      {
        key: 2,
        url: "https://www.jiomart.com/images/product/original/rv80bpzr0h/face-deal-saree-women-blue-woven-silk-blend-banarasi-saree-product-images-rv80bpzr0h-1-202210012312.jpg",
        title: "Blue Woven silk",
      },
      {
        key: 3,
        url: "https://manyavar.scene7.com/is/image/manyavar/I02_IMGL6782_11-03-2022-19-51:650x900",
        title: "Light Blue Net",
      },
      {
        key: 4,
        url: "https://media.wforwoman.com/product/22AUW18050-119684/665/22AUW18050-119684%20.jpg",
        title: "Blue Embroidered Belt",
      },
    ],
  },
  {
    category: "Water Bottle",
    items: [
      {
        key: 0,
        url: "https://m.media-amazon.com/images/I/61btJom9zfL._AC_UF1000,1000_QL80_.jpg",
        title: "With Straw",
      },
      {
        key: 1,
        url: "https://ii3.pepperfry.com/media/catalog/product/1/0/800x880/1000-ml-stainless-steel-water-bottle-1000-ml-stainless-steel-water-bottle-uoxuxf.jpg",
        title: "Stainless Steel",
      },
      {
        key: 2,
        url: "https://www.bigbasket.com/media/uploads/p/m/40216446_2-cello-h2o-glass-water-bottle-920-ml-clear.jpg",
        title: "Glass Bottle",
      },
      {
        key: 3,
        url: "https://www.theauric.com/cdn/shop/products/Copper-Bottle-Merchandise_1024x1024.jpg",
        title: "Copper Bottle",
      },
      {
        key: 4,
        url: "https://tiimg.tistatic.com/fp/1/007/028/pure-water-plastic-bottle-272.jpg",
        title: "Plastic Bottle",
      },
    ],
  },
  {
    category: "Home Furnishing",
    items: [
      {
        key: 0,
        url: "https://www.re-thinkingthefuture.com/wp-content/uploads/2021/04/A3848-How-to-enhance-Soft-Furnishing-Aesthetics-in-your-house.jpg",
        title: "Sofa",
      },
      {
        key: 1,
        url: "https://images.woodenstreet.de/image/cache/data%2Findian+circus%2Fpoppy-window-blended-velvet-cushion-cover-set-of-5-12-x-12%2F1-750x650.png",
        title: "Cushions",
      },
      {
        key: 2,
        url: "https://tiimg.tistatic.com/fp/1/007/981/beautiful-and-authentic-stylish-modern-home-furnishing-fabrics-595.jpg",
        title: "Chair",
      },
      {
        key: 3,
        url: "https://hometown.gumlet.io/media/cms/icons/Furnishing/bedsheets11.jpg",
        title: "Bed",
      },
      {
        key: 4,
        url: "https://assets.architecturaldigest.in/photos/60083e4154beb9e516da87bb/16:9/w_1360,h_765,c_limit/D%E2%80%99Decor-HeiQ-Antiviral-Air-Purifying-Fabrics-1-1366x768.jpg",
        title: "Sofa",
      },
    ],
  },
  {
    category: "Sandal",
    items: [
      {
        key: 0,
        url: "https://5.imimg.com/data5/KJ/PD/MY-4029679/designer-ladies-sandal.jpg",
        title: "Golden Designer",
      },
      {
        key: 1,
        url: "https://cdn.anscommerce.com/image/tr:e-sharpen-01,h-822,w-940,cm-pad_resize/data/khadims/22-apr-2022/64300264350_1.jpg",
        title: "Pink Casual",
      },
      {
        key: 2,
        url: "https://cdn.anscommerce.com/image/tr:e-sharpen-01,h-822,w-940,cm-pad_resize/data/khadims/22-apr-2022/53001553083_5.jpg",
        title: "Flat Slip-on",
      },
      {
        key: 3,
        url: "https://images.jdmagicbox.com/quickquotes/images_main/ladies-sandal-ss-480-211013369-rd1dw.png",
        title: "Sparx Ladies Sandal",
      },
      {
        key: 4,
        url: "https://m.media-amazon.com/images/I/81POKCfF9ML._AC_UY1000_.jpg",
        title: "Selbro Sandal",
      },
    ],
  },
  {
    category: "Lips",
    items: [
      {
        key: 0,
        url: "https://shopaarel.com/cdn/shop/files/main_dea8127e-feb8-44bb-975f-3677a3ec2b7a_283x_crop_center.jpg",
        title: "Lip gloss",
      },
      {
        key: 1,
        url: "https://www.gaurashtra.com/image/cache/catalog/Products/Cowpathy/Choco-Coffee-Lip-Balm-300x300.jpg",
        title: "Lip Balm",
      },
      {
        key: 2,
        url: "https://callosangeles.co.in/wp-content/uploads/2022/01/10.jpg",
        title: "Lipstick",
      },
      {
        key: 3,
        url: "https://lunna.in/wp-content/uploads/2023/02/NEON-LOVE-scaled.jpg",
        title: "Glossy Lipstick",
      },
      {
        key: 4,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu_sEi4qwZKvJ15-kryPPHiOB2-8OtccLG0Q&usqp=CAU",
        title: "Captivative Chunks",
      },
    ],
  },
  {
    category: "Sports Equipment",
    items: [
      {
        key: 0,
        url: "https://cdn.xxl.thumbs.canstockphoto.com/sports-game-equipment-for-badminton-sports-equipment-for-badminton-vector-illustration-flat-eps-vector_csp80667944.jpg",
        title: "Rackets",
      },
      {
        key: 1,
        url: "https://thumbs.dreamstime.com/z/d-rendering-single-black-white-leather-ball-playing-football-soccer-game-gear-sport-equipment-team-playing-d-127455346.jpg",
        title: "Football",
      },
      {
        key: 2,
        url: "https://gmcricket.in/media/catalog/product/cache/757ea7d2b7282843694bdb6de7a23598/d/i/diamond-808-english-willow-cricket-bat_1.jpg",
        title: "Cricket Bat",
      },
      {
        key: 3,
        url: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png",
        title: "Basket Ball",
      },
      {
        key: 4,
        url: "https://www.tennis-point.co.uk/dw/image/v2/BBDP_PRD/on/demandware.static/-/Sites-master-catalog/default/dw63f7f26e/images/007/056/03679000_000.jpg",
        title: "Racket",
      },
    ],
  },
  {
    category: "Free Gifts",
    items: [
      {
        key: 1,
        url: "https://cdn4.ethoswatches.com/the-watch-guide/wp-content/uploads/2023/04/Watches-Under-rupees-5-lakh-featured.jpg",
        title: "Tissot Watches",
      },
      {
        key: 1,
        url: "https://m.media-amazon.com/images/I/51hzv5mCIpL._AC_UY1100_.jpg",
        title: "Brushed Square Gold Cufflinks",
      },
      {
        key: 4,
        url: "https://www.tennis-point.co.uk/dw/image/v2/BBDP_PRD/on/demandware.static/-/Sites-master-catalog/default/dw63f7f26e/images/007/056/03679000_000.jpg",
        title: "Racket",
      },
      {
        key: 0,
        url: "https://m.media-amazon.com/images/I/919qgMW685L._AC_UY1100_.jpg",
        title: "Wander Agio Scarf",
      },
      {
        key: 1,
        url: "https://www.gaurashtra.com/image/cache/catalog/Products/Cowpathy/Choco-Coffee-Lip-Balm-300x300.jpg",
        title: "Lip Balm",
      },
    ],
  },
  {
    category: "Perfumes",
    items: [
      {
        key: 0,
        url: "https://m.media-amazon.com/images/I/71R8B0AMXoL.jpg",
        title: "Arabic Oud",
      },
      {
        key: 1,
        url: "https://in.ajmalperfume.com/cdn/shop/products/EMULSE_EDP_50ML_1.jpg",
        title: "Emulse Perfume",
      },
      {
        key: 2,
        url: "https://bellavitaorganic.com/cdn/shop/products/Senorita-Woman.jpg",
        title: "Senorita Women Perfume",
      },
      {
        key: 3,
        url: "https://media.cnn.com/api/v1/images/stellar/prod/220707134827-editors-perfume-missdior.jpg",
        title: "Miss Dier Perfume",
      },
      {
        key: 4,
        url: "https://michaelsbouquet.com/cdn/shop/products/10_6181244ab38002.57769809_charcoal_1_c20ad429-0ef9-4d7f-b956-0dbfe38b10a1.jpg",
        title: "Charcoal Perfume",
      },
    ],
  },
  {
    category: "Scarves",
    items: [
      {
        key: 0,
        url: "https://m.media-amazon.com/images/I/919qgMW685L._AC_UY1100_.jpg",
        title: "Wander Agio Scarf",
      },
      {
        key: 1,
        url: "https://m.media-amazon.com/images/I/71mhw+E2niL._SL1500_.jpg",
        title: "Pashmina Scarf",
      },
      {
        key: 2,
        url: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/16948012/2022/4/21/ea059551-9e71-43c2-946d-70a55551fd0e1650519042980ClothHausIndiaWomenBlueWhitePrintedScarf1.jpg",
        title: "Black Scarf",
      },
      {
        key: 3,
        url: "https://cdn.shopify.com/s/files/1/2690/0106/products/DSCF0959_360x.jpg?v=1673866007",
        title: "Pink Scarf",
      },
      {
        key: 4,
        url: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/10134189/2019/9/26/50b38595-182c-4677-936f-49b4ce8fa91e1569499638285-Roadster-Unisex-Navy-Blue--Grey-Printed-Scarf-42215694996372-1.jpg",
        title: "Blue Scarf",
      },
    ],
  },
  {
    category: "Mufflers",
    items: [
      {
        key: 0,
        url: "https://m.media-amazon.com/images/I/61IvE2ecwNL._AC_UY1100_.jpg",
        title: "Black Muffler",
      },
      {
        key: 1,
        url: "https://woollen-wear.in/cdn-cgi/imagedelivery/ZMUrshz-omHo_iJ4haWPew/accessories/mufflers/purewool/m915_checkred-500x636.JPG/public",
        title: "Red Muffler",
      },
      {
        key: 2,
        url: "https://m.media-amazon.com/images/I/91ElzLtpw1L._AC_UY1100_.jpg",
        title: "Designer Muffler",
      },
      {
        key: 3,
        url: "https://5.imimg.com/data5/BW/HV/DD/SELLER-6920678/designer-men-woolen-scarves-500x500.jpg",
        title: "Women Muffler",
      },
      {
        key: 4,
        url: "https://static.fibre2fashion.com/MemberResources/LeadResources/6/2022/6/Seller/22203848/Images/22203848_0_women-mufflers.jpg",
        title: "Pink Muffler",
      },
    ],
  },
  {
    category: "Innerwear",
    items: [
      {
        key: 0,
        url: "https://5.imimg.com/data5/WV/ES/MY-5343253/mens-boxer-brief-underwear.jpg",
        title: "LiverPool",
      },
      {
        key: 1,
        url: "https://contents.mediadecathlon.com/p2073281/23b6b6fe2c0dc523a69e8cdb98ca0692/p2073281.jpg",
        title: "GYM Wear",
      },
      {
        key: 2,
        url: "https://www.lydur.in/wp-content/uploads/2021/10/Van-heusen-trunk-10032-sailor-blue-2.jpg",
        title: "Comfortable Boxers",
      },
      {
        key: 3,
        url: "https://5.imimg.com/data5/EG/MC/SQ/SELLER-39930444/men-printed-boxer-short-500x500.jpg",
        title: "Printed Short",
      },
      {
        key: 4,
        url: "https://m.media-amazon.com/images/I/61lOyESGIJL._SL1001_.jpg",
        title: "Mayi Underwear",
      },
    ],
  },
  {
    category: "Eyes",
    items: [
      {
        key: 0,
        url: "https://www.vizulize.com/wp-content/uploads/2019/06/Intensive-Dry-Eye-Drops-e1587568001649.png",
        title: "Eye Drops",
      },
      {
        key: 1,
        url: "https://media.self.com/photos/60a7de7d11d243659df381e5/master/w_1280,c_limit/bareMinerals%20Strength%20_%20Length%20Brow%20Gel.jpg",
        title: "Pat McGrath",
      },
      {
        key: 2,
        url: "https://img.jakpost.net/c/2016/06/12/2016_06_12_6292_1465712720._large.jpg",
        title: "Concealer, Pencil",
      },
      {
        key: 3,
        url: "https://m.media-amazon.com/images/I/61Xh1CwuTYL.jpg",
        title: "Mascara",
      },
      {
        key: 4,
        url: "https://peachesandcream.in/cdn/shop/products/Beauty_of_Joseon_Revive_Eye_Cream_Ginseng_Retinal-500x500_500x.jpg",
        title: "Eye Serum",
      },
    ],
  },
  {
    category: "Flip Flops",
    items: [
      {
        key: 0,
        url: "https://www.walkaroo.in/pub/media/catalog/product/cache/6dbcc4eeed34785cbd4d3edcf75b4ba8/w/c/wc4269-olive_1__1.jpg",
        title: "Flip Flops Grey",
      },
      {
        key: 1,
        url: "https://img0.junaroad.com/uiproducts/18430228/zoom_0-1687936641.jpg",
        title: "Beige Slippers",
      },
      {
        key: 2,
        url: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/18814952/2022/11/6/a65f4416-a86c-45b1-ad06-7a32119bd00a1667717435331PumaUnisexBlackPrintedPopcat20Sliders1.jpg",
        title: "Puma",
      },
      {
        key: 3,
        url: "https://5.imimg.com/data5/SELLER/Default/2022/2/KR/NV/NH/9615630/big-fox-men-s-synthetic-stylish-casual-formal-slipper-chappal-flip-flop.JPG",
        title: "White Flip Flops",
      },
      {
        key: 4,
        url: "https://www.jiomart.com/images/product/original/rvnsjijzqd/style-height-latest-flip-flop-slides-slippers-for-mens-boys-slippers-flip-flops-black-8-product-images-rvnsjijzqd-0-202209241544.jpg",
        title: "Black Designer",
      },
    ],
  },
  {
    category: "Makeup",
    items: [
      {
        key: 0,
        url: "https://marscosmetics.in/cdn/shop/products/AKA2927_1500x1000.jpg",
        title: "Complete Kit Affordable",
      },
      {
        key: 1,
        url: "https://images-cdn.ubuy.co.in/633aa97815018e66a727c80d-all-in-one-makeup-kit-includes-12.jpg",
        title: "Nakeds premium quality",
      },
      {
        key: 2,
        url: "https://static-bebeautiful-in.unileverservices.com/5-makeup-tools-every-girl-should-have-in-her-makeup-kit_mobhome.jpg",
        title: "Laureal Paris",
      },
      {
        key: 3,
        url: "https://m.media-amazon.com/images/I/81p95jIpHML._AC_UF1000,1000_QL80_.jpg",
        title: "Mixed Beauty Make up kit",
      },
      {
        key: 4,
        url: "https://www.brides.com/thmb/5XjmzU3qD62I1DIQVEI_SM7TdMg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/best-wedding-makeup-products-4802579-BRIDES-43a4b722b885411da93c58cc15f8427e.jpg",
        title: "Eye Liner",
      },
    ],
  },
  {
    category: "Hair",
    items: [
      {
        key: 0,
        url: "https://media.glamourmagazine.co.uk/photos/62851f323bae9e87dffb6cbd/16:9/w_2580,c_limit/HERO%20HAIR%20270422%20HERO-HAIR-270422-default1_SF.jpg",
        title: "Glamour UK",
      },
      {
        key: 1,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4pjx3_vkGYWVrcuCKQvUZugdhihH7YnRh3g&usqp=CAU",
        title: "Rute",
      },
      {
        key: 2,
        url: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1643143325-41iitTTGuIL._SL500_.jpg",
        title: "TRESemme",
      },
      {
        key: 3,
        url: "https://cdn.shopify.com/s/files/1/0037/7690/5283/files/saha_hm_freebie.png?v=1690537308",
        title: "VediX",
      },
      {
        key: 4,
        url: "https://www.nykaa.com/beauty-blog/wp-content/uploads/images/issue328/salon2.jpg",
        title: "Loreal",
      },
    ],
  },
  {
    category: "Socks",
    items: [
      {
        key: 0,
        url: "https://m.media-amazon.com/images/I/81LOVMWvufL._AC_UF1000,1000_QL80_.jpg",
        title: "Combo Offer on Socks",
      },
      {
        key: 1,
        url: "https://static.nike.com/a/images/t_default/710aff1b-c2cb-4f41-ac9a-8101d44eb7a5/everyday-plus-lightweight-ankle-split-toe-socks-3w224x.png",
        title: "NIKE",
      },
      {
        key: 2,
        url: "https://assets.adidas.com/images/w_600,f_auto,q_auto/37a7e489f6954eccbdc4ae74011d5e3a_9366/Winter_Socks_3_Pairs_Grey_HN6657_01_standard.jpg",
        title: "Adidas",
      },
      {
        key: 3,
        url: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/bbc9726c-de91-4944-9309-51c6dfa103d8/nocta-crew-socks-6MRPsB.png",
        title: "Nocta",
      },
      {
        key: 4,
        url: "https://assetscdn1.paytm.com/images/catalog/product/A/AC/ACCBALENZIA-SOCJAGR34899D551A483/1563522054066_0..jpg",
        title: "Woolen",
      },
    ],
  },
  {
    category: "Bath and Body",
    items: [
      {
        key: 0,
        url: "https://images-static.nykaa.com/media/catalog/product/9/8/9821decBATHB00000109.jpg",
        title: "Toast bath products",
      },
      {
        key: 1,
        url: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/18938076/2022/7/6/eb67afc3-1e5f-48ef-a80d-cc19ccddc1a21657092653911BathBodyWorksMangoMaiTaiGentleGelHandSoapwithNaturalEssentia1.jpg",
        title: "GinGhasn",
      },
      {
        key: 2,
        url: "https://media1.popsugar-assets.com/files/thumbor/rqBKACO388HviCaHnJPuRNw0wR4=/1115x1500/filters:format_auto():quality(85):extract_cover()/2020/03/20/842/n/1922153/a3ae94ef71caba69_023882694-1.jpg",
        title: "Black Chamomile",
      },
      {
        key: 3,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQljrmYT-fMoR_kgY--9JDBawrwuRAfnW0UFLBLXGS5Thvq_U4J85GlLYgE1lZCk9tSOc0&usqp=CAU",
        title: "Shea Moisture",
      },
      {
        key: 4,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNdRxZqYULZx4EBQOP57LcrUcYcGCz-eufzoRXCX5lT37qd-RO2s3FMaBLangPuk0n614&usqp=CAU",
        title: "Premium quality",
      },
    ],
  },
  {
    category: "Jewellery",
    items: [
      {
        key: 0,
        url: "https://fashiondeal.in/image/cache/catalog/Calf-Jewels/twinkling-fancy-jewellery-sets-9859-600x800h.jpg",
        title: "PC Jewellers",
      },
      {
        key: 1,
        url: "https://m.media-amazon.com/images/I/81+aEuZFKTL._AC_UY1100_.jpg",
        title: "Apara Jewellers",
      },
      {
        key: 2,
        url: "https://assets.vogue.in/photos/6319d02f92205c07fe7589c6/2:3/w_2560%2Cc_limit/200825-6E-122ArchanaAggarwal.jpg",
        title: "Bridal Diamond Jewellery",
      },
      {
        key: 3,
        url: "https://aurajewels.s3.amazonaws.com/images/AuraJewels/hpb_gold_rhodium_bangles_1_.webp",
        title: "Aura Jewellers",
      },
      {
        key: 4,
        url: "https://kinclimg5.bluestone.com/f_webp,c_scale,w_1128,b_rgb:ffffff/product/dynamic_banner/mobile/home/1664992328891-BS-Ashta-Mobile-Homepage-Banner-w564-x-h415-px.jpg",
        title: "Ashta Jewellers",
      },
    ],
  },
  {
    category: "Watches",
    items: [
      {
        key: 0,
        url: "https://m.media-amazon.com/images/I/71VjM5LOeYL._AC_UY1000_.jpg",
        title: "Biden Watch",
      },
      {
        key: 1,
        url: "https://cdn4.ethoswatches.com/the-watch-guide/wp-content/uploads/2023/04/Watches-Under-rupees-5-lakh-featured.jpg",
        title: "Tissot Watches",
      },
      {
        key: 2,
        url: "https://m.media-amazon.com/images/I/81WZG4pD6jL._SY879_.jpg",
        title: "PinTime",
      },
      {
        key: 3,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOzorm6V_yAUdFAFPjBGg7_y47j7XawedUCw&usqp=CAU",
        title: "Fossil Watches",
      },
      {
        key: 4,
        url: "https://www.mensjournal.com/.image/t_share/MTk4MDMzODYwNDIyODcwODEz/norqain_independenceskeleton42mmbluesteel.jpg",
        title: "Men's Luxury Watches",
      },
    ],
  },
  {
    category: "Dress",
    items: [
      {
        key: 0,
        url: "https://assets.ajio.com/medias/sys_master/root/20230626/2F0s/6499942ba9b42d15c9f30225/-288Wx360H-466307419-blue-MODEL.jpg",
        title: "Hetvi Creations",
      },
      {
        key: 1,
        url: "https://i.pinimg.com/1200x/bf/c9/24/bfc9242285c872a8d4ffb70c04834425.jpg",
        title: "Nispo Suits",
      },
      {
        key: 2,
        url: "https://5.imimg.com/data5/ANDROID/Default/2022/1/EJ/OL/TY/144942171/product-jpeg.jpg",
        title: "Raymond Suits",
      },
      {
        key: 3,
        url: "https://www.bonsoir.co.in/cdn/shop/files/party-wear-2022_1024x1024.jpg",
        title: "Ethnic Wear",
      },
      {
        key: 4,
        url: "https://cdn.luxe.digital/media/2019/09/12085336/smart-casual-dress-code-men-style-luxury-luxe-digital.jpg",
        title: "Casual wear",
      },
    ],
  },
  {
    category: "Shoe Accessories",
    items: [
      {
        key: 0,
        url: "https://m.media-amazon.com/images/I/61zqkHjttGL.jpg",
        title: "SlickFix",
      },
      {
        key: 1,
        url: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/18365844/2022/5/21/477f19b4-dab9-46d2-ba01-bf81c63f8bb81653132333675ShoeAccessories1.jpg",
        title: "Myntra",
      },
      {
        key: 2,
        url: "https://media.glamour.com/photos/56958de4085ae0a8503764be/master/pass/fashion-blogs-slaves-to-fashion-1202-runway-hippie-shoe_clips1_fa.jpg",
        title: "Glamour",
      },
      {
        key: 3,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPkgHDlqPw2cvmoOMRccJA7PW9ILPmncbxsg&usqp=CAU",
        title: "Royal Shoes",
      },
      {
        key: 4,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ43AOVZz9NkKnleA5qkXYF0hVzEnpMlBq2A&usqp=CAU",
        title: "Heddels",
      },
    ],
  },
  {
    category: "Ties",
    items: [
      {
        key: 0,
        url: "https://m.media-amazon.com/images/I/81IZ0K-7YzL._AC_UY1100_.jpg",
        title: "Shlax and Wing",
      },
      {
        key: 1,
        url: "https://www.ninesparis.com/img/cms/noeud-simple-cravate_1.jpg",
        title: "The Nines",
      },
      {
        key: 2,
        url: "data:image/jpeg;base64,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",
        title: "Cinabre",
      },
      {
        key: 3,
        url: "https://cdn1.vectorstock.com/i/1000x1000/44/45/cartoon-single-classic-necktie-vector-29564445.jpg",
        title: "Vector Shock",
      },
      {
        key: 4,
        url: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F2c%2F75%2F2c7547d148221c1f0efa2e6bd8bb718d881fe38f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        title: "H & M",
      },
    ],
  },
  {
    category: "Gloves",
    items: [
      {
        key: 0,
        url: "https://m.media-amazon.com/images/I/51xpmh71ABL._AC_UF1000,1000_QL80_.jpg",
        title: "Nitrile Gloves",
      },
      {
        key: 1,
        url: "https://rukminim1.flixcart.com/image/850/1000/l51d30w0/sport-glove/3/7/n/left-right-xxl-racer-y6aburg1xx21-170-29-riding-gloves-yamaha-original-imagfstkyrsygkhc.jpeg?q=20",
        title: "Yamaha Racer",
      },
      {
        key: 2,
        url: "https://www.bigbasket.com/media/uploads/p/l/40013166_1-natures-plus-rubber-gloves-garden-yellow.jpg",
        title: "Natures Plus",
      },
      {
        key: 3,
        url: "https://www.highnoteperformance.com/cdn/shop/products/revit_sand4_gloves_750x750_0780bf7d-2c2a-44bb-8a2d-c82b69df9b94_grande.jpg",
        title: "Revit",
      },
      {
        key: 4,
        url: "https://m.media-amazon.com/images/I/61aTSGUynEL._AC_UF894,1000_QL80_.jpg",
        title: "CASF",
      },
    ],
  },
  {
    category: "Wallets",
    items: [
      {
        key: 0,
        url: "https://m.media-amazon.com/images/I/91hBN1GROOL._AC_UY1100_.jpg",
        title: "Hammonds",
      },
      {
        key: 1,
        url: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/18467618/2023/5/30/b0fa99f9-beea-4dcd-b561-910e79b295e71685448178638VOGARDUnisexTanWallets1.jpg",
        title: "RFID Protected",
      },
      {
        key: 2,
        url: "https://rukminim2.flixcart.com/image/450/500/ksqeky80/wallet-card-wallet/r/c/3/new-high-quality-genuine-men-s-leather-wallet-12-1-wh2055-5-original-imag68hpn7dpzvca.jpeg?q=90&crop=false",
        title: "Wild Horn",
      },
      {
        key: 3,
        url: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:best,t_productPageHeroGalleryTransformation_v2,w_auto/India%20LOB/Gift%20hamper/Leather%20Wallet/IN_Leather-Wallet_Hero-image_01",
        title: "Personalised Wallets",
      },
      {
        key: 4,
        url: "data:image/jpeg;base64,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",
        title: "Gift Hamper",
      },
    ],
  },
  {
    category: "Headwear",
    items: [
      {
        key: 0,
        url: "https://americanneedle.com/cdn/shop/files/HERO_Carousel_Mobile_15_1536x960.jpg?v=1637781664",
        title: "American canneedle",
      },
      {
        key: 1,
        url: "https://static.augustasportswear.com/marketing/2020-Website/Landing%20Pages/Pacific-Headwear/PH-IntegrationComm-Graphic-1-Hero.jpg",
        title: "Pacific Headwear",
      },
      {
        key: 2,
        url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgWFhYZGRgaGhkaHBwcGhocHBoaIRoZGhgaHBocIS4lHB4rHxwcJjgmKy8xNTU1GiU7QDs0Py40NTEBDAwMEA8QHxISHjQrJSs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQMEBQYHAgj/xABHEAABAwIEAgcEBggEBAcAAAABAAIRAyEEEjFBBVEGEyJhcYGRBzKhsRRCUnLB8CMzgrLC0eHxFUNikhc0c9IWJFNUg5Oz/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIxEAAgICAwEAAgMBAAAAAAAAAAECESExAxJBUSIyE2FxQv/aAAwDAQACEQMRAD8AvYpIdUnACMBWYUICkjFNOA1GGoChv1a66tOMqMMQFDcU0eVOMqPIgKG2VDKnWVDKgKG2RDInOVDKgdDfKhlTnIhkSChvlQ6tOciMNQFDTq0OqTvKhkQFDTqkXVJ5kQyIChn1SHVJ5lRZEBQ06lDqU7yIZEBQzNFEaKdliBYgKGRoIjQT3KiLEBQy+joJ5lQQFCIRhABGAgYYRhAIwgAwugiCOEAGEcrldBAAlGEw4pxNlFri4y4Cco13ieQsfRZXxrpk99eKYe9+UMIbJEhxJytbIAmDOpjWDCaQmzYXVGixcB4kJJ2PpDV7P9wWNmtxV8xSytJOUZmgCQQAG5tInXv1Rto8WIjM0Dsx2xILQ7KBGmpMbm6Oor/w2GnxKk7R485HibgWTinUa4S1wcOYII+CxGueJU3h7mB+vuu56wARuZ0370nQ6a16ZLalMt0ic3ZMEE3NuYyxqb3lFAmzdUapXAOlrXMZLnOaWgmZLm++B2r5ichMHltZXOlUDhLSCO786oaoadnaOEAjSKChCEaCAE6jw0EmwCjXcbpZg2UfScO+jVC3UCfIa/BZC3HPDs0lZybukbcUItWzS+MdKadMkNMkGD3JThXSJlUCCCsk6TPcYqtMyAH/AIFNeCcVcx2YOspzs16x1R6EaQRIRkKg8E6aMAAeYuB5K+06gc0OaZBEhXGVnPODiwQkzUbMSJQxubI/J72Ux4xZY83pZUzkvJEGCNCDNwhyaHCCltmxoLMf/Gg5lBLsX/CvppACOF2Go4WhznACOF3CEIA5hHC6hCEAFCguknSBmHY5rXMNXLmDXGwHM952G5hSPFse2hSdUcQIgCZILiYaIFzc7bSsS43j3YrECk0uLnPOZ0nc3tJBAHu/OIhpCbF8Xjq+PrOZSdlZPaeZHZtBImS6cxA5me9WTA4SjQpEUm5cuQuJIzO7QnM7XNrY6Tsm+EosoUxTY3QAzNySBJJEfk+E13jXEXDJSY/KXmHOH1WkgAN3HvGSNQr0Z/tgvH0iebY1B1FrE8td+Xmh1zZkaybRO0kd+vPyWe4+gcNlq0XuzNIDw53vG1y3dp5Gddedh/xFgZLnBoIBuSPqh0gkwCTO6LE4k7WxTWzJiSNAWyN4n+mhUfxTAsqs7UEgGLCJAEyRzM89tVH4XjNOoSyn2iBmIgxBjNDovvf+Skcxj7us3J0kR9YX0GwHinYVRRznwVUuaJBkEd2+U7LTOjfSOQH02kMdd4c4ZS4kAxyI1mDrfdUnj1MubJyzAJjS2nle3cQobgHFjhqoNywyCBGhBaYm2jnevgoeDTav09I0arXtDmmQfyQe9KqmdG+MBjwxzgWVGsIJP+Y7/VoZJjWdFc4UtUVF2gQhCNc1PdMawUiqI7iPFqTGkOuLgj5rEuNY+m172MENDjln7OyfcZ4k8vcHE6kR3qr8WpEgP5arK29nV1UVgM4pzwW/VUf1T2l0AloEkjYcz3JanU0hP8JjnU3te2CRqD7rhu13cU9EPORDh1XtBzjMGQFrnRLpMC0Nef6LHcZVp9a40gWsPaDD9QnVoO4B0Unw/iOWLmfmk72hqmqZ6IY8OAIMg6FZb7TeimWcXQbb/NaP3wPn6o+h/S91OqKVU/onmJP+W46eRWn1abXtLSAWuEEbEFWnaMWnFnmPrTzQW0/8NcF9j4lBPr/ZX8hcgEcLNMf05dn7BhhNvBTHRzpO6pUax1w4wpU86G+FpXZc4Ro4RwtDE5QRwiQBTPaPxDJSawZ5cHOlsWtk7TT7zSHO0/qsy6JUQ576h1kNHKO+doHwVq9q+IPXZZENpNPPKSXE+EiLxtrsqj0aqQ2NwC700tvv6KokP0sWIeBBmSDN4vyEfV3Pj8K7x3CZ2tLfeaDbciZ15gXvzUrXfMWG+giQTudoPxTDjNVzKbyDewsLNkx/M+abBLJCNxxfkZVdDA4SQDJiwBHroP5qR4lgGuD6oeXQ0lsXbAIGsWBHI6ptgsI2pRFoc0GCNT2tD67pnisM+kInsP5EZXWEnLsYOu0pD9wWrgTWtpMIaCS0Od3yJ9Yt5DZTlOTIFzAtMaTEk3GuokXuqrwzjzGMax7XNygDs3BHORpvt6qycJxrarRUDty2/cIIAAFzfynVUmZyTO8TgS+mcjTq7caySI0sfnOkKg8QwDmOIIPctVo05dtoQDzBteYESdpmVB8e4L1jQ9gk6mGm/IxMx+bIasIuiN6HcTa5vVPfBMgTHZte50kSJBFj3BbLwDiPWsIcR1lM5HgfaiQROoI35hy85ZTRq5iARJBHKD3aePIrVuCdIsjmYg5sjw2m8BpcBGXQg69vNBE6i2ihq0Xp2aWiRscCAQZBEgjQjYoyFJoYz7QuH9TiXuiG1O23xPvD1v5qjVMYXAsAkLe+nHABisM5oH6RnaYd5GrfAi3osLdSaw2se/We/vWbVM3jLshnjMjcmUFpLYe3YPG4PIhcZ5sdPxT+qxj2kOsdiomi7K4tOvNAaFqmFJGbcaBJUHkmdIT1ta10yqth2YWB2QmDVE5QqtczLvv3rXfZ9x/6RR6p5/S0wBfVzPqu/A+CwujX0IKnuC8bfQqsrMPbbqNnN+s0+KStMUl2R6FhBUP/AIn4b/03+g/miV9jPqZNQfmY0zoFbuiuKZTcKjjZhDj4A3VLxNJ1J76euR7mT3gwfiEH414ZliAYClo2jJem+4bpVQfBBgHnr5qYwmJbUbnYZGi874fGuFgSta9meLL6L2nZwPqI/BOLleSZxj1tF0RFdIiFoYGK+1Un6Q++7ABB06sTeYO9lVuj1aHAHQmPWFOe0sD6dV0u5s3BnstGg003/lFW4e/K/wDPkhCrBca3OInkd4FgNh3awmeOw4exwk3EGxuftbSZ7tx4p+1kgHQEZiOYubiJG/l4risw3EQALRGsa92k371RJTaIrUnQ0GeUEgnmFOcLwD3HPVMugBoMdkET4C0iPU8nj3sDJLgLwO8RsLzHdoo6pxJ18mh8Yja3xvOqEgbsl6PCcLTOZwBnZ18p55Zt/VLnitBkXaIDuyG5tdobY7+8RtoqticW9/vvkcrAeTQAB6Jm/GsGklPtQurZd6vTIN9xjzp75a0bTYBxiRpKia/SbEvmCxng2fg6R8N1XWPqP91oaOZSx4c/Vzwe4KXyJGkeFs6xNYOJe92YnWd1YeiGNDmPpl7Wsze6WyXZhFiQcsNzbi0mLFUrE0HMMOU70HxBbiWAOy5yGzbmCZkG0BJSthKNI2PoLxrN/wCXdmjtGnLSIaD7lyTpcT3ibhXVY3jMW+j1TmhzXMLWtLRcMBdctMkAkGSb2kCHEnVeC8RFeix4jNEPA2eAM0TtuO4hEl6TCXg9IWMe0vgHU1zUaIZVlw5B/wBdvnr5lbTCjePcHZiqLqL9HaEatcLhw81LVmsZUzzU3MXWR4nCgidCNT8ypvpBwWphqrqTxcXBGjm7OHcfgovrFFm1A4rwyrhXtZUAhzQ9j2mWPYdHNPzG3omD3TbZWilxWnUwT8FiA4uZ28K8CSx29M8mnnpB7gq6yjl11QSr0xMYKBLXHwXdGm6YmEvm3CDnDzRZVCuQcyjSGYoJDBVqF7nPOrnOcfFxJPxKQxLtPFEHFcvMuAVkeDptcALWPZLUzNrHYBg8+0VlTY5LXvZUR1dWABdmng5C2KX6svqBCOEIVmJgXtIj6dXu6c41iNAREai++8qr0rPHerX7TGRjq20vbsBPYYZmJN5HlCq7aJzgi8GSTpEpgtF/wVNjKDHvcBbfYBxaTtadPSVBcQ40Hdmm0QPrOvfubp5n0Ch+JcaL4aTmDfdaLNGt+83/ALKHq1nvt8BYJuSRMYtj/EY0ZiXOLnEybySe8pq7FudpDR6lN+pj3jHcl6L26BZuTNYwXoTMOXG8nxStRjGDSSliCwgkWOia4xwcbKLbZq0kguudmAcTHJupHKVO8D4a9725nkSdPkFB4WmZsFbOjtJ+droMNInSfRKbpFQjbyOOmfAMjA4CSBJhUrhtcMqMeRIaZiYmO/bxWxcXbnpOBh1vNY1imZXuGwd8EuGVqg5oVk1LFfpW1CASx5Y8DMGktIBDTaMocRBN7amCpX2e8TNKq6m/stqECTEdbaO0NScwGt8w0UJwmoKmFZndlHVEaktbkc3NUcJzFzpaIHcUzwrGNHvk5Gl8gA3EODQLizw0At1nQCQOraODTN2IXJCQ4Ziuto06n22Md5kCfjKclZmxXOmHRtuMpQIFVklju/dp/wBJ/kdlg3EcMabnNe3K5pLS06gixC9NFZN7V+DBtVmIa21QZXffaLHxLf3VEl6aQl4Z1gHQcx9E6rNDgmpsg15UM2Qg45SuX1BK7rEHVIZByTQmdZ+/4oJOByRpkjgNTch2eQPDv5wlnvABKtHS/ACg3B0YAc3CMc+N3vc57/imhN+FXpkk6fBbJ7JqBFGq4iJqNaPANB/iWR0hey3X2d0cuCYd3Oe4/wC6PkELYp4iWZGiRrQxMH9qlHLj6jrmerMfsMkD4X7+5VDFZnC5ts0WHnzWie2GjGIacxl9JhgCdHPaTM2NmjwWfPMtHgPkkNEa5m49FO4ajnY002jM+BfZ2h8lCuapnoxWh7mGbiR4jXz/AJKJas14/wBqG/FuGFgAjtAdp2aQfItBaZ2THD0HPe1oEkkAK08UozaJ71F06fVnN9b5KFK0bOCTJXjWBd9HBLbtIdMbED8VAYPCF5AAV2rVhXpjLcFgHMzofPVF0KwrA4hzZIOnLn4+SlSwXKFtMrWKwjqBAcIJEwR8uasvBsY1zYbY23HmrF0jweCqUHsNUuqHtU9y14BOUDcHQ9xPis8p4SrRfLQYGt7pOpAk4s0N78zLcjayyTjjMtZ/ir1R4i/LzB5qk9IKgdVJRxKpC5mnEs3RLENdh6jHEEtuASBDBDnhsXkuyWjbuTpj3PpCmewHEPzdnIIOYQJByxAh03APhBdCMWWVS3sjM06/aE5cpixv6Sn2GY05g9+QA3dlBJmZIFiRNzJHwXZF4POkvyN54CwDDUA3Tq6ZHm0O/FPyojopiA/B0HjTIG/7SWfwqXUM0WgiozpBwluJoPpO3EtP2Xi7T6qTRJDR5qx+Fcx7muEOa4tI5EGCFHvI3K032rcCiszENkNqDI6NqjQYPm391Ze+mASNVFZN7tWFnGyBceSPq0A1w0KBHGU8kF1mP2UEAFVpEgi2imuknHnYquKrmZA2mymGg5rNBkzA1JKiw26Wa1Fh1yHhnAuF1v3QoD6DRj7J9czpWCUabcwMLdOgD5wbRsHvA8Jn5kpw2LkX4llhCEYRrQwMy9s2HmnRfA+uybz9RwA2vDlkTR2R4LffaXhc+Bebdh7HXtAMsO3+tYC0W8CR8UmOI2qWPJFh6xY9r26tM/zHouqibudySKWC8YfEiq1rgbEend4qL402FF8H4h1ToJ7Lte48/wCameKdsTrusHHrI61JSj/Y/wCAcSZToMa1hzkuzHW0mInSxTKvjnUHlwJBMkJu3EtYGMFzlHqQm2PAzDO4TawuQEKOQcnWCY6OY1oNSq8l1VwLWzcAG5iecBcdJsS9pa5sgnTme8DWIKicC9wd+hls6vcBLR3Wt5X8FaW1MNTYxje26Je90lz36Eyb5Ro0bX3mW0k7BW1RWcFxFzSZBAcDI2n7Q5HwUPjKhc4lTnESHPLgLKvVnS4q4/TGfwf8GrZKtN5mA4TGsTBA8reatzsKAc7i0szlgENbPJ3N+knw32pFF0ZXHYz8Z3Vwx1frHsewFpLWugX2Bm5k+MajUiI2ic01k07oRx+hSwrKVZ4YWZnAumC1znPF41AN/Hxi8U3hwDmkFpEggyCNiCNQsMrVHtDHNY4Z8xgguY5uTswZB90GQcxkWtKWpY2syMlWoxkB3YJiJbENaYBFwdNdxdNxIXI1s26EIWacK6TYhmYNe6swsES1zyx0bmZzTbLcXElSnBelVUZjiGlwIluUMDwQcpt2Zb5SDZT1ZS5ES/TfAtq4OoD9QB4PLKcx+EjzWBswsyRoSYW39JuMNr4R7KGbrKkMyuY5rgDd4MiAcsiJ3WY1MCKLS2o4ZwLNF/IrKTpnXxRuNlYxFODCQJT2rcrpmEm6Q2hjJQUn9GCCBURzGwlAU2zzojnmUBY8ovGZbv7Pv+SZ95/zXn9jzEtFua3f2W1M2AbeYe+fgfxVR2TPMS3wjhQ/Eek+EoGH1ml32WS93oyY81DVPaBRM5KFV2t3ZGDx94keYV2jJJlg4/g+tw1anElzHRt2gMzbjS4C8yPdD3tP2iVrh6dYjE1BTYW4dpMdkZnnuzmwPeAFnfSzgvU1nGLPGdp0HgBz7rqbzQJYsrtZyRATpmHJvHL+ngnVTh5jMNeXddVQWRTwnmE4i5oym7fiP5pN7NoTd7IUtWVGTWiQc5ryIcbesclLis0NOVrASIJyNJ0g32Mb/iqronNHFka3/PxUuPw0jP6O6tZ0209PgnmAo57vflaJ11dbQDYeKjnY+0AAJs6seaOrG5kpjcWIMcoF+/56KEXb3k6rhUlRm3Y4b7o8Vc+D0RW6sucYFOCLwGtc4EEkEXDgBPI6KnUPcP3h+C1D2Ysb1b6j2ghhAaItPaJkb3M37lSl1yyHFywhfh/RStXFJ4b1TCHFxcSHES0MIaQSZDQbxrvKsmH6J4dhl73Em7mtLmMLt3Zcx+aHEOkoZeVVuI9Kw4G5Wb5JPRvHgjHZN1cdhsO8sptjMNQ4zIMi+2tlyeJ0nNMsteZPr6784Cz6vxRmdriCYPNcY7jjnmGjK0bKbl9L68a8RdGcZF2MZljeYsdFU+kD2k5m67wop2PcLyZSL8UTqbISzYOSqkO6JESunYkDRRbKhBIGhQcSU6J7El9MPNBRklBFBYHO2C7w1EF3auiDYsjaSmSiw4fhILYcIY76wE5eTvBTnAKNSiH4Wo5wH6xkHsVBEb2NoPkkeiPEGHsVfdNu5WLieBNMsyAvpjtAi7qfe3mOYWbbNlFNEfiMMHBxeWhoE9oG37QgeqRY+i0CXGA0iDcFp1AcYlO8Tw2rVyuZ22NvlaDmLubg7SOXMJq/gmKqENf+jYb5n2tyye8T3f2T7IzcHZBOxApPOQyLgHQkXE9x1XWPxbauFIsQwwSNWGIm2rTf19LRwn2f0HkmtiXPgxDGhg2JmZOvgp+n0I4e0ObkeQ4dqaj7+MFW5JoyXG08mIYermcwREWseW6maNdkFj+y7VptBEEDTw3ELRsR7NuHukM6ym7ZzXkxM7OmdVn3SbgL8FVy1XZ2v9yoBZwntA/ZeLW3zeSuMkyZcbWRniuHggwLjw87zH59ITF4UjYqaZierENJcy8MJvfQjkIPu337wm2NxDTBgi2msdxMz+fBU0TFsgiw8kkbJ9VxDZsPkEhWuPdi6ksRhBECgEgOiuQjKJMB3hz2H+IVp6M8Qexgpskmo5zYsIc0Bwg6XBdvsFVaLuyRzI8Nvz5qW4HVAfTDhpWp3AvlIc1wuQLiOWiKTww7OOUTXEaWJztpvaWucYa02JMTp4X9Uyw3C31HvaDLmRMAkS4w0AgakwPMKZ4nXZ9Losl2Rge4BpENJmwHc7MD58yVB8OxMVq0jLmBMAt2Oh0EESbRNu6H0SE+aTQpR4TmqtpzLjcgXLRnDb7TcGJ3F03pUGS8HVr8v74PxaPVcUKxDwSLkPMC5nNmAJtJ9bbSYSNerlLzsSHctYdFu+R8UnFUCk7yS3D+Gsqkict4BClW9C2n/NH+3+qjej+Ihs95+ZVqwuNELnk2mdUVFoZ0ugrN6x8m/wBU3x3RGmy4qk/shTpx40nf8/h6oV6oeIPhr5qO8iukSn/4I37R9EFYurHL4oJ9mLqilswspQ4AJJ1bkj+mmFsQqFXYfJBBjzU3wTpXVpPyOf2ALSJ+KgTigRBUU2oRPilVj7UaLxDpo9xDQYEySwi4GgXWH6YsMhxIPM3PqVnbahXTKZcl1Qu7LjhOk7mOe5psXH8EpiOljnEdojwKqApBuspnWxZabAed01Gx962aNQ6ZGAACT3qE6b8a+kUabDBcH5vC0fiqwzFvyvdNhA0gaG1uf4KQyNa1rHiCwS4HsknLOpPMnW/yNx482Zz5rVJFdL3Ae8RraSjZiXDed73TzF0BlpAESW5ib2kzfX8PBR5ZBgqzJZFHVyeQ8h+ZXdB4Mh2hm/I7Onu+SRyrhIYrXoFji06j8/JJkKUpRUZf32b/AGmxa/MAEeSZVWboYIbwjhBLUGFxgD4x8UAd0qdjyH9LeN1N06baLsPleHZn03uaBLonL2TpEl4gkG48m7cJ2g0NcM3Z7RtMxc2jSIPNNjXH0hhBhrXsAIvAaQJF4OhPmq0TssHE8rse0e4wZR7uWGReG3gkZiQNJKhm5muc6mSHMe6YiwzWLTzt5RKkekTAys17bZgBs1xtBBa0w3lHIck1whPWVqYAOcyC6BG5udJBNu5DJWhg192xz2Ot4ga8vijqvknvH5Hx+CRD7jeDtI/28tEdeQQT+Z18dUiqHXDMXlGXkVN0+IwNVUwYNk+oune6zlE1jKiy/wCITunNHiJtdVeXBKNxJGqnoaKRcP8AEBz+aCqn0vvPqgl0H3GTnosxK76k8oS9LDWm2oCszGwYSU7w3Baj7gQNZNgrJ0d4ewsc8tBOYtbPIZb+pT2q4A2/us3KnSNIwtWyHw3AGMEvOY8hYLrFNAEAAAaQntauovGVtUlb2VhLBG1TqoPEntQpPGVwAobNJJWsUYTY7oBxLW7Zs3dz9ICfYvM4e8ToGgmXdqAXAHW9pCZ4R5DpBgtET42Kd4KXVmk2yy86WIBII75j8haoyY6rhj60MjI1oaHE5DAEBwbaZ1gAmw11UdxXDBoYRvN4IkSYOp+HoE/pFxc8kB2aDmi4M3JgdkmTc738B0kHZpjMXRuQBeJIEEggGRPih6JTyReEoZmk8vh4xskC0A7G5Fkvwt3aI7Wlsus2A8l02h2jed+8TsfQ3SKvJxw58PjZ3ZI5g6C3+rKlKuHN5m0hNajYd8tvzdOsfXLXmLtcA6/eLx5pPQ1sY1Gp9wvDF5tr9Uczp4eW6j3vlTnCWAAZpAAnS0XJzd2uvwlNBJ4JLGV2sptZTphr3WJbOaLy8SB9UkAzHaHJVmq0tcCBG48tD8FKB+dxeQ6IApgRIa3SY3IaZ5yVG4p2YzvfedimyUqLXxCl1+FZWzNJaRmABhs5iSXTAObbm4iFAYiqOtY7Xst90BtxIMbRrfv0Uv0XqNfRfScSPMXnTsxfQDWdEyxGBe0AwbdqQR3a3sYE76If0Sw6Iyu3K8x4+M7RruuXi3MmfLwv+YXVZ0vk9qw75t4pVjcxM2A28NlJYzOiNlQhdlnaLeZ+KRYgY8o406FO21AdR6JgKSksDw97yGsaXkkAAaknQAKWhpgys5olJ/8AhzF/+2r/AP1v/kjRQ7IapqnbXgC3OfP+6RNMnRK4elDhO10MEXThn6Ogxu8SfEyT6aeSisbiRMJKtj7aqLfXJKyUc2bOWKHVTE2UXjMVAk+QU9wHo5Xxb8jBAEZ3mctMf6ubuTdT3C6c9M+hzcM9jWuc4PbIce4AOBjvvbZwVqJnKV4Rn1eoXGSuWN0T3FYMttzSRoFpgjafH0VozZ1ScBNtbap5gQ6HvBOgHx/OoTMkBPaYikRBBJzA6XgWIi+17WnXakTIf8Jwzy/s3I7RAuQfe2IvIFu/ySHGQ51SSMwEmQBpAEzEuS/DMMMjnjWQDmkCJ7QMAjLDZ7Vh6JsGsOYunaCGj1mZaY8dL6qvCPSLwVTLU7O+Zo13BA08e9PKNPtONw2d7mJ5xBgppj6eVwIMgjMDBG53OpUvTrtyW3zTLb6WGp1/tukim/SINDMZB/tzgdyLH3bTdecuU/s2XYccxiw8e+158EMYIZlJ910jXRwnw1B9UD9I8BS2MdlY1s3IvBmBNhfQHu7+9R2GbL2jmQl8SZOb7RtMzlFm/Ac0kN7JbEPDaLcsSRcxBHakAG57/PyUY8gtEz70d0QVIY0EUhO8AWi1yRcAny5qPokZW3vm02gA7802ShxwBxFWABJnUxA33Fvz4y/HKGV0ZYzElxgHtm5yOAykF0mW28VXQQH7RPl6lWLFMYaYe679ACTAA+JI11jtFHgNZsgcTZ1xeIgiI8RsU8wWTUiTt3EyAezaRqBzATTEsIcMwgwPE95+acYF8O1nawB18bDx7tlJQeNpZX6REc+4GJ2kEeSZvpw9w/1H0m3wUpxCmIYQLRFvtX357+qbGn278hPjEH5JDQvgsLJWm+zfg7c7qxFmdlv3yLmO5tv2lR8G0WWz9DKLG4Onl+sXl33s5aZ7wGgeSSyypKokzB7kF2grMTzs54+q1NsjpstW/wCHNOb13xy6tv8A3fgum+z1g92uR/8AGCfXPHwU0zRSSMxp8Pe7W3irD0a6LPxLwGS2mD26xFhzZTH1n9+2vIG+YPoLhmkOe6pVPJzg1vo0AnwmFZ6TGtaGtaGtaIDWgAAcgBoEKInP4JcM4fTw9NtKk0NY3bUk7ucdXOO5UH0/wYfhg7djxfudIPxhWSVH9IsM6phqjGiXZcwHMtIdHoCnJYFF/kjCMdh76eHj/crnDYIHNdt48wJEg+JcfJSGNeJzA2DokfaAJ19PVc0KbMrWue4CJOpIeS7tWtGh81C0aTavBA43AEOMFuu/qIcOfMrmpnaADNtZg72iNdVN1qjBEQQSJgkEQRInkLQ4C8d5AZ4hrXvAdpDQH/WjNABbBJ8o89VaM2dNYOoY5zLalwnS4IObQ+6bHeUhUa0gZbATE6TIGUWBNhMmwhS3GGuphrAXNGQSA4Oactgb/e+PmmdGjmaIIsM21wGzedz2dJ27pszIjjNENa0XzCxuCI3iNLxZKcOrTTyxfQOkyIiN4HZn180nxBrYy6OvoZBgkSCBAmLePeuOCEHO0kDsyJDjfQxl0Mc7Jel/8hMeC64veBbTvuCTpzSWPaWiDIJAmZvBsfQpxTc5rnS0GRFtLCYnZHxr3WCDIL5Jgk+6dRqOX9CgFsjML7wA1MgeJED4lP8AjDWtcGtBgBoF5kAATbnCZ8OA6xuawzCfn+CkukLO2xxmXNGrS3syQ3XWwSWinscY6mRRbIgkSIyxr2vHe87c1C0B2h425aFStUuFASPeBubCGkQRa8WEj8DMUwwRa0/GCmxRFnk5jcHTnPmSPmpTDy5lyOyLXsDDuV9J/tcRpFtidvl5aBPMK47NaOZJAG2g9NEmMb4q5abx8SPTVKYCC+DJEaDcyCZiDGqHEASGkuBMmAPHWIgCdtefNDAPLXgxOkAxF9yCUITJLFDMwATDXSNAATAi9zv69whCvSAyuGnjOwPzJUjQphzMpIHZJJJ00AbbUkuN+7vUfh3l3YdNrTyNr+EAeiTQ4umSfCGZntaLyQtL9l3EesoV2Ez1eIeRf6jzmbba+ZZ9wtzaQc8kdhrj5gWv4q1exvDPbTrvIIY4sDT9qM1/T596UfS+XSNLQRIKjE4RhBBMQYRoIIACSx/6qp/03/ulBBJjR58Og8Wp/T0p/n6qNBIsZ1/fZ+18yuX/AK39ofNiCCEJi/GNKfgP3GJpg/fZ4P8A3QggtFszYnxD3/N3zeojg/vH7p/eaggpeyloXxXvn73/AHrjjfu0/B38KCCGNbEuB/rqf3vwKfdJ/wBcz/pt+b0aCXhT2JVf1A8f4So52rfP8UEExIdVveb4fxFd0/eZ90figgkCO8ToPut/dK5wOo8UEEIGTWF0H3h/+lRIP/W/s/g5GggDnEf8u7w/iK2b2d/8kPvv+TUEEkOfhZkEEFRmf//Z",
        title: "Capture Headwear",
      },
      {
        key: 3,
        url: "https://images-cdn.ubuy.co.in/633ff3300bfb8e2efb39f7cc-tough-headwear-kufi-hat-kufi-hats-for.jpg",
        title: "Kufi Hat",
      },
      {
        key: 4,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhh9MN0l_7Cdl8ypUQpl1EzEj-mAqoPVH4KQ&usqp=CAU",
        title: "Acemire",
      },
    ],
  },
  {
    category: "Eyewear",
    items: [
      {
        key: 0,
        url: "data:image/jpeg;base64,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",
        title: "Peter Jones",
      },
      {
        key: 1,
        url: "https://m.media-amazon.com/images/I/41A0jZlgu5L._AC_UY1100_.jpg",
        title: "Poshh Eyewears",
      },
      {
        key: 2,
        url: "https://www.jiomart.com/images/product/original/rvdcw06x1n/us-desire-eyewear-blueray-block-uv-protected-computer-glasses-frame-for-men-and-unisex-medium-product-images-rvdcw06x1n-3-202210210056.jpg?im=Resize=(500,630)",
        title: "Us Desires",
      },
      {
        key: 3,
        url: "https://www.novaeyewear.com/skin/frontend/novacombos/default/images/popup-jklin.jpg",
        title: "Nova Eyewear",
      },
      {
        key: 4,
        url: "https://m.media-amazon.com/images/I/31QXkLVF16S._AC_UY1100_.jpg",
        title: "Stylez",
      },
    ],
  },
  {
    category: "Belts",
    items: [
      {
        key: 0,
        url: "https://m.media-amazon.com/images/I/71cQG1Oy8DL._AC_UY1100_.jpg",
        title: "Creature",
      },
      {
        key: 1,
        url: "https://m.media-amazon.com/images/I/417+WTiVDaL._AC_UY1100_.jpg",
        title: "Reversible Belt",
      },
      {
        key: 2,
        url: "https://media.istockphoto.com/id/1029383076/photo/collection-of-leather-belts-on-a-wooden-table.jpg?s=612x612&w=0&k=20&c=wmTnklWIPJyRxpiooEVlwCewGGBq9LdxYbE8ijdxCkc=",
        title: "Leather Belt",
      },
      {
        key: 3,
        url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFRUZGRgaGRgcGhoaGhkYGhkcHBgZHRocHBwcIS4lHCErHxgaJjgmKy8xNTU1HCQ7QDszPy40NTEBDAwMEA8QGBESGTEkISE0NDQ0MTE0MTQ0MTQ0NDE0MTQ0NDQ0NDQ0NTE0NDQ0MT80NDQ0MTU0NDE0ND80MTQ/Mf/AABEIAL8BCAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQIDBwQFBgj/xABCEAACAQIEAwUGBQEFBwUBAAABAgADEQQSITEFQVEGByJhcTJCgZGhsRNScsHw0WKCorLhFCNTY8LS8RYzQ5KTF//EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACARAQEAAgICAgMAAAAAAAAAAAABAhESMQNREyFSYXH/2gAMAwEAAhEDEQA/ALWEURBHCFOEcIgjgIDljhEUR4kAI4QAiyoIQhAIQhAIQhAIQhAIQhAIQhAIQmNjMdTpKWqOqKNyxAgZMQyteP8Ae1hqd1w6ms/X2U+Z3+ErriveBj8S2QVCgY2CUhqfK+5gehamOpA5S65ulxf5R9GsrC6kEXtp1HKedMNiDhruzl8SQQLsWWlcdb+J/PYcus73uk7Qsz1MNUa5JNRL7398fYwLRIjGEkMYYEZES0eY2AkaRHkRpgMMIphABHgRAI8QoEeoiARwEIcI4RoEeJAsIQlBCEIBCEIBCEIBCEIBCE1nGON4fDKXr1FQeZ1PkBzgbOa3i3GsPhlL16qoB1Iv8BKp7Td7btdMIuVf+I41/ur/AFlX8R4lUrMXquzsebG/yGw+EC1e0nfAdUwVPy/EfQeqrufjaVdxjjtfEsWr1Wc9CfCPRdprGebPD8LCAPiLqOSD229fyj6+m8DHwODeqdPCo9pzoq+p5nyGs3aVEooVoi5KHNV3Y+m9lvyH13kFfFlgVXKEVdEFgLa3Gm/WYqrc29g5Njsfn1ECViSb35r49bG4trM/gmOfD1kqpoyMD662I8wbEfGYJIF7WUlEOU2ytY8vp9Y69iR0LeHS4Gh06iB6e4fjFrUkqobq6hh8RtJjKz7oe0AYPg3Oq3en5j3wPQ6/GWXVqKouxAHnAQxJz3E+2WFpXBfMRyXWc+/eShNlptbqYFgmNImn4Px5axVTYFlzL5j+s3JgRkQjjCAoEcBACLaAAR4iAR4gKBHQhAIQhAIQhAIQhAIQmNjMWlJS9R1RRuWNhAyZr+K8Xo4dC9aoqKOpAlY9rO95FzU8EodtvxW9kfpG7SouLcZr4ly9eozt5nQeg2EC0u1Xe8xumCSw1H4j/wDSv9ZV2P4rUrOXquzufeY3t6DYD0mtJhAlapeTYXCvUNlG252C+pk9LABAGrZlHJAPE3r+UeskxGKDBVXwKPdB0Hr+b1MCei1OifCCz2PjOgH6B+//AIkGdmFwxYsxGvPUWvc25DaRKWux3GoP32+MUBLINVPM/Y3PmIEzMt3zXDW06X/1kzAj2gHXJuN7dZE2fK+zgkAnoeunwi+HMcpKHJsdBe2o1gS07MuVTmBpnwndSDyigg7XIBQ21zrdbadeUiPu519zR1v8CbdP3jna4zHXwL413UhveF/5aBk8O4i+HqpWptZ0IIPI6WIPrY3E6jG8exOLXO9Q5T7qmwHlOGrvqTpa51Gzc9eh1nWdnMGy07v7xuB5f6wHYbDAHUTPXC/Acz0HWShVuRcAgXN9NOs1nFOJaZEP5TrpmudzfbyHxPKUSYjtA1OtTambCkRYdQOvqDLv4TxBcRSSqhurqD6HmJ5sXXXkOupBN/mLiWJ3X9ofw6hwznwVDen0D8x8ZBbJhFMIDgI4CAEcBAAI4CKBFgEIQgEIQgEIQganinH8Ph2Var5WYXAsTcTGHa3CnZyf7pnH95QDV0G9k+WpnFo7psbjpMXKytzGWLU4v2yVUP8As6Z35Z/Co9TKj7SUOI41s1eshW+iBiEX4W19TNth+JKdG0MzQ4O0nKrxivG7I4gc0+Z/pIm7L1x+X5n+ksZlmj4vxqlS8IId/wAoOg/Uf2lmVqWSOOfgVVdWygcyToPpCnUSn/7ZzPr4yNB+kcvUxuO4jUqEljpyUaAfCYRbTbnvNs1MzuRqc1zrfU39YuYFvGNhrGBBcAGSo7XY2vyMIEHhYq3O1ttJPdsyhlzWHLXT+WmLmXKtwQb79R8ZPTBznI17LpfX4QABMpysVJYaE6EX026X+kya5YF8yhgEAuLD0P3PwkBfwqGS4zXBHPy05nWKzLdyjkabEb9Rr8oElNxdcj+4fC1yL9Pj+0jzaC4K3QjS1m6EiD3LAOubwaZdeWm381mz4dws2DuSNLBSRzi1ZGRwPgxc/iuAF0KgbMbcx0nTrUyL4yOgtz6ACc8uNdDZXFhvm9lfU/tvMLH8Tdi/vC2UtfXXkAPYHlzkl2WabTifFL3AGmUnSxsdgT1N+Ww8ztpSb6t4l8FzzH79fpMYLfMUNrKottflaZJYBiFORroMptYnT/SVEh0sdx4rML6Wce0Pj9YtNypBU2Km4I6g7j5Rh3NxkYlx/Zb5x3Mi1jqcvLYHwn5wq+exfaAYvDhif94llqDz6+hiSo+x/Fnw+JQodHZUcdQxtqOoveEMvQwWLFhCiEIQCEIQCEJruMcXo4am1Wu4VR13PkBzMDNqOACSQANydhKt7cd6qUs1HB2d9Qam6KfL8xnEduu8atjCadImnQv7INmcdWI2HlOAJgWHwrHvWpipVYu7FiWY6nX6DymbcWnOcCxFqSj1+83KVrzle3adJHogyKpiDSGZnAXz/brNdxHjyJ4U8bf4R6nnOXxmLeo13Yn12HoOUsx2zcvTd8W7T1HulO6LzPvMP2HlOdzC94C8AdNp0k0527KBpe8VidBaNNtI4A30O0BQyk66RVFlJDc7RFY2NxDw2A2POBkMWuoIBtr6xAyHOSCvT+dY1B4tG2HPX4R2ZshuoIJ35wHpm8AV789dgd4ti2cFLsWGvQi256RBTQkFhkUDU9TbYDcnX6TMpEBRbwqfebdj1tux+npIrJweHRCGOp0Avc28gJkYrHgA62sNgfEfX8g+vpNW+MIJyjbdj7R9OS/D4mYejAA6Enf1MaNszEYliVV1GUXNhsOhHO/U7yOklwCral9j5ayNWZSxFiALfaPTLdQRlIGp213EqHuwObMCpLjUfWZJOjZvGC66jcW9Pl85BTzWXTML389P5eLhit1ynKc5NidLcv6fGBkpr7JzrmfQ+1t1Ou0Ea9rHMPB4W3FwRoflIw4BUsMhzOQy8/4ZkYfDu+UBc7FFy5dxZucK6Pu/4QcRjE/LTs9S+4t7I8/EITN4Xw56WquwPUEg9dSN4THOLwq84QhNsiEIQCEJqO0nHKeDoPXqHRRovNm5AQMftZ2ooYGialU3Y3CIPac9AP3nnHtX2qr46rnqtZQfAg9lB5dT5yDtLx+tja7VqpuSbKvuqvJQJp4BCS0qTMbAXP8ANSeQ85k5FQXNnb/AP+77QMzBNlQMxyr15nXkOf2keN4ozDKnhU/M+p/aYNaqWN23/m3SMsLzMkjVyt+iEm8ARc3iqDraJfTaaZC7RTfSJpFtrvAUHXaIttYAnWGltoDgDbQ7x2bUXF7RoUcjHoh1a+nWAIAb6HXaZ2HpKPbbQalQQLHoW5emp8jMN6gACqfU8zf7SMtsCNB0gZ9fFLfwgMeRYCy+i/1+UxHrFjmbXlI1A1N7RxuABbeA5U0FjqeUkD+LxLoB/SMXKW6WH1EcMwXrmgKiAhQGsSdR/P5rJXc+Ist9Mt9v5vGZlLai1h9fhHIjWUKQcxvb0/8AECWmBe6NYhCbHr8Y69sodb+Em4315yGpUBzllsSbAjlb/wATZcJ4TWxFX8LDjO+UC3JQfeJ2AHWS3Qbw7DO7IlMZ3IYKlrkk32l29h+xaYRA9RVOIZQGI1CDfKt/qedpk9jex1LBIGIVq5UB3tYDqqjkL/OdSJ5fL5d/U6akQrQXoPlCTAQnBrbIhCE+k5iEIQCefu9/jrV8SKCklKZyqBrdr2JtzJOkvytUCgkmwErPAcAp065xDeOsQVDH2UuSSV55je2bptbW4Ve3YjErhziKlkPhyU29ts3UbLoDodfITQJhrauSB0HtH/t+Pyne94fadg74WmQLAfiORdsxswVeS2FrnqdLW1r5y1tTe5gSVMQCuVfCvQfudzISNgDFY7XELAmAa3jbjnHLfWxiG9vWA0DTeKQdIMBppDLroYATrtEW1zHC+sTlrAANNI4g6CLTp3225k7D1kivr4N+bH9hy9YDcoHtb8h/XpGM7EgW0HIbROpIiqpAuDvARbXJ2jluB6wOllI84oUE6HaAEDQWt1jkGpIO0QMdSReAAsANzvAcTpqNSd5IqjN4TsL6xoJv1CxmYWOmpP0gS5jl1F8x3jxlLaHLYfWLhsM7uqUwXb3VUFiTfYAby1Ox/dfcCrjxuQwoqfTR2H+UfOZyzxxm6sjj+yXY/E40rlAWjmzPUYXXzCj329NpefZ3s7h8HTyUEtfV3PtuerH9thNnh6CoqoihVUWVVAAAHIAbSaePPyXL+NSCKIgEdOagQgIQiaEJj18Qq7nXoN/9J9JhkSN6gUEsQABckmwA6knacF2p7bVMFWp1HQNh3V1yrYOXAzA3OthYD+8dNpx1StxPjRux/wBmwl9ALgMPIaGqfM2UHbUWgb7tj3pUUzUMIgxDe85zfhi2py5fE/rovmdpxfZPtbiq+PpirVOSoWU0wAEHgYqFXlZgNd/MzpuPYLD8KwLmhTBqVLU87gMzFgbsxtsBc5Rpe0rLshUKY7Cn/nUx/wDZgv7yjJ7waWXiFf8AtMrfNVmhK9DOs70aduIPpulM/wCG33E5JSCZAut+togO5Igo0JBgQQLQEsLbxzA6AGDcgRaAAvAQ3vtE01iqDqbyWlh2IvYBRux2H7k+Q1gQBdN5kiiF9tv7vP4/l+8kaoqLZQQeTkWY+n5fvIWDABbXv894Azta9hbkOQ85FpbmGPy3+0eUBOVTb1vvFbfxC4Gmm0BGRhZd43wk9LftFW2rA29YNcLYjfnAFJF23EQ2ttqf6xxQGwBi5je5FwIC5TewN40vrciJpYm9j0nTdnOxGMxljTp5KR3qvdUtf3ebf3Rbzktk+6OaC+Ea78p03BOyVWrleuyYah/xKtlLfoQkFvXQectXgPd9hMJZ2X8aqNncDKp/spsPU3PnNF3lcOPgxJuQCEe+uUH2WHTUW+M4/NyvHFrToOw2G4ZRY08G6PVt4nzBqjDnryXyGk7lRPOOHL03V0Yo6kEEciJfHZXjIxWHWps/s1F/K43+B3HrOPkwvdJW5AigQAjpyXZIsISghCECHiGJVELM6oBuzFVA57tpsJyOH7X8PqP+GmLplybC5KhmOmjsAGPx1lSd5XFa1bH10eoWWnUZUQnwqF00XYHz3POcijb3F59GVhe3eD2OONRWRiKlMNkB2a9rj42+glZ8K7V47BVaWHquwp0nVWpsqnwZvEAcuba9tdJt+xXeK+HC0cUWqUdAr+1Upj7unluOV9pYHaPs1heJUQ6suYrenWSx05X/ADDy3Eow+83Afi4GrbU07OPRTr9CZSHBHtiaDflq0j8nWejqGAY4VaFYhn/BCORszBMpI9TrPNdWmaVRlPtU3I+Ktb7iL2O374KRXGo35qK/4XecNfTUbyx++hL1MM42ZHF/ipH3MrghrASBpy2jiuoAMyuHIrV6SVB4GqIr2NjlZgGsR5Ezddv+CphcYyIMqMiugGw3Ujz8Sk/GBzovc6REW+gUknYAXv6TLw+BYrnY5FOxO7joq7sfPbzmYbKAlMEXHjB9s+rch5DTrfeBithVpgfiG7HZAfCP1MPsPmI3FuTlVgNNiNAAeg5SQi5suqr7rftIUNszA25ZTrpAbYkgDxKo8r7fWRLYksDboDHlcotqrH1Gl4rraykfEQGE2BLLqdjC2gCte/LTpHqCT4dQOR/msQBTmYnLbbXc7aQGPYkAi3pBb6kG4HWbbg/Z7F4gf7jDvUDe9ayj1drL9Z3/AAXudZgDiq+XqlKzN6F2Fh8AZm54491dKpFuYJJOlufpOx7Pd3OPxABKfgUzu9S6kg/lT2j8besuvgfZPB4UD8GgoYD228bn+81yPQWE3tpwz8/4xZi4rs93b4LDZWdPx6g96oAVB/sp7I+NzOxYSS0QrOGWVy7XTEqJea/jfBxiMNVo83Qhb8mGqn5gTc5I8LMy6u1UFw6l4ClRQr02KEHQgjkbzse7/FhMT+GpGWopBAPNQWB+hHxnf1uD4d2LtQRmOpJUEk2tc356CZNHCU09hEX9Kqv2E9GXlmWOtM6TxYQnBRCEJQQhCQUb3vdlTRrnGpf8Os3j55KltfQNa487+UrUqQumxnrTifDqeIpPRqqGR1KsP3HQg6gzzN2s7PPgsQ2Ha9gc1Njs6H2WH2I5EGfQYaVjsCv88p0HZXtdWwNT/dnNTOr0mJCN5g+41veA9QZogGzdbRgbclfjKPSXZ7tDh8bT/EoPe1s6HR6ZPJh87EaG2kqTvL7IVqVepikXNSdsxyj2Cd7j1+8Z3RY8U8cqE6VkdCP7QAdT/gI/vS7sVVpgrTdlBqZlVWt47C5UX0Y21t5HpL2Kk71LPhMBVGzopv5NSRhK0VddDLf75VpphsPTBUMrjKgOuUIV0G9hoL+k5bsl3d4jE2eqDSpHmR4mHkP58IGp7EcFfE4ymoF0Rld25BUIa3qbAW8533evhEzUazJmezqL2KjVTcqfaOvPTXYyxOzvZejhUCU1yjmfeb1Mn4v2YwuJKmtSzFfZOZgR5Cxko861kZmCsGJ3YE6nzU9LcpjkE5nIuBoDsy9PXeXu/djw85rLUGbpUbw/pvtI/wD+WcP8NxVOX/mEX9bDWQUNUQhRcA5tcwOoHO8ZVXUKSCq7kchbn8p6Hod3PDVbP+ASf7VSoR8s1ps8F2SwNIk08JRBO5yBj82vA8zUaTOSVVqgFwAASfkJssH2YxbgstMpfk/g0v56n5T0hjeE03XKqhCPZKgC3wG4nH8QwL02KsPQ8iOokyysaxkqrR2NKqv4rgEnUJf7sP2lt9muwmAp00Y0BUewOar49eoU+EfATmuKp7A85aWETKiDoqj6TzeXPLrbVxkOSmAAAAANgBYD0Aj7RQIs4IS0LR0SUFoWiFgNyJj1cfSX2qiL6so+5jQybQmkxPa3Ap7WLoA9PxFJ+hmBW7wOHrtXzfoR3/yqZeN9Dq4TiqneThPdTEP6UmX/ADWmM/eOD7GCrnzY01H1aa430arvoSuaneDiD7GDUfrqj/pBkQ7XcTf2KFFfT8R/sBHCrqrLhK1GP40+2Vf00H+7NFHDeMP7VeoPQUk++svx5JpY5YDcxJW9bsVjqotUr1CDvesR/lhL8NPr2tCcf3idlFx2H8IH49O7Uj108SE9Gt8wJ2EJ7GHkJqdiwN1ZSQQRYgg2IIPON8QXyP0lrd8XZEqxx1BCVcgVwo9k8qlhyOx8wDzMq7DYRqrpTpKzu1sqqCzE+QEDadkc5x+DVB4hiKR0/KKgLn0yhr+V5dveDwJ8XhclEf71alN0N8uVgbE5uVgx18pqO7jsC+FY4jE2/GsRTQHMKYb2iTsWI002F+sspaPWUV/2X7ukpsMRi3OKxJtdnLOim3LNq5HU/SWBTpBf5/LSaEgIQhAIQhAIQhAJi43BpUXKw9DzB8plQgVh2lwDUKiZhdbkg7BgLaX5GJU7xsR7uBA/XVsR8FQyy61FWFmVWHRgCPkYxcHTGyIPRVH7TjfFutct9qz/APW/EX9jD0F+NR/sBAcY40/sqi/pw7n6s0tICLHxQ5T0qz/Y+N1N69Vf0rSp/wCYXi/+keJv7eKq/wD7lf8AJLShNTxYnL9KwXu1qt/7lct+qrWf7mZFHuroDVmW/lTB+pMseEvCJyri8P3d4Zfeb4Ki/sZnU+xOFH5z6tb7CdNCXjj6OVaNOymEH/xX9WY/vMqnwLDLtQp/FQfvNlCOM9G6gp4Smvsog9FUfYScCLCaQQhCAQhCAQhCAhEwsLwqhTZnp0aaO3tMqKrH1IEzoQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQP/2Q==",
        title: "Lv Belts",
      },
      {
        key: 4,
        url: "https://m.media-amazon.com/images/I/61qA64jYAIL._AC_UY1100_.jpg",
        title: "Vonsely",
      },
    ],
  },
  {
    category: "Skin Care",
    items: [
      {
        key: 0,
        url: "https://www.forestessentialsindia.com/blog/wp-content/uploads/2021/12/1-1.jpg",
        title: "Forest Essentials",
      },
      {
        key: 1,
        url: "https://images-cdn.ubuy.co.in/633aa97815018e66a727c80d-all-in-one-makeup-kit-includes-12.jpg",
        title: "Nakeds premium quality",
      },
      {
        key: 2,
        url: "https://amalabeauty.com/cdn/shop/files/Full_Travel_Closer_2_2000x.jpg",
        title: "Amala",
      },
      {
        key: 3,
        url: "https://m.media-amazon.com/images/I/81p95jIpHML._AC_UF1000,1000_QL80_.jpg",
        title: "Mixed Beauty Make up kit",
      },
      {
        key: 4,
        url: "https://www.brides.com/thmb/5XjmzU3qD62I1DIQVEI_SM7TdMg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/best-wedding-makeup-products-4802579-BRIDES-43a4b722b885411da93c58cc15f8427e.jpg",
        title: "Eye Liner",
      },
    ],
  },
  {
    category: "Umbrellas",
    items: [
      {
        key: 0,
        url: "https://www.ikea.com/in/en/images/products/knalla-umbrella-black__0934105_pe792338_s5.jpg",
        title: "Knalla",
      },
      {
        key: 1,
        url: "data:image/jpeg;base64,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",
        title: "Wizme",
      },
      {
        key: 2,
        url: "https://5.imimg.com/data5/TJ/JQ/MY-8898423/security-umbrellas.jpg",
        title: "Nylon",
      },
      {
        key: 3,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBuEo8Aa49puBJ5r9PfxpMYf-KnDdDTSgFwg&usqp=CAU",
        title: "Stromberg",
      },
      {
        key: 4,
        url: "https://sathya.in/media/81926/catalog/img01%20(3).jpg",
        title: "Personalised Promootions",
      },
    ],
  },
  {
    category: "Skin",
    items: [
      {
        key: 0,
        url: "https://www.byrdie.com/thmb/RzU8jh5F8FvVix56vkzfEzT7tZE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/single-ingredient-products-948c8e249b0b4aeb93f4ee373a3b6f95.jpg",
        title: "Virgino",
      },
      {
        key: 1,
        url: "https://www.jiomart.com/images/product/original/rvogmjiviw/vcare-bridal-facial-kit-for-radiant-and-glowing-skin-face-cream-for-oily-skin-beauty-products-bridal-makeup-kit-skin-care-skin-brightening-whitening-serum-suitable-for-all-skin-types-single-use-product-images-orvogmjiviw-p595156821-6-202211142325.jpg?im=Resize=(420,420)",
        title: "Bridal Kit",
      },
      {
        key: 2,
        url: "https://hips.hearstapps.com/hmg-prod/images/best-skincare-products-1656081764.jpg",
        title: "Best Skin care",
      },
      {
        key: 3,
        url: "https://media6.ppl-media.com/tr:h-750,w-750,c-at_max,dpr-2/static/img/product/301593/amrutam-amrutam-herbal-ubtan-do-it-yourself-skin-treatment-single-jar_1_display_1654845151_0cf082bd.jpg",
        title: "Amrutam",
      },
      {
        key: 4,
        url: "https://i.pinimg.com/564x/91/0e/c0/910ec0406fa6f7d01e68f5a8beae1e1e.jpg",
        title: "Pacifica",
      },
    ],
  },
  {
    category: "Nails",
    items: [
      {
        key: 0,
        url: "https://www.svetlepihnohtov.si/media/SlikeIT/Thumbs/my-nails-everyday-beauty-flaska-120.jpg",
        title: "Beauty Nails",
      },
      {
        key: 1,
        url: "https://static.wixstatic.com/media/37f098_fc94be8e5b4543209964788b4218acc3~mv2.jpg/v1/fill/w_512,h_512,al_c,q_85/37f098_fc94be8e5b4543209964788b4218acc3~mv2.jpg",
        title: "Miss Nails",
      },
      {
        key: 2,
        url: "https://www.thenailartschool.com/wp-content/uploads/2022/11/glam_mani_pedi_nail_polish_shimmer_bronze_04-300x300.jpg",
        title: "Glam",
      },
      {
        key: 3,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLfd6duoJ7RYBYsItCFqYg2Funpl7wrUMwA&usqp=CAU",
        title: "Kingdom of Lashes",
      },
      {
        key: 4,
        url: "https://www.safeshopindia.com/uploads/retail/NFEB23IBNAILPFR_460040.jpg",
        title: "Bee Nails",
      },
    ],
  },
  {
    category: "Bags",
    items: [
      {
        key: 0,
        url: "https://m.media-amazon.com/images/I/71K2DBFeGHL._AC_UY1000_.jpg",
        title: "HandBags",
      },
      {
        key: 1,
        url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.coachoutlet.com%2Fshop%2Fbags%2Fshoulder-bags-hobos&psig=AOvVaw0pXiIAWRaqEyn1WR29KzEH&ust=1692164538923000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCIjgoKX63YADFQAAAAAdAAAAABAz",
        title: "COACH",
      },
      {
        key: 2,
        url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.economictimes.com%2Ftop-trending-products%2Flifestyle%2Ffind-5-best-school-bags-for-kids%2Farticleshow%2F97000579.cms&psig=AOvVaw0pXiIAWRaqEyn1WR29KzEH&ust=1692164538923000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCIjgoKX63YADFQAAAAAdAAAAABA9",
        title: "School Backpack",
      },
      {
        key: 3,
        url: "https://media.dior.com/couture/ecommerce/media/catalog/product/i/6/1687970295_M1286ZEMF_M933_E01_GH.jpg?imwidth=3840",
        title: "Christian Dior",
      },
      {
        key: 4,
        url: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/22725240/2023/4/11/045c090d-deb4-4357-b2db-8a1e9c2a00da1681196735789MINIWESSTBlackOversizedBucketShoulderBag1.jpg",
        title: "Tote Bags",
      },
    ],
  },
  {
    category: "Topwear",
    items: [
      {
        key: 0,
        url: "https://tiimg.tistatic.com/fp/1/007/812/comfortable-and-breathable-nevi-blue-color-plain-topwear-t-shirt-for-mens-261.jpg",
        title: "Sehman Enterprise",
      },
      {
        key: 1,
        url: "https://www.lee.in/media/catalog/product/cache/44954175d426e9fec84d6690b916898c/l/m/lmsh004058_1.jpg",
        title: "Lee",
      },
      {
        key: 2,
        url: "https://www.wrangler.in/media/catalog/product/cache/db5018a6c621015a3ee67521f49599b0/w/m/wmts005923_1.jpg",
        title: "Wrangler",
      },
      {
        key: 3,
        url: "https://www.sinina.com/images/thumbnails/615/700/detailed/21/1060634655.webp",
        title: "Lemon19GRN",
      },
      {
        key: 4,
        url: "https://www.wrangler.in/media/catalog/product/cache/db5018a6c621015a3ee67521f49599b0/w/m/wmsh006754_1.jpg",
        title: "Wrangler",
      },
    ],
  },
  {
    category: "Sports Accessories",
    items: [
      {
        key: 0,
        url: "https://m.media-amazon.com/images/I/61FSBRkhJyL.jpg",
        title: "Head Tunners",
      },
      {
        key: 1,
        url: "https://rukminim2.flixcart.com/image/850/1000/kfu0h3k0/support/a/g/p/na-sports-white-color-sweatband-wrist-band-wrist-support-for-gym-original-imafw6ng8zyfvegt.jpeg?q=90",
        title: "Diego Sports White",
      },
      {
        key: 2,
        url: "https://www.suddora.com/cdn/shop/products/Red_Wristbands_Sweatbands_Pair_1000x.jpg?v=1614228655",
        title: "Sweat Bands",
      },
      {
        key: 3,
        url: "https://rukminim2.flixcart.com/image/850/1000/l3dcl8w0/fitness-band/i/t/d/wrist-and-sports-band-wrist-band-white-leosportz-original-imageganhgjzwydf.jpeg?q=90",
        title: "LeoSportz",
      },
      {
        key: 4,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpjHUWGrDxEzxSClgY7mSfyA0NgwmWidbTEQ&usqp=CAU",
        title: "Sportzzz",
      },
    ],
  },
  {
    category: "Beauty Accessories",
    items: [
      {
        key: 0,
        url: "https://www.sephora.com/productimages/sku/s1317734-main-zoom.jpg",
        title: "Bobbie Brown",
      },
      {
        key: 1,
        url: "https://static.javatpoint.com/list/images/list-of-makeup-items5.png",
        title: "Tpoint",
      },
      {
        key: 2,
        url: "https://www.colorbarcosmetics.com/cdn/shop/files/pride_month_ACCESSORIES_BANNER_copy_1_49bda7c5-ab77-4c23-b0bd-59744843dbed.jpg",
        title: "ColorBar",
      },
      {
        key: 3,
        url: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1604633435-derecka-1604633413.jpg",
        title: "ColorFix",
      },
      {
        key: 4,
        url: "https://akns-images.eonline.com/eol_images/Entire_Site/2021412/rs_640x640-210512180440-640.ecomm-Unique-Beauty-Products-1.jpg",
        title: "Color FX",
      },
    ],
  },
  {
    category: "Apparel Set",
    items: [
      {
        key: 0,
        url: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/21625372/2023/5/10/2dafbb04-5cf0-4d40-b76d-c6640c8c26c81683720097620-all-about-you-Women-Co-Ords-5291683720097037-1.jpg",
        title: "Myntra",
      },
      {
        key: 1,
        url: "https://autumnlane.in/cdn/shop/products/21_1511c65a-92e6-4ab4-8ef1-03ae90da4450_1800x1800.jpg",
        title: "Autumn Lane clothing",
      },
      {
        key: 2,
        url: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/22858200/2023/4/27/190af50d-4a62-42b2-93f6-aca26ae7c5961682582082917-Anaya-Womens-Cotton-Straight-Sleeveless-Suit-Set-46116825820-1.jpg",
        title: "Kurta Set",
      },
      {
        key: 3,
        url: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/22056818/2023/2/20/c3f1be13-0f47-4bfa-9c9d-873faea70b9a1676898419649AthenaMultiredfrontknottingco-ordset1.jpg",
        title: "Singelos",
      },
      {
        key: 4,
        url: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/21527904/2023/1/12/bd074ce9-a830-4127-b467-261be00f11a31673541480088KurtaSets1.jpg",
        title: "Myntassets",
      },
    ],
  },
  {
    category: "Fragrance",
    items: [
      {
        key: 0,
        url: "data:image/jpeg;base64,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",
        title: "CREW",
      },
      {
        key: 1,
        url: "https://in.ajmalperfume.com/cdn/shop/products/EMULSE_EDP_50ML_1.jpg",
        title: "Emulse Perfume",
      },
      {
        key: 2,
        url: "https://bellavitaorganic.com/cdn/shop/products/Senorita-Woman.jpg",
        title: "Senorita Women Perfume",
      },
      {
        key: 3,
        url: "https://media.cnn.com/api/v1/images/stellar/prod/220707134827-editors-perfume-missdior.jpg",
        title: "Miss Dier Perfume",
      },
      {
        key: 4,
        url: "https://michaelsbouquet.com/cdn/shop/products/10_6181244ab38002.57769809_charcoal_1_c20ad429-0ef9-4d7f-b956-0dbfe38b10a1.jpg",
        title: "Charcoal Perfume",
      },
    ],
  },
  {
    category: "Stoles",
    items: [
      {
        key: 0,
        url: "https://m.media-amazon.com/images/I/91Ockd8W3qL._AC_UY1100_.jpg",
        title: "Unisex Single Tone",
      },
      {
        key: 1,
        url: "data:image/jpeg;base64,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",
        title: "WOOL Nylon",
      },
      {
        key: 2,
        url: "https://m.media-amazon.com/images/I/A1ILSPUNGmL._AC_UY1100_.jpg",
        title: "Trendy Scarf",
      },
      {
        key: 3,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSIFuVPiOmLcOqHWuEjjYJ5hgU9NLRt2LZEQ&usqp=CAU",
        title: "Lapis Bard",
      },
      {
        key: 4,
        url: "https://img.indiahandmade.com/catalog/product/cache/ffd74bda99b48b5fc1e6ab593972ce80/w/h/whatsapp_image_2023-04-10_at_5.57.59_pm_3_.jpeg",
        title: "Single Patti",
      },
    ],
  },
  {
    category: "Wristbands",
    items: [
      {
        key: 0,
        url: "https://rukminim1.flixcart.com/image/850/1000/xif0q/wrist-band/j/m/f/pack-2-silicone-wristband-for-man-and-woman-46895-2-sky-original-imaggf8gyvyxpx2p.jpeg?q=90",
        title: "Personalized Bands",
      },
      {
        key: 1,
        url: "https://deq64r0ss2hgl.cloudfront.net/images/products_gallery_images/slider-170.jpg",
        title: "13mm band",
      },
      {
        key: 2,
        url: "Plain Wristband",
        title: "Paris Cufflinks",
      },
      {
        key: 3,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzdtDHx4ooeNRtJBF6qoYPdsCQcG7-i1c7ug&usqp=CAU",
        title: "Custom Classic",
      },
      {
        key: 4,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvn85Yi3GVjOkMgDYo_EqIBAUobPhYFORO8Q&usqp=CAU",
        title: "RFID",
      },
    ],
  },
  {
    category: "Shoes",
    items: [
      {
        key: 0,
        url: "https://www.jiomart.com/images/product/original/rvrgwpjvsp/bruton-trendy-sports-shoes-for-men-blue-product-images-rvrgwpjvsp-0-202209021256.jpg",
        title: "Bruton",
      },
      {
        key: 1,
        url: "https://assets.adidas.com/images/w_600,f_auto,q_auto/f9d52817f7524d3fb442af3b01717dfa_9366/Runfalcon_3.0_Shoes_Black_HQ3790_01_standard.jpg",
        title: "Adidas",
      },
      {
        key: 2,
        url: "https://rukminim2.flixcart.com/image/450/500/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=90&crop=false",
        title: "Men Wear",
      },
      {
        key: 3,
        url: "https://assets.ajio.com/medias/sys_master/root/20230629/Sae1/649cc069eebac147fc2fb35c/-1117Wx1400H-466016191-grey-MODEL7.jpg",
        title: "Decathalon",
      },
      {
        key: 4,
        url: "https://images.meesho.com/images/products/43134892/p3job_512.jpg",
        title: "Solid White",
      },
    ],
  },
  {
    category: "Bottomwear",
    items: [
      {
        key: 0,
        url: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/13823708/2022/10/19/398d64b2-096b-4a41-9ee9-95c005fc4db01666156159187-Urbano-Fashion-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Stretc-1.jpg",
        title: "Black solid",
      },
      {
        key: 1,
        url: "https://elanstreet.com/media/catalog/category/Trousers-min_1.png",
        title: "Smarty Pants",
      },
      {
        key: 2,
        url: "https://img2.exportersindia.com/product_images/bc-full/2021/1/6272644/img-20201111-wa0064--1611683507.jpg",
        title: "Cotton Ladies",
      },
      {
        key: 3,
        url: "https://www.lee.in/media/catalog/product/cache/44954175d426e9fec84d6690b916898c/l/2/l272502481mv_1.jpg",
        title: "Lee Lapis",
      },
      {
        key: 4,
        url: "https://cdn.linenclub.com/media/catalog/product/cache/5399faaab5f4f7a53013d830013bdee7/l/c/lcwess22btcind0076-1.jpg",
        title: "Linen Club",
      },
    ],
  },
  {
    category: "Accessories",
    items: [
      {
        key: 0,
        url: "https://m.media-amazon.com/images/I/617nu4rssJL.jpg",
        title: "Bobbie Brown",
      },
      {
        key: 1,
        url: "https://static.javatpoint.com/list/images/list-of-makeup-items5.png",
        title: "Tpoint",
      },
      {
        key: 2,
        url: "https://indiacircus.com/pub/media/wysiwyg/collection/images/Wallets-Pouches-26.04.2022.jpg",
        title: "Indian Palace",
      },
      {
        key: 3,
        url: "https://wp.missmalini.com/wp-content/uploads/2019/09/shutterstock_774362164.jpeg",
        title: "Must have accessories",
      },
      {
        key: 4,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZGxV1sShczXf-LdhfiHXHboxf26gMQ-anYg&usqp=CAU",
        title: "Manglyam",
      },
    ],
  },
  {
    category: "Loungewear and Nightwear",
    items: [
      {
        key: 0,
        url: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/21381390/2023/1/2/99379ceb-5cac-437a-9e60-d4ecb48ceec81672650275673Nightsuits1.jpg",
        title: "Myntra",
      },
      {
        key: 1,
        url: "https://cdn.shopify.com/s/files/1/0266/6276/4597/products/300936496CANDYPINK_1.jpg",
        title: "Night Suits",
      },
      {
        key: 2,
        url: "https://lp2.hm.com/hmgoepprod?set=source[/a8/a1/a8a1ec3d2835f7103b233df078e6adf44d2956a0.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]",
        title: "women Sleepwear",
      },
      {
        key: 3,
        url: "https://content.jdmagicbox.com/comp/mumbai/l2/022pxx22.xx22.160413160812.j8l2/catalogue/my-style-nightware-jogeshwari-east-mumbai-nightwear-wholesalers-n1ha14a91i.jpg",
        title: "Uptown",
      },
      {
        key: 4,
        url: "https://midnightangelsbypc.com/cdn/shop/products/Parina-29-06-217268.jpg",
        title: "Angels",
      },
      {
        key: 5,
        url: "https://www.amantelingerie.in/cdn/shop/products/AmanteCatalogueShots-10-03-20221282_1200x630.jpg",
        title: "Amantae",
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
    <Meta
      className="text-left"
      title={title}
      description={
        <div className="assured-products">
          <span>MindMart Assured</span>
          <CheckCircleOutlined className="assured-icon" />
        </div>
      }
    />
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
