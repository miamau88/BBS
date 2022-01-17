let bbs = [];
fetch("http://localhost:5000/bbs")
  .then((res) => res.json())
  .then((res) => {
    bbs = res;
    list();
    delFunc();
    modiFunc();
    // console.log(bbs)
  });
const list = () => {
  const ul = document.querySelector("ul");
  const bbsMap = (bbslist) => {
    console.log(bbs);
    return `<li data-id='${bbslist.no}'> 
        <div class=num>${bbslist.no}</div>
        <div class=title>${bbslist.title}</div>
        <div class=date>${dateFormat(bbslist.regdate)}</div>
        <div class=member>${bbslist.member} 
        
        <button class="btndel"> 삭제</button>
        </div>
        </li> `;
  };
  // <button class="btnModi">수정</button>
  ul.innerHTML = bbs.map(bbsMap).join("");
};

function dateFormat(date) {
  // moment
  // 2021-11-11 -> 21/11/11
  // moment('').fomat('yy/m/d')
  const res = date.split(":");
  return `${res[0]}:${res[1]}`;
}

function delFunc() {
  const btnDel = document.querySelectorAll(".btndel");
  for (let i = 0; i < btnDel.length; i++) {
    btnDel[i].addEventListener("click", (e) => {
      // delete도 함수로 만들기
      const id = e.target.parentNode.parentNode.dataset.id;
      console.log(id);
      fetch(`http://localhost:5000/bbs`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ no: id }),
      })
        .then(() => {
          bbs.splice(i, 1);
          e.target.parentNode.parentNode.remove();
          console.log(bbs);
        })
        .catch((err) => alert(err));
    });
  }
}
const num = document.querySelector(".modal  .num");
const title = document.querySelector(".modal  #title-Input");
const date = document.querySelector(".modal  .date");
const member = document.querySelector(".modal .member");
const txtarea = document.querySelector(".modal #modi-txtarea");
const modiBtn = document.querySelector(".modal .modiBtn");
const modiBtn2 = document.querySelector(".modal .modiBtn2");
function modiFunc() {
  // const btnModiPopup = document.querySelectorAll(".btnModi");
  const li = document.querySelectorAll("li");
  for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("click", (e) => {      
      modalOpen("edit");
      // 수정과 관련된 함수 새로 생성
      const id = e.target.closest("li").dataset.id; // closest 사용
      //for (let i = 0; i < bbs.length; i++) { //  find or findIndex 함수로 변경
      const res = bbs.find((v) => v.no == id); //  find or findIndex 함수로 변경
      console.log(res);
      num.innerText = res.no;
      title.value = res.title;
      date.innerText = res.regdate;
      member.innerText = res.member;
      txtarea.innerText = res.msg;
      title.readOnly = true;
      txtarea.readOnly = true;
    });
  }

  function reload() {
    (location || window.location || document.location).reload();
  }

  function delay(ms) {
    return setTimeout(() => {
      reload();
    }, ms);
  }
  modiBtn.addEventListener("click", () => {    
    modalOpen("edit2");
    title.readOnly = false;
    txtarea.readOnly = false;    
  })
  modiBtn2.addEventListener("click", () => {    
      fetch(`http://localhost:5000/bbs`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify({
          no: num.innerText,
          title: title.value,
          msg: txtarea.value,
        }),
      })
        .then((res) => res.json())
        // .then((res) => modalCloseNone(), setTimeout(() => { location.reload() },500))
       .then((res) => modalCloseNone(), delay(50))
        .catch((err) => alert(err));
    
  });
}

const modal = document.querySelector(".modal");
const modal2 = document.querySelector(".modal2");
const btnOpenPopup = document.querySelector(".modalOpen");
const modalClose = document.querySelector(".modal-closeX");
function modalOpen(type) {
  modal.style.display = "block";  
  if (type == "edit") {
    const wrtBtn = document.querySelector(".wrtbtn");
    wrtBtn.style.display = "none";
    const modiBtn2 = document.querySelector(".modiBtnBox2");
    const modiBtn = document.querySelector(".modiBtnBox");
    modiBtn.style.display = "block";
    modal.style.display = "block";  
    modiBtn2.style.display = "none";
  }
  if (type == "add") {
    const modiBtn = document.querySelector(".modiBtnBox");
    const modiBtn2 = document.querySelector(".modiBtnBox");
    modiBtn.style.display = "none";
    modiBtn2.style.display = "none";
    const wrtBtn = document.querySelector(".wrtbtn");
    wrtBtn.style.display = "block";
  }
  if(type == "edit2"){
    // modiBtn.style.display = "none";
    // modiBtn2.style.display = "none";
  
  }
}
function modalCloseNone() {
  const modiBtn = document.querySelector(".modiBtnBox");
  const modiBtn2 = document.querySelector(".modiBtnBox");
  modiBtn.style.display = "none";
  modiBtn2.style.display = "block";
}
btnOpenPopup.addEventListener("click", () => {
  modalOpen("add");
  title.value = "";
  txtarea.value = "";
  num.innerText = "";
  date.innerText = "";
});
modalClose.addEventListener("click", modalCloseNone);

// modalClose.addEventListener("click", none); // 콜백함수
const writeBtn = document.querySelector(".writeBtn");
const input = document.querySelector("input");

writeBtn.addEventListener("click", () => {
  // let no = bbs.length !== 0 ? Number(bbs[bbs.length - 1].no) + 1 : 1
  const body = document.querySelector("body");
  const member = body.dataset.id;
  const txtarea = document.querySelector("#modi-txtarea");

  // 배열 마지막 요소의  no에 + 1
  fetch(`http://localhost:5000/bbs`, {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({
      title: input.value,
      member: member,
      msg: txtarea.value,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      bbs.push({
        no: res.no,
        title: res.title,
        regdate: res.regdate,
        member: res.member,
        msg: res.msg,
      });
      list();
      modiFunc();
      delFunc();
      modalCloseNone();
    })
    .catch((err) => alert(err));
  console.log(bbs);
});

// 수정 기능 구현 (제목, 내용 변경 가능)
//
