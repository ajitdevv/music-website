// //! add extra ====> add your card using only name and pitcher



//***** Theme chang *****//


// let btn = document.querySelector(".theme-chang");
// btn.addEventListener("click", function () {
//     if (document.body.classList.contains('dark')) {
//         document.body.classList.remove('dark');
//         document.body.classList.add('light');
//     } else {
//         document.body.classList.remove('light');
//         document.body.classList.add('dark');
//         alert("Look like paid website");
//     }
// });



// //***** Song search *****//

// const container = document.getElementsByClassName("music")[0];
// const searchInput = document.getElementsByClassName("search_input")[0];

// let allSongs = [];


// fetch("songs.json")
//     .then(res => res.json())
//     .then(data => {
//         allSongs = data;
//         const randomThree = getRandomSongs(allSongs, 3);
//         renderSongs(randomThree);
//     });


// function getRandomSongs(arr, n) {
//     const shuffled = arr.slice().sort(() => 0.5 - Math.random());
//     return shuffled.slice(0, n);
// }






// function renderSongs(songList) {
//     container.innerHTML = "";
//     songList.forEach(song => {
//         const card = document.createElement("div");
//         card.className = "song-card";
//         card.style.backgroundImage = `url(${song.image})`;

//         const overlay = document.createElement("div");
//         overlay.className = "overlay";

//         const title = document.createElement("h3");
//         title.textContent = `${song.name} -— ${song.singer}`;

//         const audio = document.createElement("audio");
//         audio.controls = true;
//         audio.src = song.src;

//         overlay.appendChild(title);
//         overlay.appendChild(audio);
//         card.appendChild(overlay);
//         container.appendChild(card);
//     });
// }


// searchInput.addEventListener("input", () => {
//     const query = searchInput.value.toLowerCase();
//     const filtered = allSongs.filter(song =>
//         song.name.toLowerCase().includes(query) ||
//         song.singer.toLowerCase().includes(query) ||
//         song.other.toLowerCase().includes(query)
//     );

//     renderSongs(filtered);

// });



// === DOM Elements ===
const container = document.querySelector(".music");
const nowPlaying = document.getElementById("now-playing");
const searchInput = document.querySelector(".search_input");

// // === Global State ===
// let allSongs = [];
// let currentAudio = null;
// let favorites = JSON.parse(localStorage.getItem("favoriteSongs")) || [];

// // === Fetch Songs from songs.json ===
// fetch("songs.json")
//     .then(res => res.json())
//     .then(data => {
//         allSongs = data;
//         renderSongs(allSongs);
//     });

// // === Render Songs Function ===
// function renderSongs(songList) {
//     container.innerHTML = "";

//     songList.forEach(song => {
//         const card = createSongCard(song);
//         container.appendChild(card);
//     });
// }

// // === Create Each Song Card ===
// function createSongCard(song) {
//     const card = document.createElement("div");
//     card.className = "song-card";
//     card.style.backgroundImage = `url(${song.image})`;
//     card.style.padding = "20px";
//     card.style.margin = "10px";
//     card.style.backgroundSize = "cover";
//     card.style.color = "#fff";

//     const overlay = document.createElement("div");
//     overlay.className = "overlay";
//     overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
//     overlay.style.padding = "10px";

//     const title = document.createElement("h3");
//     title.textContent = `${song.name} — ${song.singer}`;

//     const audio = document.createElement("audio");
//     audio.src = song.src;

//     const playBtn = document.createElement("button");
//     playBtn.textContent = "▶️ Play";

//     playBtn.addEventListener("click", () => handlePlayPause(audio, playBtn, song));

//     audio.addEventListener("ended", () => {
//         playBtn.textContent = "▶️ Play";
//         nowPlaying.textContent = "";
//         currentAudio = null;
//     });

//     const favBtn = document.createElement("button");
//     const isFav = favorites.includes(song.name);
//     favBtn.textContent = isFav ? "💔 Remove Favorite" : "❤️ Add to Favorite";

//     favBtn.addEventListener("click", () => toggleFavorite(song, favBtn));

//     overlay.appendChild(title);
//     overlay.appendChild(playBtn);
//     overlay.appendChild(favBtn);
//     card.appendChild(overlay);

//     return card;
// }

// // === Handle Play/Pause ===
// function handlePlayPause(audio, button, song) {
//     if (currentAudio && currentAudio !== audio) {
//         currentAudio.pause();
//         currentAudio.currentTime = 0;
//         currentAudio.btn.textContent = "▶️ Play";
//     }

//     if (audio.paused) {
//         audio.play();
//         button.textContent = "⏸ Pause";
//         nowPlaying.textContent = `Now Playing: ${song.name} — ${song.singer}`;
//         currentAudio = audio;
//         currentAudio.btn = button;
//     } else {
//         audio.pause();
//         button.textContent = "▶️ Play";
//         nowPlaying.textContent = "";
//         currentAudio = null;
//     }
// }

// // === Toggle Favorite ===
// function toggleFavorite(song, button) {
//     if (favorites.includes(song.name)) {
//         favorites = favorites.filter(fav => fav !== song.name);
//         button.textContent = "❤️ Add to Favorite";
//     } else {
//         favorites.push(song.name);
//         button.textContent = "💔 Remove Favorite";
//     }
//     localStorage.setItem("favoriteSongs", JSON.stringify(favorites));
// }

// // === Search Feature ===
// searchInput.addEventListener("input", () => {
//     const query = searchInput.value.toLowerCase();
//     const filtered = allSongs.filter(song =>
//         song.name.toLowerCase().includes(query) ||
//         song.singer.toLowerCase().includes(query) ||
//         song.other.toLowerCase().includes(query)
//     );
//     renderSongs(filtered);
// });






