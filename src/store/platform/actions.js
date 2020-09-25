const platforms = ["apple", "firebase", "nike", "adidas"];

export const togglePlatform = () => ({
  type: "toggle",
  payload: platforms[Math.floor(Math.random() * (platforms.length - 1))]
});

export const incrementCounter = () => ({
  type: "inc",
  payload: Math.floor(Math.random() * 100 + 1000)
});

export const setProducts = products => ({
  type: "set_products",
  payload: products
});
