const mainRef = document.querySelector("main");
const detailsSection = document.getElementById("comments");
const commentContentRef = document.querySelector("div.topic-title");
const homeSection = document.querySelector("div.new-topic-border");
const commentsUrl = "http://localhost:3030/jsonstore/collections/myboard/comments";

export async function showDetails() {
    homeSection.remove();
    let template = createNewCommentForm();
    // mainRef.replaceChildren(homeSection);
    mainRef.appendChild(template);
    const comments = await getAllComments();
    if (Object.entries(comments).length > 0) {
        Object.values(comments).forEach(comment => {
            template = createCommentTemplate(comment);
            commentContentRef.appendChild(template);
        });
        // commentContentRef.querySelector("a").addEventListener("click", showDetails);
    }
    else commentContentRef.innerHTML = "";
    mainRef.replaceChildren(homeSection);
    mainRef.appendChild(commentContentRef);

}

async function getAllComments() {
    const response = await fetch(commentsUrl);
    const commentsData = await response.json();
    return commentsData;
}

function createNewCommentForm() {
    const div = document.createElement("div");
    div.classList.add("container");
    div.innerHTML = `
    <!-- theme content  -->
    <div class="theme-content">
        <!-- theme-title  -->
        <div class="theme-title">
            <div class="theme-name-wrapper">
                <div class="theme-name">
                    <h2>Angular 10</h2>
                </div>
            </div>
        </div>

        <!-- comment  -->
        <div class="comment"></div>

        <div class="answer-comment">
            <p><span>currentUser</span> comment:</p>
            <div class="answer">
                <form>
                    <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                    <div>
                        <label for="username">Username <span class="red">*</span></label>
                        <input type="text" name="username" id="username">
                    </div>
                    <button>Post</button>
                </form>
            </div>
        </div>

    </div>`;
return div;
}

function createCommentTemplate(comments) {
    const div = document.createElement("div");
    div.classList.add("comment");
    div.innerHTML = `
    <div class="comment">
        <div class="header">
            <img src="./static/profile.png" alt="avatar">
            <p><span>David</span> posted on <time>2020-10-10 12:08:28</time></p>

            <p class="post-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere sint
                dolorem quam,
                accusantium ipsa veniam laudantium inventore aut, tenetur quibusdam doloribus. Incidunt odio
                nostrum facilis ipsum dolorem deserunt illum?</p>
        </div>
    </div>`;
    return div;
}
