// el.addEventListener('eventType', function() {})
const ul = document.querySelector("ul");
const bbs = [
  {
    bbsNo: "0",
    bbsTitle: "제목테스트0000",
    bbsDate: "2021-11-30",
    bbsUser: "제시0000",
  },

  {
    bbsNo: "1",
    bbsTitle: "제목테스트1111",
    bbsDate: "2021-11-30",
    bbsUser: "제시1111",
  },
];

// bbs.push({
//   bbsNo: "2",
//   bbsTitle: "제목테스트 2222222",
//   bbsDate: "2021-12-02",
//   bbsUser: "제시",
// });

bbsAdd();
btndel();
// ul.innerHTML = todos.map((todoslist) => `<li>${todoslist}</li>`).join("");
function bbsAdd() {
  // 삼항연산자<div class="num">${listAdd.bbsNo == '0' ? '<p>0</p>' : '<p>1</p>'}</div>
  ul.innerHTML = bbs
    .map((listAdd) => {
       console.log(listAdd);
      return `<li>                
              <div class="title"><a>${listAdd.bbsNo}</a></div>
              <div class="title"><a>${listAdd.bbsTitle}</a></div>
              <div class="date">${listAdd.bbsDate}</div>
              <div class="member">${listAdd.bbsUser}
              <button class="btnDel">삭제</button>
              </div>    
           </li>`;
       
           
    })
    .join("");

  

  // li.addEventListener("click", () => {
  //   alert("이벤트 테스트");
  // });
  
}

const modal = document.querySelector(".modal");
const btnOpenPopup = document.querySelector(".modalOpen");
const modalClose = document.querySelector(".modal-closeX");
function block() {
  modal.style.display = "block";
}
function none() {
  modal.style.display = "none";
}
btnOpenPopup.addEventListener("click", block);
modalClose.addEventListener("click", none);

// modalClose.addEventListener("click", none); // 콜백함수
const writeSucClose = document.querySelector(".write-close");
const input = document.querySelector("input");

// let a = 2;
writeSucClose.addEventListener("click", () => {
  // 배열 마지막 요소의  no에 + 1
  bbs.push({
    bbsNo: Number(bbs[bbs.length - 1].bbsNo) + 1,
    bbsTitle: input.value,
    bbsDate: "2021-12-07",
    bbsUser: "제시2222",
  });

  bbsAdd();
  btndel()
  
  // console.log(bbs);
  none();
});

function btndel() {
  const btnDel = document.querySelectorAll(".btnDel");  
  for (let i = 0; i < btnDel.length; i++) {
    btnDel[i].addEventListener("click", (e) => {
    // console.log(e.target.parentNode.parentNode)
      bbs.splice(i, 1);
      e.target.parentNode.parentNode.remove();
      console.log(bbs);
    });
  }
}

// fetch
// promise
// callback


// addRes.forEach(v => )
// });
