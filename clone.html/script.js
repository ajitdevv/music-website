//! add extra ====> add your card using only name and pitcher
let btn = document.querySelector(".btnn");

btn.addEventListener("click", function () {
    if (document.body.classList.contains('dark')) {
        // Agar body mein 'dark' class hai, toh use hata ke 'light' add karo
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    } else if (document.body.classList.contains('light')) {
        // Agar 'light' class hai, toh 'dark' add karo
        document.body.classList.remove('light');
        document.body.classList.add('dark');
    } else {
        // Agar koi class nahi hai, pehle click pe 'dark' add karo
        document.body.classList.add('dark');
    }
});





