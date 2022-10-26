export const uid = () => {
  return Date.now().toString(36) + Math.random().toString().substring(2);
};

export const setCaretToEnd = (element) => {
  const range = document.createRange();
  const selection = window.getSelection();
  range.selectNodeContents(element);
  range.collapse(false);
  selection.removeAllRanges();
  selection.addRange(range);
  element.focus();
};
