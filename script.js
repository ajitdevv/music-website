// //! add extra ====> add your card using only name and pitcher




let btn = document.querySelector(".btnn");
btn.addEventListener("click", function () {
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    } else {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        alert("This his protect your eye's ");
    }
});


const container = document.getElementsByClassName("music")[0];
const searchInput = document.getElementsByClassName("search_input")[0];

let allSongs = [];


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


function renderSongs(songList) {
    container.innerHTML = "";  
    songList.forEach(song => {
        const card = document.createElement("div");
        card.className = "song-card";
        card.style.backgroundImage = `url(${song.image})`; 

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


searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = allSongs.filter(song =>
        song.name.toLowerCase().includes(query) ||
        song.singer.toLowerCase().includes(query)
    );
    renderSongs(filtered);
});









  