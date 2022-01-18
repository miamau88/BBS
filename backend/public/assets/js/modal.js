const $num = document.querySelector(".modal  .num");
const $title = document.querySelector(".modal  #title-Input");
const $date = document.querySelector(".modal  .date");
const $member = document.querySelector(".modal .member");
const $txtarea = document.querySelector(".modal #modi-txtarea");
const modiBtn = document.querySelector(".modal .modiBtn");

const modal = document.querySelector(".modal");
const btnOpenPopup = document.querySelector(".modalOpen");
const modalClose = document.querySelector(".modal-closeX");
function modalOpen(type) {
  modal.style.display = "block";
  if (type == "edit") {
    const wrtBtn = document.querySelector(".wrtbtn");
    wrtBtn.style.display = "none";
    const modiBtn = document.querySelector(".modiBtnBox");
    modiBtn.style.display = "block";
  }
  if (type == "add") {
    const modiBtn = document.querySelector(".modiBtnBox");
    modiBtn.style.display = "none";
    const wrtBtn = document.querySelector(".wrtbtn");
    wrtBtn.style.display = "block";
  }
}
function modalCloseNone() {
  modal.style.display = "none";
}
modalClose.addEventListener("click", modalCloseNone);

function modalSetData(no ="",title="",regdate="",member="",msg=""){
    $num.innerText = no
    $title.value = title
    $date.innerText = regdate
    $member.innerText = member
    $txtarea.innerText = msg
    

}
