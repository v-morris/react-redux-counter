export const increment = () => ({
  type: 'INCREMENT'
});

export const decrement = () => ({
  type: 'DECREMENT'
});

export const inputTextChanged = (text) => ({
  type: 'INPUT_TEXT_CHANGED',
  text
});

export const inputTextComplete = (inputVal) => ({
  type: 'INPUT_TEXT_COMPLETE',
  inputVal
});
