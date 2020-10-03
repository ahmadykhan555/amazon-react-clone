import axios from "axios";
const ENDPOINT = `https://jsonplaceholder.typicode.com/`;

export const fetchProducts = async () => {
  const data = (await axios.get(`${ENDPOINT}photos`)).data;
  return data;
};

export const products = () => [
  {
    name: "Play Station 5",
    id: "1",
    category: "Gaming",
    price: 250,
    discountAvailable: false,
    discountPercentage: 0,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    photos: [
      "https://gmedia.playstation.com/is/image/SIEPDC/playstation-5-with-dualsense-front-product-shot-01-ps5-en-30jul20?$native--t$",
    ],
  },
  {
    name: "MacBook Pro 13",
    id: "3",
    category: "Computers",
    price: 2299,
    discountAvailable: false,
    discountPercentage: 0,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    photos: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=904&hei=840&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1572825197207",
    ],
  },
  {
    name: "MacBook Pro 16",
    id: "2",
    category: "Computers",
    price: 2500,
    discountAvailable: false,
    discountPercentage: 0,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    photos: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=904&hei=840&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1572825197207",
    ],
  },
  {
    name: "IPhone X",
    id: "4",
    category: "Technology/mobile phones",
    price: 1200,
    discountAvailable: false,
    discountPercentage: 0,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    photos: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xr-select-2019-family?wid=441&amp;hei=529&amp;fmt=jpeg&amp;qlt=95&amp;op_usm=0.5,0.5&amp;.v=1550795424612",
    ],
  },
];
