const data = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: { rate: 4.1, count: 259 },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: { rate: 4.7, count: 500 },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: { rate: 2.1, count: 430 },
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 4.6, count: 400 },
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 3.9, count: 70 },
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 3, count: 400 },
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 1.9, count: 100 },
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    rating: { rate: 3.3, count: 203 },
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/ write speeds of up to 535MB / s / 450MB / s(Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.) ",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    rating: { rate: 2.9, count: 470 },
  },
  {
    id: 11,
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC(Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    rating: { rate: 4.8, count: 319 },
  },
  {
    id: 12,
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    rating: { rate: 4.8, count: 400 },
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    rating: { rate: 2.9, count: 250 },
  },
  {
    id: 14,
    title:
      "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    price: 999.99,
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    rating: { rate: 2.2, count: 140 },
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    rating: { rate: 2.6, count: 235 },
  },
  {
    id: 16,
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    rating: { rate: 2.9, count: 340 },
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating: { rate: 3.8, count: 679 },
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    rating: { rate: 4.7, count: 130 },
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    rating: { rate: 4.5, count: 146 },
  },
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual / Office / Beach / School / Home / Street.Season: Spring, Summer, Autumn, Winter.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    rating: { rate: 3.6, count: 145 },
  },
];

const NAV = document.getElementsByTagName("nav");
NAV.className = "d-none";
// עד כאן אובייקטי המוצרים
const editCard = (id) => {
  cardEditor(id);
};
const deleteCard = (id) => {
  data.splice(id, 1);
  runOnArray(data);
};
const plus = (element, i) => {
  element.innerHTML++;
  i.rating.count++;
};
const minus = (element, i) => {
  element.innerHTML--;
  i.rating.count--;
};
const CARDSAREA = document.getElementById("cards-area");
const PRODUCT = document.getElementById("xx");

const createImage = (card, item, index) => {
  const DIV = document.createElement("div");
  DIV.setAttribute("class", "white-space");
  const ELEMENT = document.createElement("img");
  ELEMENT.setAttribute("class", "card-img");
  ELEMENT.src = item.image;
  DIV.appendChild(ELEMENT);
  card.appendChild(DIV);
  ELEMENT.addEventListener("click", () => {
    creatCardPage(index);
  });
};
const createText = (card, item) => {
  const ELEMENT = document.createElement("h2");
  ELEMENT.setAttribute("class", "card-h2");
  ELEMENT.innerHTML = item.title;
  const ELEMENT2 = document.createElement("hr");
  ELEMENT2.setAttribute("class", "card-hr");
  ELEMENT.appendChild(ELEMENT2);
  card.appendChild(ELEMENT);
};
const createHr = (card) => {
  const ELEMENT2 = document.createElement("hr");
  ELEMENT2.setAttribute("class", "card-hr");
  card.appendChild(ELEMENT2);
};
const createAmaount = (ccard, item) => {
  const card = document.createElement("div");
  card.setAttribute("class", "amount-div");
  const ELEMENT1 = document.createElement("button");
  ELEMENT1.innerHTML = "+1";
  ELEMENT1.setAttribute("class", "plus-one");

  const ELEMENT2 = document.createElement("h3");
  ELEMENT2.setAttribute("class", "card-amount");
  ELEMENT2.innerHTML = item.rating.count;
  const ELEMENT3 = document.createElement("button");
  ELEMENT3.setAttribute("class", "cons-one");
  ELEMENT3.addEventListener("click", () => {
    minus(ELEMENT2, item);
  });
  ELEMENT1.addEventListener("click", () => {
    plus(ELEMENT2, item);
  });
  ELEMENT3.innerHTML = "-1";
  card.appendChild(ELEMENT1);
  card.appendChild(ELEMENT2);
  card.appendChild(ELEMENT3);
  ccard.appendChild(card);
};
const createIcons = (card, index) => {
  const ICONSDIV = document.createElement("div");
  ICONSDIV.setAttribute("class", "icon-div");
  const ELEMENT1 = document.createElement("i");
  ELEMENT1.setAttribute("class", "card-icon1");
  ELEMENT1.className = "material-icons";
  ELEMENT1.innerText = "delete";
  const ELEMENT2 = document.createElement("i");
  ELEMENT2.setAttribute("class", "card-icon2");
  ELEMENT2.className = "material-icons";
  ELEMENT2.innerText = "edit";
  ELEMENT1.addEventListener("click", () => {
    deleteCard(index);
  });
  ELEMENT2.addEventListener("click", () => {
    editCard(index);
  });

  ICONSDIV.appendChild(ELEMENT1);
  ICONSDIV.appendChild(ELEMENT2);
  card.appendChild(ICONSDIV);
};
const home = () => {
  runOnArray(data);
};
const createRate = (card, item) => {
  const STARSDIV = document.createElement("div");
  STARSDIV.setAttribute("class", "stars-div");

  let rate = item.rating.rate;
  if (rate > 4.5) {
    const ELEMENT = document.createElement("i");
    ELEMENT.setAttribute("class", "stars");
    ELEMENT.className = "material-icons";
    ELEMENT.innerText = "grade";
    ELEMENT.style.color = "#FFBF9B";
    STARSDIV.appendChild(ELEMENT);
  }

  card.appendChild(STARSDIV);
};
const createCards = (item, id) => {
  PRODUCT.innerText = "Product ";

  const CARD = document.createElement("div");
  CARD.setAttribute("class", "card");
  CARD.setAttribute("id", item.id);
  createImage(CARD, item, id);
  createText(CARD, item);
  createHr(CARD);
  createAmaount(CARD, item);
  const DIV = document.createElement("div");
  DIV.setAttribute("class", "icon-div");
  createIcons(DIV, id);
  createRate(DIV, item);
  CARD.appendChild(DIV);

  CARDSAREA.appendChild(CARD);
};
const runOnArray = (array) => {
  while (CARDSAREA.firstChild) {
    CARDSAREA.removeChild(CARDSAREA.firstChild);
    CARDSAREA.className = "x";
  }
  for (let i = 0; i < array.length; i++) {
    createCards(array[i], i);
  }
};
runOnArray(data);

//מיון

const myFilter = (name = "") => {
  while (CARDSAREA.firstChild) {
    CARDSAREA.removeChild(CARDSAREA.firstChild);
  }
  const result = data.filter((element) => element.category === name);

  runOnArray(result);
};
//החיפוש בבנייה
// const myFilterss = (name = "") => {
//   while (CARDSAREA.firstChild) {
//     CARDSAREA.removeChild(CARDSAREA.firstChild);
//   }
//   console.log("hhh");
//   PRODUCT.innerText = "Search Results";

//   const result = data.filter((element) => element.title.includes(name));

//   runOnArray(result);
// };
const myFilter1 = () => {
  runOnArray(data);
};
const myFilter2 = () => {
  myFilter("men's clothing");
};
const myFilter3 = () => {
  myFilter("women's clothing");
};
const myFilter4 = () => {
  myFilter("jewelery");
};
const myFilter5 = () => {
  myFilter("electronics");
};
//החיפוש בבנייה
// const myFilterSearch = () => {
//   const INPUT = document.getElementsByClassName("search-input");
//   const a = INPUT.value;
//   myFilterss(a);
// };
// const SEARCH = document.getElementsByClassName("go-button");
// SEARCH.addEventListener("click", myFilterSearch);

//התאמת הגודל לתמונה
const CARDS = document.querySelectorAll(".card");

function updateCardHeight() {
  CARDS.forEach((card) => {
    const image = card.querySelector(".card-img");
    if (image && image.offsetHeight) {
      card.style.height = `${image.offsetHeight + 400}px`;
    }
  });
}

window.addEventListener("load", updateCardHeight);
window.addEventListener("resize", updateCardHeight);
//שינוי הטבע בעת לחיצה
const creatBackIcon = () => {
  const ELEMENT1 = document.createElement("p");
  ELEMENT1.setAttribute("class", "back-icon1");
  ELEMENT1.innerHTML = "&#8594;";
  ELEMENT1.addEventListener("click", () => {
    runOnArray(data);
  });
  CARDSAREA.appendChild(ELEMENT1);
};
const createTextPage = (div2, index) => {
  const title1 = document.createElement("h2");
  title1.innerText = "Title";
  const p1 = document.createElement("p");
  p1.innerText = index.title;
  const title2 = document.createElement("h2");
  title2.innerText = "Description";
  const p2 = document.createElement("p");
  p2.innerText = index.description;
  const title3 = document.createElement("h2");
  title3.innerText = "Category";
  const p3 = document.createElement("p");
  p3.innerText = index.category;
  const title4 = document.createElement("h2");
  title4.innerText = "Price";
  const p4 = document.createElement("p");
  p4.innerText = "$" + index.price;
  const title5 = document.createElement("h2");
  title5.innerText = "Quantity";
  const p5 = document.createElement("p");
  p5.innerText = index.rating.count;
  div2.appendChild(title1);
  div2.appendChild(p1);
  div2.appendChild(title2);
  div2.appendChild(p2);
  div2.appendChild(title3);
  div2.appendChild(p3);
  div2.appendChild(title4);
  div2.appendChild(p4);
  div2.appendChild(title5);
  div2.appendChild(p5);
};
const creatCardPage = (id) => {
  while (CARDSAREA.firstChild) {
    CARDSAREA.removeChild(CARDSAREA.firstChild);
    CARDSAREA.className = "center";
  }
  PRODUCT.innerText = "Product page";
  const index = data[id];
  const div1 = document.createElement("div");
  div1.setAttribute("class", "card-page");
  CARDSAREA.appendChild(div1);
  const IMG = document.createElement("img");
  IMG.setAttribute("class", "img-page");
  IMG.src = index.image;
  const div2 = document.createElement("div");
  div2.setAttribute("class", "text-page");
  createTextPage(div2, index);
  creatBackIcon();
  div1.appendChild(IMG);
  div1.appendChild(div2);
  createIcons(CARDSAREA, index, index.id - 1);
};
function handleCardClick(event) {
  const clickedCard = event.target;
  const clickedCardClass = event.target.className;
  const clickCardsId = clickedCard.id;
  console.log(clickCardsId);
  if (clickedCardClass == "card") {
    while (CARDSAREA.firstChild) {
      CARDSAREA.removeChild(CARDSAREA.firstChild);
      CARDSAREA.className = "center";
    }
    creatCardPage(clickCardsId - 1);
  }
}

CARDS.forEach((card) => {
  card.addEventListener("click", handleCardClick);
});
//הוספה
const addCard = (
  title = String,
  category = String,
  price = String,
  img = String,
  quantity = String,
  description = String
) => {
  const dataObject = {
    id: data.length,
    title: title,
    price: price.toString(),
    description: description,
    category: category,
    image: img,
    rating: { rate: 1, count: 0 },
  };
  data.push(dataObject);
  runOnArray(data);
};
const plusOne = () => {
  while (CARDSAREA.firstChild) {
    CARDSAREA.removeChild(CARDSAREA.firstChild);
    CARDSAREA.className = "center";
  }
  PRODUCT.innerText = "Add New Product";

  const div2 = document.createElement("div");
  div2.setAttribute("class", "add-card");
  const title1 = document.createElement("h2");
  title1.innerText = "Title";
  const p1 = document.createElement("input");
  p1.placeholder = "What it is?";
  const title2 = document.createElement("h2");
  title2.innerText = "Category";
  const p2 = document.createElement("input");
  p2.placeholder = "Men's   ? Women's";
  const title3 = document.createElement("h2");
  title3.innerText = "Price";
  const p3 = document.createElement("input");
  p3.placeholder = "How many $";
  const title4 = document.createElement("h2");
  title4.innerText = "Img URL";
  const p4 = document.createElement("input");
  p4.placeholder = "give here the Source";
  const title5 = document.createElement("h2");
  title5.innerText = "Quantity";
  const p5 = document.createElement("input");
  p5.placeholder = "How many?";
  const title6 = document.createElement("h2");
  title5.innerText = "Description";
  const p6 = document.createElement("input");
  const ADD = document.createElement("button");
  ADD.setAttribute("class", "action-button");
  ADD.innerHTML = "ADD";
  div2.appendChild(title1);
  div2.appendChild(p1);
  div2.appendChild(title2);
  div2.appendChild(p2);
  div2.appendChild(title3);
  div2.appendChild(p3);
  div2.appendChild(title4);
  div2.appendChild(p4);
  div2.appendChild(title5);
  div2.appendChild(p5);
  div2.appendChild(title6);
  div2.appendChild(p6);
  div2.appendChild(ADD);
  CARDSAREA.appendChild(div2);
  creatBackIcon();
  ADD.addEventListener("click", () => {
    addCard(p1.value, p2.value, p3.value, p4.value, p5.value, p6.value);
  });
};
const saveChange = (
  id,
  title = String,
  category = String,
  price = String,
  img = String,
  quantity = String,
  description = String
) => {
  data[id].title = title;
  data[id].category = category;
  data[id].price = price;
  data[id].image = img;
  data[id].quantity = quantity;
  data[id].description = description;
  runOnArray(data);
};

//עריכה
const cardEditor = (id) => {
  while (CARDSAREA.firstChild) {
    CARDSAREA.removeChild(CARDSAREA.firstChild);
    CARDSAREA.className = "center";
  }
  PRODUCT.innerText = "Edit Product";

  const div2 = document.createElement("div");
  div2.setAttribute("class", "add-card");
  const title1 = document.createElement("h2");
  title1.innerText = "Title";
  const p1 = document.createElement("input");
  p1.placeholder = "What it is?";
  const title2 = document.createElement("h2");
  title2.innerText = "Category";
  const p2 = document.createElement("input");
  p2.placeholder = "Men's   ? Women's";
  const title3 = document.createElement("h2");
  title3.innerText = "Price";
  const p3 = document.createElement("input");
  p3.placeholder = "How many $";
  const title4 = document.createElement("h2");
  title4.innerText = "Img URL";
  const p4 = document.createElement("input");
  p4.placeholder = "give here the Source";
  const title5 = document.createElement("h2");
  title5.innerText = "Quantity";
  const p5 = document.createElement("input");
  p5.placeholder = "How many?";
  const title6 = document.createElement("h2");
  title5.innerText = "Description";
  const ADD = document.createElement("button");
  ADD.setAttribute("class", "action-button");
  ADD.innerHTML = "Edit";
  div2.appendChild(title1);
  div2.appendChild(p1);
  div2.appendChild(title2);
  div2.appendChild(p2);
  div2.appendChild(title3);
  div2.appendChild(p3);
  div2.appendChild(title4);
  div2.appendChild(p4);
  div2.appendChild(title5);
  div2.appendChild(p5);
  div2.appendChild(title6);
  div2.appendChild(ADD);
  CARDSAREA.appendChild(div2);
  creatBackIcon();
  ADD.addEventListener("click", () => {
    saveChange(id, p1.value, p2.value, p3.value, p4.value, p5.value);
  });
};
