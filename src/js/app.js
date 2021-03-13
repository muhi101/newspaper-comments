const Utils = require("./utils");

new Utils();
import Sorting from "./components/sorting.js";
import Comments from "./components/comments.js";
const url =
  "https://my-json-server.typicode.com/telegraph/front-end-exercise-contractors/comments";
console.log("tres");
const _wrapper = document.querySelector(".wrapper");

document.addEventListener("DOMContentLoaded", function () {
  // Create new instance
  const _sorting = new Sorting();
  _sorting.renderSection(_wrapper);
  const _comments = new Comments();
  _comments.fetchContents(url, _wrapper);
});
