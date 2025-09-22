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



//***** Song search *****//

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
        title.textContent = `${song.name} -— ${song.singer}`;

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
        song.singer.toLowerCase().includes(query) ||
        song.other.toLowerCase().includes(query)
    );

    renderSongs(filtered);

});


 
// ********This code run only for (<= 780px) ********//
// function checkScreenSize() {
//   const menu_on = document.getElementsByClassName("ul");  // collection milti hai
//   const theme_chang_off = document.getElementsByClassName("btn");  // collection milti hai
  
  
//   if (window.innerWidth <= 780) {
//     for(let i = 0; i < menu_on.length; i++) {
//       menu_on[i].style.display = "none";
//     }
//   } else {
//     // Screen badi ho toh wapas display set karo (default: block ya inline block aapke HTML ke hisab se)
//     for(let i = 0; i < menu_on.length; i++) {
//       menu_on[i].style.display = "";  // empty string matlab CSS file ya default style follow hoga
//     }
//   }
//   if (window.innerWidth <= 780) {
//     for(let i = 0; i < theme_chang_off.length; i++) {
//       theme_chang_off[i].style.display = "none";
//     }
//   } else {
//     // Screen badi ho toh wapas display set karo (default: block ya inline block aapke HTML ke hisab se)
//     for(let i = 0; i < theme_chang_off.length; i++) {
//       theme_chang_off[i].style.display = "";  // empty string matlab CSS file ya default style follow hoga
//     }
//   }
// }

// // Page load par check karo
// checkScreenSize();

// // Screen resize hone par bhi check karo
// window.addEventListener('resize', checkScreenSize);

const menuSmart = document.querySelector('.menu-smart');
const menuList = document.getElementById('menu-list');

menuSmart.addEventListener('click', () => {
  menuList.classList.toggle('open'); // toggle 'open' class
});
