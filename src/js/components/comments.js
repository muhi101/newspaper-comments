import Comment from "./comment.js";
import { append } from "../helpers/helpers.js";

export let commentsArray;
/**
 * @param {String} url
 * @param {Object} _wrapper
 */
class Comments {
  constructor(url, _wrapper) {
    //this.comments = this.fetchContents(url, _wrapper);
  }

  /** Outputs number of comments to screen
   *
   * @param {String} _length
   */

  renderCommentLength(_length) {
    document
      .querySelector(".comments-head")
      .insertAdjacentHTML("afterbegin", `<h2>${_length} Comments</h2`);
  }

  /** Outputs individual comment
   *
   * @param {Array} responseJson
   * @return {Object} HTML element
   */

  renderComment(responseJson, _wrapper) {
    console.log("_wrapper ---", _wrapper);
    return responseJson.map(function (comment) {
      const _comment = new Comment();
      append(_wrapper, _comment.renderArticle(comment));
    });
  }

  /** API call to get data and update contents of page with
   * call to renderComment method
   *
   * @return {JSON}
   */
  async fetchContents(url, _wrapper) {
    const response = await fetch(url);
    const responseJson = await response.json();
    commentsArray = responseJson;

    //inject comment count into header of wrapper section
    // TODO : add svg
    // TODO create component for this section
    this.renderCommentLength(responseJson.length);

    this.renderComment(responseJson, _wrapper);
  }
}

export default Comments;
