const loadCommnetsBtnElement = documnet.getElementById("load-comments=btn");
const commentsSectionElement = document.getElementById("comments");
const commentsFormElement = document.querySelector("#comments-form form");
const commentTitleElement = document.getElementById("title");
const commentTextElement = document.getElementById("text");

function createCommentsList(comments) {
  const commentsSectionElement = document.createElement("ol");

  for (const comments of comments) {
    //모든 comment 반복
    const commentsElement = document.createElement("li");
    commentsElement.innerHTML = `
  <article class="comment-item">
  <h2>${comment.title}</h2>
  <p>${comment.text}</p>
  </article>
  `;
    commentsListElement.appendChild(commentsElement);
  }
  return commentsListElement;
}

async function fetchCommentsForPost() {
  const postId = loadCommnetsBtnElement.dataset.postId;
  const response = await fetch(`/posts/${postId}/comments`); //GET 요청을 보내려는 URL. 프로미스 반환.
  const data = await response.json();

  const commentsListElement = createCommentsList(responseData);
  commentsSectionElement.innerHTML = "";
  commentsSectionElement.appendChild(commentsListElement);
}

function saveComment(event) {
  event.preventDefault(); //브라우저가 일부 서버에 자동으로 요청을 보내는 것을 방지함.

  const enteredTitle = commentTitleElement.value;
  const enteredText = commentTextElement.value;
}

loadCommnetsBtnElement.addEventListener("click", fetchCommentsForPost);
commentsFormElement.addEventListener("submit");
