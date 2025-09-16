//! add extra ====> add your card using only name and pitcher
let btn = document.querySelector(".btnn");
btn.addEventListener("click", function () {
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    } else if (document.body.classList.contains('light')) {     
        document.body.classList.remove('light');
        document.body.classList.add('dark');
    } else {
        document.body.classList.add('dark');
    }
});





