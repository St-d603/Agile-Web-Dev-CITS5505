// Just commenting the map out for now as it was causing an error

// please don't span api :( over a threshold and I pay\
// JS code adapted from MapBox tutorials and chatgpt help
mapboxgl.accessToken = 'pk.eyJ1Ijoic3RldmkiLCJhIjoiY2x2ZWtrdThhMGI1bjJpbnFrNm9xem80YSJ9.Lz5tsAHEt_qZED_2_wyEGw';
const map = new mapboxgl.Map({
    container: 'map',
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [115.8605, -31.9505],
    zoom: 13
});

map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    'top-left'
  );


  

// document.addEventListener('DOMContentLoaded', function() {
//   //Login forms
//   const loginForm = document.getElementById("login-form");
//   const loginButton = document.getElementById("login-form-submit");
//   const loginErrorMsg = document.getElementById("login-error-msg");

//   // When the login button is clicked, the following code is executed
//   loginButton.addEventListener("click", (e) => {
//       // Prevent the default submission of the form
//       e.preventDefault();
//       // Get the values input by the user in the form fields
//       const username = loginForm.username.value;
//       const password = loginForm.password.value;

//       if (username === "user" && password === "web_dev") {
//           // If the credentials are valid, show an alert box and reload the page
//           alert("You have successfully logged in.");
//           location.reload();
//       } else {
//           // Otherwise, make the login error message show (change its opacity)
//           loginErrorMsg.style.opacity = 1;
//       }
//   });
// });

// This is half working, the modal pops up but the static background doesn't disappear when I close it
//
// This is to merge the exisitng login JS with a new event listener
// It shows the login modal when clicked from any page


// Commenting this out for now as I haven't tested it with the frontend stuff that I've recently added
/*
// below JS still needs to be reviewed and tested 
let postsData = [];
const postsContainer = document.querySelector(".posts-container");

// Fetch SQL data?
fetch("Backend_API")
// Create an API endpoint (e.g., /api/posts) that queries the SQL database and returns the posts data in JSON format.
  .then(async (response) => {
    postsData = await response.json();
    postsData.map((post) => createPost(post));
  })
  .catch((error) => console.error("Error fetching data:", error));

const createPost = (postData) => {
  const { title, link, image, categories } = postData;
  const post = document.createElement("div");
  post.className = "post";
  post.innerHTML = `
    <a class="post-preview" href="${link}" target="_blank"> 
      <img class="post-image" src="${image}"> 
    </a> 
    <div class="post-content"> 
      <p class="post-title">${title}</p> 
      <div class="post-tags"> 
        ${categories
          .map((category) => {
            return '<span class="post-tag">' + category + "</span>";
          })
          .join("")} 
      </div> 
    </div>`;
  postsContainer.append(post);
};

// Function to filter posts based on search input
const filterPosts = (searchTerm) => {
  const filteredPosts = postsData.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  postsContainer.innerHTML = "";
  filteredPosts.map((post) => createPost(post));
};

// Event listener for search input
const searchDisplay = document.querySelector(".search-display");

const debounce = (callback, time) => {
  let debounceTimer;
  window.clearTimeout(debounceTimer);
  debounceTimer = window.setTimeout(callback, time);
};

const resetPosts = () => {
  searchDisplay.innerHTML = "";
  postsContainer.innerHTML = "";
  postsData.forEach((post) => createPost(post));
};

const handleSearchPosts = (query) => {
  const searchQuery = query.trim().toLowerCase();

  if (searchQuery.length <= 1) {
    resetPosts();
    return;
  }

  const searchResults = postsData.filter(
    (post) =>
      post.categories.some((category) =>
        category.toLowerCase().includes(searchQuery)
      ) || post.title.toLowerCase().includes(searchQuery)
  );

  if (searchResults.length === 0) {
    searchDisplay.innerHTML = "No results found";
  } else if (searchResults.length === 1) {
    searchDisplay.innerHTML = `1 result found for your query: ${query}`;
  } else {
    searchDisplay.innerHTML = `${searchResults.length} results found for your query: ${query}`;
  }

  postsContainer.innerHTML = "";
  searchResults.forEach((post) => createPost(post));
};
*/
