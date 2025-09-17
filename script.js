// //! add extra ====> add your card using only name and pitcher
// let btn = document.querySelector(".btnn");
// btn.addEventListener("click", function () {
//     if (document.body.classList.contains('dark')) {
//         document.body.classList.remove('dark');
//         document.body.classList.add('light');
//     } else if (document.body.classList.contains('light')) {
//         document.body.classList.remove('light');
//         document.body.classList.add('dark');
//         alert("Dark mode is activated");

//         // } else {
//         //     document.body.classList.add('dark');
//     }
// });





// const container = document.getElementsByClassName("music")[0];
// const searchInput = document.getElementsByClassName("search_input")[0];

// let allSongs = [];

// // Fetch songs from songs.json
// fetch("songs.json")
//     .then(res => res.json())
//     .then(data => {
//         allSongs = data;
//         const randomThree = getRandomSongs(allSongs, 3);
//         renderSongs(randomThree);
//     });

// // Function to get N random songs from array
// function getRandomSongs(arr, n) {
//     const shuffled = arr.slice().sort(() => 0.5 - Math.random());
//     return shuffled.slice(0, n);
// }

// // Render function
// function renderSongs(songList) {
//     container.innerHTML = "";
//     songList.forEach(song => {
//         const div = document.createElement("div");
//         div.className = "song";

//         const title = document.createElement("h3");
//         title.textContent = `${song} — ${song}`;

//         const audio = document.createElement("audio");
//         audio.controls = true;
//         audio.src = song.url;

//         div.appendChild(title);
//         div.appendChild(audio);
//         container.appendChild(div);
//     });
// }

// // Search functionality
// searchInput.addEventListener("input", () => {
//     const query = searchInput.value.toLowerCase();
//     const filtered = allSongs.filter(song =>
//         song.toLowerCase().includes(query) ||
//         song.toLowerCase().includes(query)
//     );
//     renderSongs(filtered);
// });




// Theme change button ka code
// let btn = document.querySelector(".btnn");
// btn.addEventListener("click", function () {
//     if (document.body.classList.contains('dark')) {
//         document.body.classList.remove('dark');
//         document.body.classList.add('light');
//     } else {
//         document.body.classList.remove('light');
//         document.body.classList.add('dark');
//         alert("Dark mode is activated");
//     }
// });

// // Elements ko select karna (array nahi, first element lena hai)
// const container = document.getElementsByClassName("music")[0];
// const searchInput = document.getElementsByClassName("search_input")[0];

// let allSongs = [];

// // JSON se data fetch karna
// fetch("songs.json")
//     .then(res => res.json())
//     .then(data => {
//         allSongs = data;
//         const randomThree = getRandomSongs(allSongs, 3);
//         renderSongs(randomThree);  // Page load pe random 3 songs dikhaye
//     });

// // Random 3 songs select karne ka function
// function getRandomSongs(arr, n) {
//     const shuffled = arr.slice().sort(() => 0.5 - Math.random());
//     return shuffled.slice(0, n);
// }

// // Songs ko display karne ka function
// function renderSongs(songList) {
//     container.innerHTML = ""; // Pehle container khali kar do
//     songList.forEach(song => {
//         const div = document.createElement("div");
//         div.className = "song";

//         // Title and artist show karna
//         const title = document.createElement("h3");
//         title.textContent = `${song.name} — ${song.singer}`;

//         // Audio player create karna
//         const audio = document.createElement("audio");
//         audio.controls = true;
//         audio.src = song.src;

//         // Elements ko container me add karna
//         div.appendChild(title);
//         div.appendChild(audio);
//         container.appendChild(div);
//     });
// }

// // Search input pe event listener laga kar filter karna
// searchInput.addEventListener("input", () => {
//     const query = searchInput.value.toLowerCase();
//     const filtered = allSongs.filter(song =>
//         song.name.toLowerCase().includes(query) ||
//         song.singer.toLowerCase().includes(query)
//     );
//     renderSongs(filtered);
// });


// Theme toggle button
let btn = document.querySelector(".btnn");
btn.addEventListener("click", function () {
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    } else {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        alert("Dark mode is activated");
    }
});

// DOM elements
const container = document.getElementsByClassName("music")[0];
const searchInput = document.getElementsByClassName("search_input")[0];

let allSongs = [];

// Fetch songs from JSON file
fetch("songs.json")
    .then(res => res.json())
    .then(data => {
        allSongs = data;
        const randomThree = getRandomSongs(allSongs, 3);
        renderSongs(randomThree);  // Page load pe 3 random songs dikhayenge
    });

// Random N songs select karne ke liye function
function getRandomSongs(arr, n) {
    const shuffled = arr.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}

// Songs ko card ke form me render karna
function renderSongs(songList) {
    container.innerHTML = "";  // Clear kar do pehle
    songList.forEach(song => {
        const card = document.createElement("div");
        card.className = "song-card";
        card.style.backgroundImage = `url(${song.image})`; // Background image laga di

        const overlay = document.createElement("div");
        overlay.className = "overlay";

        const title = document.createElement("h3");
        title.textContent = `${song.name} — ${song.singer}`;

        const audio = document.createElement("audio");
        audio.controls = true;
        audio.src = song.src;

        overlay.appendChild(title);
        overlay.appendChild(audio);
        card.appendChild(overlay);
        container.appendChild(card);
    });
}

// Search functionality
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = allSongs.filter(song =>
        song.name.toLowerCase().includes(query) ||
        song.singer.toLowerCase().includes(query)
    );
    renderSongs(filtered);
});
