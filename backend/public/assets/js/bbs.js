let bbs = [];
getApi()
  .then((res) => res.json())
  .then((res) => {
    bbs = res;
    list();

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
  const btnDel = document.querySelectorAll(".btndel");
  for (let i = 0; i < btnDel.length; i++) {
    btnDel[i].addEventListener("click", delFunc);
  }
  // const btnModiPopup = document.querySelectorAll(".btnModi");
  const li = document.querySelectorAll("#list-ul > li");
  for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("click", (e) => {
      modalOpen("view");
      const id = e.target.closest("li").dataset.id;
      const res = bbs.find((v) => v.no == id); //  find or findIndex 함수로 변경
      modalSetData(res.no, res.title, res.regdate, res.member, res.msg);
    });
  }
};

function dateFormat(date) {
  // moment
  // 2021-11-11 -> 21/11/11
  // moment('').fomat('yy/m/d')
  const res = date.split(":");
  return `${res[0]}:${res[1]}`;
}

function delFunc(e) {
  // delete도 함수로 만들기
  const id = e.target.parentNode.parentNode.dataset.id;
  console.log(id);
  delApi(id)
    .then(() => {
      const bbsi = bbs.findIndex((v) => v.id == id);
      bbs.splice(bbsi, 1);
      e.target.parentNode.parentNode.remove();
      console.log(bbs);
    })
    .catch((err) => alert(err));
}

function modiFunc(e) {
  modalOpen("edit");
  // 수정과 관련된 함수 새로 생성
  const id = $num.innerText; // closest 사용
  //for (let i = 0; i < bbs.length; i++) { //  find or findIndex 함수로 변경
  const res = bbs.find((v) => v.no == id); //  find or findIndex 함수로 변경

  console.log(res);
  modalSetData(res.no, res.title, res.regdate, res.member, res.msg);
}

modiBtn.addEventListener("click", (e) => {
  modiFunc(e);
});
const saveBtn = document.querySelector(".saveBtn");
saveBtn.addEventListener("click", () => {
  modiApi($num.innerText, $title.value, $txtarea.innerText)
    .then((res) => res.json())
    // .then((res) => modalCloseNone(), setTimeout(() => { location.reload() },500))
    .then((res) => modalCloseNone(),delay(50))
    .catch((err) => alert(err));
});

function reload() {
  (location || window.location || document.location).reload();
}

function delay(ms) {
  return setTimeout(() => {
    reload();
  }, ms);
}

btnOpenPopup.addEventListener("click", () => {
  modalOpen("add");

  modalSetData();
});

// modalClose.addEventListener("click", none); // 콜백함수
const writeBtn = document.querySelector(".writeBtn");
const input = document.querySelector("input");

writeBtn.addEventListener("click", () => {
  // let no = bbs.length !== 0 ? Number(bbs[bbs.length - 1].no) + 1 : 1
  const body = document.querySelector("body");
  const member = body.dataset.id;
  

  // 배열 마지막 요소의  no에 + 1
  wrtApi($title.value,member,$txtarea.value)
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
      modalCloseNone();
    })
    .catch((err) => alert(err));
  console.log(bbs);
});

// 수정 기능 구현 (제목, 내용 변경 가능)
//
