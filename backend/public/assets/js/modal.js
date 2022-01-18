const $num = document.querySelector(".modal  .num");
const $title = document.querySelector(".modal  #title-Input");
const $date = document.querySelector(".modal  .date");
const $member = document.querySelector(".modal .member");
const $txtarea = document.querySelector(".modal #modi-txtarea");
const modiBtn = document.querySelector(".modal .modiBtn");

const modal = document.querySelector(".modal");
const btnOpenPopup = document.querySelector(".modalOpen");
const modalClose = document.querySelector(".modal-closeX");
const wrtBtn = document.querySelector(".wrtbtn");
const modiBtnBox = document.querySelector(".modiBtnBox");
function modalOpen(type) {
    // debugger
  modal.style.display = "block";
  if (type == "edit") {
    wrtBtn.style.display = "none";    
    modiBtnBox.style.display = "block";    
    $title.readOnly = false;
    $txtarea.readOnly = false;    
  }
  if (type == "add") {
    
    modiBtnBox.style.display = "none";    
    wrtBtn.style.display = "block";
  }
  if(type == "view"){
    $title.readOnly = true;
    $txtarea.readOnly = true;    
    wrtBtn.style.display = "none"
    modiBtnBox.style.display = "block";    
    
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
