const loadCommnetsBtnElement = documnet.getElementById("load-comments=btn");

async function fetchCommentsForPost() {
  const postId = loadCommnetsBtnElement.dataset.postId;
  const response = await fetch(`/posts/${postId}/comments`); //GET 요청을 보내려는 URL. 프로미스 반환.
  const data = await response.json();
}

loadCommnetsBtnElement.addEventListener("click", fetchCommentsForPost);
