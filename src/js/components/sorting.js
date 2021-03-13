import { createNode, append } from "../helpers/helpers.js";

import { commentsArray } from "./comments.js";
import Comment from "./comment.js";

export let reorderedArray;

/**
 * @param {object} _wrapper
 *
 */
class Sorting {
  constructor(_wrapper) {}

  /** Add click listener to element
   * trigger call to this.sortComments
   *
   *@param {String} _class
   */
  addListener(_class) {
    document.querySelectorAll(`.${_class}`).forEach((item) => {
      item.addEventListener("click", (event) => {
        this.sortComments(event, commentsArray);
      });
    });
  }

  /** Sort comments by either likes or date
   *
   *@param {Object} event
   */
  sortComments(event, commentsArray) {
    //event.preventDefault();
    let _fieldName = event.target.id == "likes" ? "likes" : "date";
    console.log("commentsArray ---", commentsArray);
    console.log("_fieldName ===", _fieldName);

    if (_fieldName == "likes") {
      reorderedArray = commentsArray.sort(
        (a, b) => parseFloat(b.likes) - parseFloat(a.likes)
      );

      //console.log(reorderedArray);
    } else {
      reorderedArray = commentsArray.sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.date) - new Date(a.date);
      });

      //console.log(reorderedArray);
    }

    //console.log("reorderedArray ---", reorderedArray);
    // remove articles from DOM TODO tranfer to separate helper method
    //let elem = document.querySelectorAll("article");
    let a_list = document.getElementsByTagName("article");
    for (let i = a_list.length - 1; i >= 0; i--) {
      let a = a_list[i];

      a.parentNode.removeChild(a);
    }

    //elem.remove();
    // inject article element / comment using new sorted Array
    setTimeout(function () {
      reorderedArray.map(function (comment) {
        const _comment = new Comment();
        const _wrapper = document.querySelector(".wrapper");
        append(_wrapper, _comment.renderArticle(comment));
      });
    }, 500);
  }

  /** Renders HTML for section above comments showing sorting buttons
   *
   *@param {Object} _wrapper
   * @return {Object} header
   */

  renderSection(_wrapper) {
    let header = createNode("header");
    header.classList.add("comments-head");

    let nav = createNode("nav");
    nav.innerHTML = ` <nav class="comments-head--nav"><span class="is-bullet has-black-keyline">Sort</span> <span
    class="js-sort capsule--plain" id="likes">Likes</span>
<span class="js-sort capsule--black" id="new">Newest</span>
</nav>`;

    append(header, nav);
    append(_wrapper, header);

    window.setTimeout(() => {
      this.addListener("js-sort");
    }, 500);

    return header;
  }
}

export default Sorting;
