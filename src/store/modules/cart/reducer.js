const INITAL_STATE = {
  items: []
}

function cart(state = INITAL_STATE, action) {
  console.log(state, action)

  switch(action.type) {
    case 'ADD_PRODUCT_TO_CART': {
      const { product } = action.payload;

      return {
        ...state,
        items: [
          ...state.items,
          {
            product,
            quantity: 1,
          }
        ]
      };
    }
    default: {
      return state;
    }
  }
};

export default cart;