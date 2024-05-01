
// Just commenting the map out for now as it was causing an error

// please don't span api :( over a threshold and I pay
// mapboxgl.accessToken = 'pk.eyJ1Ijoic3RldmkiLCJhIjoiY2x2ZWtrdThhMGI1bjJpbnFrNm9xem80YSJ9.Lz5tsAHEt_qZED_2_wyEGw';
// const map = new mapboxgl.Map({
//     container: 'map',
//     // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
//     style: 'mapbox://styles/mapbox/streets-v12',
//     center: [116, -31.9],
//     zoom: 10
// });

// please don't span api :( over a threshold and I pay\
// JS code adapted from MapBox tutorials and chatgpt help
mapboxgl.accessToken = 'pk.eyJ1Ijoic3RldmkiLCJhIjoiY2x2ZWtrdThhMGI1bjJpbnFrNm9xem80YSJ9.Lz5tsAHEt_qZED_2_wyEGw';
const map = new mapboxgl.Map({
    container: 'map',
    // Choosen from Mapbox's core styles
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [116, -31.9],
    zoom: 10
});


let start = [116, -31.9]; // Default start location

// Add the control to the map.
// map.addControl(
//     new MapboxGeocoder({
//         accessToken: mapboxgl.accessToken,
//         mapboxgl: mapboxgl
//     })
// );


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

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);

// Function to update the start location and fetch the route
async function updateStartLocation(coords) {
    start = coords;
    await getRoute(start);
}

// create a function to make a directions request
async function getRoute(end) {
    // make a directions request using cycling profile
    const query = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
        { method: 'GET' }
    );
    const json = await query.json();
    const data = json.routes[0];
    const route = data.geometry.coordinates;
    const geojson = {
        type: 'Feature',
        properties: {},
        geometry: {
            type: 'LineString',
            coordinates: route
        }
    };
    // if the route already exists on the map, we'll reset it using setData
    if (map.getSource('route')) {
        map.getSource('route').setData(geojson);
    } else {
        map.addLayer({
            id: 'route',
            type: 'line',
            source: {
                type: 'geojson',
                data: geojson
            },
            layout: {
                'line-join': 'round',
                'line-cap': 'round'
            },
            paint: {
                'line-color': '#3887be',
                'line-width': 5,
                'line-opacity': 0.75
            }
        });
    }
    // Display turn instructions
    const instructions = document.getElementById('instructions');
    const steps = data.legs[0].steps;

    let tripInstructions = '';
    for (const step of steps) {
        tripInstructions += `<li>${step.maneuver.instruction}</li>`;
    }
    instructions.innerHTML = `<p><strong>Trip duration: ${Math.floor(
        data.duration / 60
    )} min 🚴 </strong></p><ol>${tripInstructions}</ol>`;
}

map.on('load', () => {
    // make an initial directions request that starts and ends at the same location
    getRoute(start);

    // Add starting point to the map
    map.addLayer({
        id: 'point',
        type: 'circle',
        source: {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: [
                    {
                        type: 'Feature',
                        properties: {},
                        geometry: {
                            type: 'Point',
                            coordinates: start
                        }
                    }
                ]
            }
        },
        paint: {
            'circle-radius': 10,
            'circle-color': '#3887be'
        }
    });

    // Listen for clicks on the map to update start location
    map.on('click', async (event) => {
        const coords = Object.keys(event.lngLat).map((key) => event.lngLat[key]);
        await updateStartLocation(coords);
    });
});

document.addEventListener("DOMContentLoaded", function() {
  const loginBtn = document.getElementById("loginBtn");
  const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));

  // Add an event listener to the login button
  loginBtn.addEventListener("click", function(event) {
      event.preventDefault();
      loginModal.show();
  });
});

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