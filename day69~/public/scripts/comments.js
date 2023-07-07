const loadCommentsBtnElement = document.getElementById("load-comments-btn");
const commentsSectionElement = document.getElementById("comments");
const commentsFormElement = document.querySelector("#comments-form form");
const commentTitleElement = document.getElementById("title");
const commentTextElement = document.getElementById("text");

function createCommentsList(comments) {
  const commentListElement = document.createElement("ol");

  for (const comment of comments) {
    //모든 comment 반복
    const commentElement = document.createElement("li");
    commentElement.innerHTML = `
      <article class="comment-item">
        <h2>${comment.title}</h2>
        <p>${comment.text}</p>
      </article>
    `;
    commentListElement.appendChild(commentElement);
  }

  return commentListElement;
}

async function fetchCommentsForPost() {
  const postId = loadCommentsBtnElement.dataset.postid;

  try {
    const response = await fetch(`/posts/${postId}/comments`); //GET 요청을 보내려는 URL. 프로미스 반환.

    if (!response.ok) {
      //서버에서 문제가 생겼을 때
      alert("덧글 가져오기를 실패했습니다!");
      return;
    }

    const responseData = await response.json();
    if (responseData && responseData.length > 0) {
      const commentsListElement = createCommentsList(responseData);
      commentsSectionElement.innerHTML = "";
      commentsSectionElement.appendChild(commentsListElement);
    } else {
      commentsSectionElement.firstElementChild.textContent =
        "등록된 덧글이 없습니다. 덧글을 달아주세요.";
    }
  } catch (error) {
    alert("덧글 가져오기를 실패했습니다!");
  }
}

async function saveComment(event) {
  event.preventDefault(); //브라우저가 일부 서버에 자동으로 요청을 보내는 것을 방지함.
  const postId = commentsFormElement.dataset.postid;

  const enteredTitle = commentTitleElement.value;
  const enteredText = commentTextElement.value;

  const comment = { title: enteredTitle, text: enteredText };

  try {
    const response = await fetch(`/posts/${postId}/comments`, {
      //fetch {post} 요청을 포함해서 모든 종류의 HTTP 요청을 보낼 수 있음. {get}에서 {post} 요청으로 전환하기 위해 URL 다음 {fetch} 함수에 두번째 매개변수 값을 추가.
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "Content-Type": "application/json", //따옴표 주의. 'Content-Type'는 특수 헤더. 정확히는 헤더인(?) [app.js] 파일.
      },
    });

    if (response.ok) {
      //200,300 성공 400, 500 오류
      fetchCommentsForPost();
    } else {
      alert("덧글을 보낼 수 없습니다!");
    }
  } catch (error) {
    //기술적인 오류가 원인일 때
    alert("요청을 보낼 수 없습니다. 잠시 후 다시 시도하세요.");
  }
}

loadCommentsBtnElement.addEventListener("click", fetchCommentsForPost);
commentsFormElement.addEventListener("submit", saveComment);
