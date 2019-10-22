
const initialState = {
  counterSum: 0,
  counterArr: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "COUNTERSUM":
      console.log(payload)
      return { counterSum: state.counterSum + payload };
    case "COUNTERARR":
      return {
        ...state,
        counterArr: new Array(parseInt(payload.counter))
          .fill(0)
          .map(() => ({ count: 0, id: generateID() }))
      };
    case "INCREASENUM":
      return {
        ...state,
        counterArr: payload.counterArr.map(counterItem => {
          if (counterItem.id === payload.id) {
            return { id: payload.id, count: counterItem.count + payload.changedNum };
          } else {
            return counterItem;
          }
        })
      };
    case "DECREASENUM":
      return {
        ...state,
        counterArr: payload.counterArr.map(counterItem => {
          if (counterItem.id === payload.id) {
            return { id: payload.id, count: counterItem.count - payload.changedNum };
          } else {
            return counterItem;
          }
        })
      };
    default:
      return state;
  }
};

const generateID = () => {
  return new Date().getTime() + Math.random();
};