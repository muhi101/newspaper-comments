import { createNode, append, formatDate } from "../helpers/helpers.js";

/**
 *
 * @param {Object} item

 */
class Comment {
  constructor(item) {
    //this.comments = this.fetchContents(url);
  }

  /** outputs the comment on page
   * @param {object} item
   *
   */

  renderArticle(item) {
    let article = createNode("article");
    article.classList.add("content");

    let h1 = createNode("h1");
    h1.innerHTML = `${item.name}`;

    let _date = createNode("date");
    _date.datetime = formatDate(item.date);
    _date.innerHTML = `${formatDate(item.date)}`;

    let span = createNode("span");
    span.innerHTML = `${item.likes} Likes`;

    let headerDiv = createNode("header");
    let innerDiv = createNode("div");
    innerDiv.classList.add("is-flex");

    append(headerDiv, innerDiv);
    append(innerDiv, h1);
    append(innerDiv, _date);
    append(headerDiv, span);

    append(article, headerDiv);

    let p = createNode("p");
    p.innerHTML = `${item.body}`;
    append(article, p);

    return article;
  }
}

export default Comment;
