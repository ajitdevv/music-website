//! DOM ===> document object model

// ? HTML selecter ===> this his many types like this 1. getElementById  ,2.getElementsByClassName  ,3.getElementsByName  ,4.getElementsByTagName ,5.getElementsByTagNameNS   ,6.querySelector   ,7.querySelectorAll
// let h1=document.querySelector("h1")  /*====> then log dont work then use dir */
// console.dir(h1)
// ? text menuplation
// h1.innerHTML="hjkl"

// ? find value from a attrbute ==> 1.this his give first attrbute .
// ? 2.this his give value only dricket attrubutes not give valuse from tag .
// let a = document.querySelector("a");
// console.log(a.getAttribute("href"));
// ans:rtghjkl 
// let a=document.getElementById("home")
// console.dir(a)








//! DOM ===> document object model

// ? HTML selecter ===> this his many types like this 1. getElementById  ,2.getElementsByClassName  ,3.getElementsByName  ,4.getElementsByTagName ,5.getElementsByTagNameNS   ,6.querySelector   ,7.querySelectorAll
// let h1=document.querySelector("h1")  /*====> then log dont work then use dir */
// console.dir(h1)


//? nested selecter
// let text = document.querySelector(".container div")
// console.dir(text)


// q.1 sfont select all p and changfont size =25xp
// let allp = document.querySelectorAll("p")
// console.dir(allp)
// allp.forEach(function (ele) {
//     ele.style.fontSize = "25px"


// });


// ! text menuplation
//*  event binding
// ? add event listener
// 1. click
// 2. dblclick  
// ?? 1. single click
// let h1=document.querySelector("h1")
// console.dir(h1)
// h1.addEventListener("click",function (val) {

//    h1.style.fontSize ="10px"
// })

// let p=document.querySelector(".home .home-article .heading p")
// console.dir(p)
// p.addEventListener("click",function () {
//     p.style.color="green"
// })
// let home_p = document.querySelector(".about .about-article .about-article--headings p")
// console.dir(home_p)
// home_p.addEventListener("click", function () {
//     home_p.style.color = "red"
// })
// ?? 2. duble click
// let about_me = document.querySelector(".about .about-article .about-article--headings h1")
// function remove() {
//     about_me.style.color="black"

// }
// about_me.addEventListener("dblclick",remove )

// ? remove event listener

// let about_me = document.querySelector(".about .about-article .about-article--headings h1")
// function remove() {
//     about_me.style.color="black"

// }
// about_me.addEventListener("dblclick",remove )
// about_me.removeEventListener("dblclick", remove)  

// * common events 
// 1. click
// 2. inputs
// 3. change
// 4. submit
// 5. mouseover,mousemove
// 6. keyup


//  ? click
// let p=document.querySelector(".home .home-article .heading p")
// p.addEventListener("click",function () {
//     p.style.color="green"
// })

// ? inputs
// let inputs = document.querySelector("#raju")
// inputs.addEventListener("input", function (vr) {
//     console.log("typed")

// })

// for exterct "data" i mean any one then fill this section then java script store this "data"
// let inputs = document.querySelector("#raju")
// inputs.addEventListener("input", function (vr) {
//     console.log(vr.data)

// })



// then any user using backspace then "data" ritriv function give a null value andd tack extra memory then use if else to solve this problems

// let inputdata = document.querySelector("#raju")
// inputdata.addEventListener("input", function (raj) {
//     if (raj.data !== null) {
//        console.log(raj.data) 
//     }
    

// })

// ? chang 

// \\ add in html then this code work 


                   // <h2 id="h221">select any one phone</h2>
                    // <select id="ram">
                    //     <option selected disabled>chose one</option>
                    //     <option value="i phone">i phone</option>
                    //     <option value="i phone 12">i phone 12</option>
                    //     <option value="i phone 13">i phone 13</option>
                    //     <option value="i phone 14">i phone 14</option>
                    //     <option value="i phone 15">i phone 15</option>

                    // </select>
              
// let phone_use = document.querySelector("#ram")
// let phone_slected= document.querySelector("#h221")
// phone_use.addEventListener("change",function (ele) {
//     console.log(ele.target.value)
    // phone_slected.textContent="htm"
// })

// phone_use.addEventListener("change",function (elel) {
//     phone_slected.textContent=`${elel.target.value} devices slected`
// })
// console.dir(phone_slected)





// ? submit
// let form_data=document.querySelector("#form1")
// let inputs=document.querySelectorAll("input")

// form_data.addEventListener("submit", function (babu) {
//     babu.preventDefault();
//     console.log(inputs[0].value,inputs[1].value)
    
// })


// ? mouseover,mousemove
let skill= document.querySelector(".skill")
skill.addEventListener("mouseover",function () {
    skill.Style.backgroundcolor="red"
    
})
