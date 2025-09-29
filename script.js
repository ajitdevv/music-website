// //! add extra ====> add your card using only name and pitcher



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

        // ⭐ Favorite Button
        const favBtn = document.createElement("button");
        favBtn.className = "favorite-btn";
        favBtn.innerHTML = "♡";
        favBtn.title = "Add to Favorites";
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

// fevret toggel
// function attachFavoriteListeners() {
//     const fevButtons = document.querySelectorAll('.favorite-btn');

//     fevButtons.forEach(btn => {
//         btn.addEventListener('click', () => {
//             btn.classList.toggle('active');
//             if (btn.classList.contains('active')) {
//                 btn.textContent = "❤️";
//             } else {
//                 btn.textContent = "♡";
//             }
//         });
//     });
}
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

const menulist = document.querySelectorAll(".nav_bar #ul li.filter--");
menulist.forEach(item => {
    item.addEventListener("click", () => {
        const category = item.textContent.toLowerCase();
        const filtered = allSongs.filter(song =>
            song.other.toLowerCase().includes(category)
        );
        renderSongs(filtered);
        searchInput.value = '';
    });
});


