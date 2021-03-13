/**
 * Creates HTML node in DOM
 * @param {String} element
 * @return {Object} dynamic HTML node
 */
export const createNode = (element) => {
  return document.createElement(element);
};

/**
 * Adds HTML element to a given parent element
 * @param {Object} parent
 * @param {Object} paelrent
 * @return {Object} dynamic HTML insertion of node
 */
export const append = (parent, el) => {
  return parent.appendChild(el);
};
/**
 * Formats dateTime string to date format
 * @param {String} dateString
 *
 * @return {Date} formated date
 */
export const formatDate = (dateString) => {
  let date = new Date(dateString);
  date =
    date.toLocaleDateString(undefined, { day: "2-digit" }) +
    " " +
    date.toLocaleDateString(undefined, { month: "short" }) +
    " " +
    date.toLocaleDateString(undefined, { year: "numeric" });
  return date;
};
