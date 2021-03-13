const filterByTerm = require("./components/filterByTerm");

import Comments from "./components/comments.js";
import Comment from "./components/comment";
import Sorting from "./components/sorting.js";
import { reorderedArray } from "./components/sorting.js";

const commentsJson = [
  {
    id: 1,
    date: "2019-04-23T22:26:43.511Z",
    name: "Dawud Esparza",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed gravida orci.",
    likes: 33,
  },
  {
    id: 2,
    date: "2019-04-23T19:26:41.511Z",
    name: "Lennie Wainwright",
    body:
      "Quisque maximus augue ut ex tincidunt sodales. Nullam interdum consectetur mi at pellentesque.",
    likes: 4,
  },
  {
    id: 3,
    date: "2019-04-23T18:26:48.511Z",
    name: "Mindy Sykes",
    body:
      "Nam sit amet diam rutrum, venenatis est ac, tempus massa. Etiam tempus libero sit amet bibendum lacinia. Quisque ligula dolor, venenatis quis urna non, tristique laoreet erat.",
    likes: 58,
  },
  {
    id: 4,
    date: "2019-04-24T08:23:49.511Z",
    name: "Arianne Ashton",
    body:
      "Vivamus sit amet turpis nulla. Mauris rhoncus nulla in lobortis rhoncus.",
    likes: 91,
  },
  {
    id: 5,
    date: "2019-04-24T07:26:42.511Z",
    name: "Courteney Moreno",
    body:
      "Mauris ut dolor ipsum. Phasellus imperdiet massa a dui imperdiet dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    likes: 7,
  },
];

const commentsByLikes = [
  {
    id: 4,
    date: "2019-04-24T08:23:49.511Z",
    name: "Arianne Ashton",
    body:
      "Vivamus sit amet turpis nulla. Mauris rhoncus nulla in lobortis rhoncus.",
    likes: 91,
  },
  {
    id: 3,
    date: "2019-04-23T18:26:48.511Z",
    name: "Mindy Sykes",
    body:
      "Nam sit amet diam rutrum, venenatis est ac, tempus massa. Etiam tempus libero sit amet bibendum lacinia. Quisque ligula dolor, venenatis quis urna non, tristique laoreet erat.",
    likes: 58,
  },
  {
    id: 1,
    date: "2019-04-23T22:26:43.511Z",
    name: "Dawud Esparza",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed gravida orci.",
    likes: 33,
  },
  {
    id: 5,
    date: "2019-04-24T07:26:42.511Z",
    name: "Courteney Moreno",
    body:
      "Mauris ut dolor ipsum. Phasellus imperdiet massa a dui imperdiet dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    likes: 7,
  },
  {
    id: 2,
    date: "2019-04-23T19:26:41.511Z",
    name: "Lennie Wainwright",
    body:
      "Quisque maximus augue ut ex tincidunt sodales. Nullam interdum consectetur mi at pellentesque.",
    likes: 4,
  },
];

const commentsByDate = [
  {
    id: 4,
    date: "2019-04-24T08:23:49.511Z",
    name: "Arianne Ashton",
    body:
      "Vivamus sit amet turpis nulla. Mauris rhoncus nulla in lobortis rhoncus.",
    likes: 91,
  },
  {
    id: 5,
    date: "2019-04-24T07:26:42.511Z",
    name: "Courteney Moreno",
    body:
      "Mauris ut dolor ipsum. Phasellus imperdiet massa a dui imperdiet dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    likes: 7,
  },
  {
    id: 1,
    date: "2019-04-23T22:26:43.511Z",
    name: "Dawud Esparza",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed gravida orci.",
    likes: 33,
  },
  {
    id: 2,
    date: "2019-04-23T19:26:41.511Z",
    name: "Lennie Wainwright",
    body:
      "Quisque maximus augue ut ex tincidunt sodales. Nullam interdum consectetur mi at pellentesque.",
    likes: 4,
  },
  {
    id: 3,
    date: "2019-04-23T18:26:48.511Z",
    name: "Mindy Sykes",
    body:
      "Nam sit amet diam rutrum, venenatis est ac, tempus massa. Etiam tempus libero sit amet bibendum lacinia. Quisque ligula dolor, venenatis quis urna non, tristique laoreet erat.",
    likes: 58,
  },
];
describe("Filter function", () => {
  test("it should show all details of A comment", () => {
    const input = {
      id: 1,
      date: "2019-04-23T22:26:43.511Z",
      name: "Dawud Esparza",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed gravida orci.",
      likes: 33,
    };
    const _comment = new Comment();
    const html = document.createElement("article");
    html.classList.add("content");
    html.innerHTML =
      "<header><div class='is-flex'><h1>Dawud Esparza</h1><date>23 M04 2019</date></div><span>33 Likes</span></header><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed gravida orci.</p>";

    expect(_comment.renderArticle(input)).toEqual(html);
  });

  test("it should show all same Number of comments as stored on the server", () => {
    const html = document.createElement("div");
    html.classList.add("wrapper");
    const _wrapper = html;
    const _comments = new Comments();
    const _output = _comments.renderComment(commentsJson, _wrapper);

    console.log("@@@@@@", _wrapper.childElementCount);
    expect(_wrapper.childElementCount).toEqual(commentsJson.length);
  });

  test("it should show Order comments by newest date", () => {
    const html = document.createElement("div");
    html.classList.add("wrapper");
    const _wrapper = html;
    const _comments = new Comments();
    const _output = _comments.renderComment(commentsJson, _wrapper);

    expect(_wrapper.childElementCount).toEqual(commentsJson.length);
  });

  test("it should sort by most likes", () => {
    const _sorting = new Sorting();
    const html = document.createElement("div");
    html.classList.add("wrapper");
    const _wrapper = html;
    const _header = _sorting.renderSection(_wrapper);

    const e = { target: { id: "likes" } };
    _sorting.sortComments(e, commentsJson);
    console.log("#####", _header.querySelector("#likes").textContent);

    let _isEqualFlag = false;
    if (JSON.stringify(reorderedArray) === JSON.stringify(commentsByLikes)) {
      _isEqualFlag = true;
    }

    expect(_isEqualFlag).toEqual(true);
  });

  test("it should sort by most Date", () => {
    const _sorting = new Sorting();
    const html = document.createElement("div");
    html.classList.add("wrapper");
    const _wrapper = html;
    const _header = _sorting.renderSection(_wrapper);

    const e = { target: { id: "date" } };
    _sorting.sortComments(e, commentsJson);

    console.log("**********   reorderedArray date", reorderedArray);

    let _isEqualFlag = false;
    if (JSON.stringify(reorderedArray) === JSON.stringify(commentsByDate)) {
      _isEqualFlag = true;
    }

    expect(_isEqualFlag).toEqual(true);
  });
});
