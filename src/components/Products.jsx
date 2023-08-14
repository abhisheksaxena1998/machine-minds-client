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
