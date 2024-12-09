// script.js

// URL of the Dummy JSON API
const API_URL = "https://dummyjson.com/posts";

// Container to hold the cards
const cardsContainer = document.getElementById("cards-container");

// Function to fetch data from the API
async function fetchPosts() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    renderPosts(data.posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    cardsContainer.innerHTML = "<p>Failed to load posts. Please try again later.</p>";
  }
}

// Function to render posts dynamically as cards
function renderPosts(posts) {
  posts.forEach((post) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h2 class="card-title">${post.title}</h2>
      <p class="card-body">${post.body.substring(0, 100)}...</p>
      <div class="card-content">
        <p>${post.body}</p>
        <p><strong>Tags:</strong> ${post.tags.join(", ")}</p>
      </div>
      <button>See More</button>
    `;

    // Button functionality
    const button = card.querySelector("button");
    const content = card.querySelector(".card-content");

    button.addEventListener("click", () => {
      if (content.style.display === "none" || !content.style.display) {
        content.style.display = "block";
        button.textContent = "See Less";
      } else {
        content.style.display = "none";
        button.textContent = "See More";
      }
    });

    cardsContainer.appendChild(card);
  });
}

// Initialize the app
fetchPosts();
