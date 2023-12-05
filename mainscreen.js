//var mainThemeMusic = new Audio("sounds/NINJAMainMenuSong.mp3");
////mainThemeMusic.loop = true;
//
//function mainThemeSong() {
//    mainThemeMusic.play()
//}

//const openInsButton = document.querySelector("data-ins-target");
//const closeInsButton = document.querySelector('data-close-button');
//const overlay = document.getElementById('overlay');
//
//openInsButton.forEach(button => {
//    button.addEventListner('click', ()=> {
//        const ins = document.querySelector(button.dataset.idTarget);
//        openIns(ins);
//    })
//})
//
//overlay.addEventListener('click', () =>{
//    const inss = document.querySelectorAll('ins.active');
//    inss.forEach(inss =>{
//        closeIns(inss);
//    })
//})
//
//closeInsButton.forEach(button => {
//    button.addEventListner('click', ()=> {
//        const ins = button.closest('ins');
//        closeIns(ins);
//    })
//})
//
//function openIns(ins){
//    if (ins == null) return;
//    ins.classList.add('active');
//    overlay.classList.add('active');
//}
//
//function closeIns(ins){
//    if (ins == null) return;
//    ins.classList.remove('active');
//    overlay.classList.remove('active');
//}

// Get references to the overlay and popup elements
const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");

// Get references to the open and close buttons
const openPopupButton = document.getElementById("Insbtn");
const closePopupButton = document.getElementById("closebutton");

// Function to open the popup
function openIns() {
    overlay.style.display = "block";
    popup.style.display = "block";
}

// Function to close the popup
function closeIns() {
    overlay.style.display = "none";
    popup.style.display = "none";
}

// Attach click event handlers to open and close buttons
openPopupButton.addEventListener("click", openIns);
closePopupButton.addEventListener("click", closeIns);