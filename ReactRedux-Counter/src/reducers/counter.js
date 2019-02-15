const initialState = {
  count: 0,
  clicks: 0,
  textInputted: '',
  inputVal: 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        clicks: state.clicks + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        clicks: state.clicks + 1
      };
    case 'INPUT_TEXT_CHANGED':
      return {
        ...state,
        textInputted: action.text
      };
    case 'INPUT_TEXT_COMPLETE':
      return {
        ...state,
        clicks: 0,
        count: state.inputVal + parseInt(state.textInputted)
      };
    default:
      return state;
  }
}

export default counterReducer;