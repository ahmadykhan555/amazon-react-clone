const initialState = {
  platform: "AMAZON",
  productCount: 0,
  products: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "toggle": {
      let newState = { ...state };
      newState.platform = action.payload;
      return newState;
    }
    case "inc": {
      let newState = { ...state };
      newState.productCount = action.payload;
      return newState;
    }
    case "set_products": {
      const newState = { ...state };
      newState.products = action.payload;
      newState.productCount = (action.payload && action.payload.length) || 0;
      return newState;
    }
    default:
      return state;
  }
};
export default reducer;
