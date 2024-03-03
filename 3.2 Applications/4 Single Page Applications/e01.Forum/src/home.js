import {showDetails} from "./details.js"
const mainUrl = "http://localhost:3030/jsonstore/collections/myboard/posts";

const mainRef = document.querySelector("main");
const topicContentRef = document.querySelector("div.topic-title");
const homeSection = document.querySelector("div.new-topic-border");
const form = document.querySelector("form");
const cancelBtnRef = document.querySelector(".cancel");
const homeBtnRef = document.getElementsByTagName("nav")[0].querySelector("a");

homeBtnRef.addEventListener("click", showHome);
cancelBtnRef.addEventListener("click", clearForm);
form.addEventListener("submit", onSubmit);

homeSection.remove();

export async function showHome(event) {
    event?.preventDefault(); // == event && event.preventDefault();
    topicContentRef.innerHTML = '';
    const topics = await getAllTopics();
    if (Object.entries(topics).length > 0) {
        Object.values(topics).forEach(element => {
            let template = createTopicTemplate(element);
            topicContentRef.appendChild(template);
        });
        topicContentRef.querySelector("a").addEventListener("click", showDetails);
    }
    else topicContentRef.innerHTML = "";
    mainRef.replaceChildren(homeSection);
    mainRef.appendChild(topicContentRef);
}

function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const topicName = formData.get("topicName");
    const userName = formData.get("username");
    const postText = formData.get("postText");
    const createDate = new Date().getTime();

    if (topicName && userName && postText)
        createTopic({topicName, userName, postText, createDate});
    else return alert("Fill all fields!");
}

async function getAllTopics() {
    const response = await fetch(mainUrl);
    const topicData = await response.json();
    return topicData;
}

async function createTopic(topicData) {
    const topicResponse = await fetch(mainUrl, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(topicData)
    })
    // clearForm(); //don't work w/o event! How works at Toshko?!
    form.reset();
    showHome();
}

function clearForm(event) {
    event?.preventDefault();
    form.reset();
}

function createTopicTemplate(topics) {
    const div = document.createElement("div");
    div.classList.add("topic-container");
    div.innerHTML = `
        <div class="topic-name-wrapper">
            <div class="topic-name">
                <a href="#" class="normal" data-id=${topics._id}>
                    <h2>${topics.topicName}</h2>
                </a>
                <div class="columns">
                    <div>
                        <p>Date: ${new Date(topics.createDate).toISOString()}</time></p>
                        <div class="nick-name">
                            <p>Username: <span>${topics.userName}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    return div;
}
