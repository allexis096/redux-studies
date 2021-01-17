import produce from 'immer';

const INITAL_STATE = {
  items: []
}

function cart(state = INITAL_STATE, action) {
  return produce(state, draft => {
    switch(action.type) {
      case 'ADD_PRODUCT_TO_CART': {
        const { product } = action.payload;

        draft.items.push({
          product,
          quantity: 1,
        });

        break;
      }
      default: {
        return state;
      }
    }
  });
}

export default cart;