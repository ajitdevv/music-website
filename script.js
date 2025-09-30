// //! add extra ====> add your card using only name and pitcher



// ------------------- Global Variables -------------------
let songList = [];  // <== Add this at the very top, before any function
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

//***** Theme chang *****//


let btn = document.querySelector(".theme-chang");
btn.addEventListener("click", function () {
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    } else {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        alert("Look like paid website");
    }
});

// ******Menu open funclity****** //

const menuSmart = document.querySelector('.menu-smart');
const menuList = document.getElementById('menu-list');

menuSmart.addEventListener('click', () => {
    menuList.classList.toggle('open');
});

//***** Song search *****//
const container = document.getElementsByClassName("music")[0];
const searchInput = document.getElementsByClassName("search_input")[0];

fetch("songs.json")
    .then(res => res.json())
    .then(data => {
        allSongs = data;
        songList = data;
        const randomThree = getRandomSongs(allSongs, 3);
        renderSongs(randomThree);
    });

function getRandomSongs(arr, n) {
    const shuffled = arr.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}



// ******Menu open funclity****** //
let allSongs = [];
let currentIndex = 0;
const perPage = 9;
let loadMoreBtn;
function renderSongs(songList) {
    container.innerHTML = "";
    currentIndex = 0;
    if (loadMoreBtn) loadMoreBtn.remove();
    renderNextChunk(songList);
    if (songList.length > perPage) createLoadMoreButton(songList);
}




function renderNextChunk(songList) {
    const nextSongs = songList.slice(currentIndex, currentIndex + perPage);

    nextSongs.forEach(song => {
        const card = document.createElement("div");
        card.className = "song-card";
        card.style.backgroundImage = `url(${song.image})`;
        card.dataset.id = song.id;
        // ⭐ Favorite Button        
        const favBtn = document.createElement("button");
        favBtn.className = "favorite-btn";
        favBtn.textContent = "♡";
        favBtn.dataset.id = song.id;

        if (favorites.includes(song.id)) {
            favBtn.classList.add('active');
            favBtn.textContent = "❤️";
        }
        // div creat for songs
        const overlay = document.createElement("div");
        overlay.className = "overlay";

        const title = document.createElement("h3");
        title.textContent = `${song.name} — ${song.singer}`;

        const audio = document.createElement("audio");
        audio.controls = true;
        audio.src = song.src;

        overlay.appendChild(title);
        overlay.appendChild(audio);
        card.appendChild(favBtn);
        card.appendChild(overlay);
        container.appendChild(card);
    });

    currentIndex += nextSongs.length;
    attachAudioListeners();
    attachFavoriteListeners();
}

function attachFavoriteListeners() {
    const favButtons = document.querySelectorAll('.favorite-btn');

    favButtons.forEach((btn, index) => {
        if (!btn.dataset.listener) {
            btn.addEventListener('click', () => {
                const id = btn.dataset.id;
                btn.classList.toggle('active');

                if (btn.classList.contains('active')) {
                    btn.textContent = "❤️";
                    if (!favorites.includes(id)) favorites.push(id);
                } else {
                    btn.textContent = "♡";
                    favorites = favorites.filter(i => i != id);
                }

                // Save updated favorites to localStorage
                localStorage.setItem('favorites', JSON.stringify(favorites));
            });

            btn.dataset.listener = "true";

        }
    });
}






function attachFavoriteListeners() {
    const favButtons = document.querySelectorAll('.favorite-btn');

    favButtons.forEach(btn => {
        if (!btn.dataset.listener) {
            btn.addEventListener('click', () => {
                const id = btn.dataset.id;
                btn.classList.toggle('active');

                if (btn.classList.contains('active')) {
                    btn.textContent = "❤️";
                    if (!favorites.includes(id)) favorites.push(id);
                } else {
                    btn.textContent = "♡";
                    favorites = favorites.filter(i => i !== id);
                }

                localStorage.setItem('favorites', JSON.stringify(favorites));
            });

            btn.dataset.listener = "true";
        }
    });
}
// const favoriteCards = document.querySelectorAll('.song-card');
// favoriteCards.forEach(card => {
//     if (favorites.includes(card.dataset.id)) {
//         card.style.display = "block";
//     } else {
//         card.style.display = "none";
//     }
// });



// Jab ek audio play ho, baaki pause ho jaye
function attachAudioListeners() {
    const audios = document.querySelectorAll('audio');

    audios.forEach(audio => {
        audio.onplay = null;
        audio.addEventListener('play', () => {
            audios.forEach(other => {
                if (other !== audio) {
                    other.pause();
                    other.currentTime = 0;
                }
            });
        });
    });
}


function createLoadMoreButton(songList) {
    loadMoreBtn = document.createElement("button");
    loadMoreBtn.innerText = "View More";
    loadMoreBtn.style.display = "block";
    loadMoreBtn.style.margin = "20px auto";
    loadMoreBtn.style.padding = "10px 20px";
    loadMoreBtn.style.cursor = "pointer";
    loadMoreBtn.style.border = "none";
    loadMoreBtn.style.borderRadius = "5px";
    loadMoreBtn.style.backgroundColor = "#1e90ff";
    loadMoreBtn.style.color = "#fff";
    loadMoreBtn.style.fontSize = "16px";

    loadMoreBtn.addEventListener("mouseenter", () => {
        loadMoreBtn.style.backgroundColor = "#0c66c1";
    });
    loadMoreBtn.addEventListener("mouseleave", () => {
        loadMoreBtn.style.backgroundColor = "#1e90ff";
    });

    container.appendChild(loadMoreBtn);

    loadMoreBtn.addEventListener("click", () => {
        renderNextChunk(songList);


        if (currentIndex >= songList.length) {
            loadMoreBtn.remove();
        }

        container.appendChild(loadMoreBtn);
    });
}

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = allSongs.filter(song =>
        song.name.toLowerCase().includes(query) ||
        song.singer.toLowerCase().includes(query) ||
        song.other.toLowerCase().includes(query)
    );
    renderSongs(filtered);
});


const menuItems = document.querySelectorAll("#menu-list #ul li:not(.firstchild),.nav_bar #top-ul li.filter--");
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        const category = item.textContent.toLowerCase();
        const filtered = allSongs.filter(song =>
            song.other.toLowerCase().includes(category)
        );
        renderSongs(filtered);
        searchInput.value = '';
    });
});

// favorite songs filter 
const favDesktopBtn = document.getElementById('show-favorites');
const favMobileBtn = document.getElementById('show-favorites-small-screen');

function handleFavClick() {
    let favs = JSON.parse(localStorage.getItem('favorites')) || [];
    const filtered = allSongs.filter(song => favs.includes(String(song.id)));
    renderSongs(filtered);
}

if (favDesktopBtn) favDesktopBtn.addEventListener('click', handleFavClick);
if (favMobileBtn) favMobileBtn.addEventListener('click', handleFavClick);
