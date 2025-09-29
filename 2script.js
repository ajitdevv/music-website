// ********** Theme toggle **********
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

// ********** Menu open **********
const menuSmart = document.querySelector('.menu-smart');
const menuList = document.getElementById('menu-list');
menuSmart.addEventListener('click', () => menuList.classList.toggle('open'));

// ********** Global Variables **********
let allSongs = [];
let currentIndex = 0;
const perPage = 9;
let loadMoreBtn;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

const container = document.querySelector('.music');
const searchInput = document.querySelector('.search_input');

// ********** Fetch songs.json **********
fetch("songs.json")
  .then(res => res.json())
  .then(data => {
      allSongs = data;
      renderSongs(allSongs); // initial render
  })
  .catch(err => console.error(err));

// ********** Render songs **********
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

        // Favorite Button
        const favBtn = document.createElement("button");
        favBtn.className = "favorite-btn";
        favBtn.dataset.id = song.id;
        if (favorites.includes(song.id)) {
            favBtn.textContent = "❤️";
            favBtn.classList.add('active');
        } else {
            favBtn.textContent = "♡";
        }

        // Overlay
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

// ********** Favorite Button Listeners **********
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
                    favorites = favorites.filter(f => f !== id);
                }

                localStorage.setItem('favorites', JSON.stringify(favorites));
            });
            btn.dataset.listener = "true";
        }
    });
}

// ********** Audio Control (One at a time) **********
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

// ********** View More Button **********
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

    container.appendChild(loadMoreBtn);

    loadMoreBtn.addEventListener("click", () => {
        renderNextChunk(songList);
        if (currentIndex >= songList.length) loadMoreBtn.remove();
    });
}

// ********** Search **********
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = allSongs.filter(song =>
        song.name.toLowerCase().includes(query) ||
        song.singer.toLowerCase().includes(query) ||
        song.other.toLowerCase().includes(query)
    );
    renderSongs(filtered);
});

// ********** Menu / Category Filter **********
const menuItems = document.querySelectorAll("#menu-list ul li:not(.firstchild)");
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

// ********** Show Favorites **********
const showFavBtn = document.getElementById('show-favorites');
showFavBtn.addEventListener('click', () => {
    const favoriteSongs = allSongs.filter(song => favorites.includes(song.id));
    renderSongs(favoriteSongs);
});
