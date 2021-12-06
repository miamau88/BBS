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

bbs.push({
  bbsNo: "2",
  bbsTitle: "제목테스트 2222222",
  bbsDate: "2021-12-02",
  bbsUser: "제시",
});

// const bbs3 = {};
// bbs3.bbsNo = "3";
// bbs3.bbsTitle = "제목테스트 3333";
// bbs3.bbsDate = "2021-12-01";
// bbs3.bbsUser = "제시3333";

// bbs.push(bbs3);
// console.log(bbs);

bbsAdd();

function bbsAdd() {
  // 삼항연산자<div class="num">${listAdd.bbsNo == '0' ? '<p>0</p>' : '<p>1</p>'}</div>
  bbs.map((listAdd) => {
    ul.innerHTML += `<li>
              <div class="num">${
                listAdd.bbsNo == "0" ? "<p>0</p>" : "<p>1</p>"
              }</div>   
              <div class="title"><a>${listAdd.bbsTitle}</a></div>
              <div class="date">${listAdd.bbsDate}</div>
              <div class="member">${listAdd.bbsUser}</div>    
           </li>`;
    console.log(`${listAdd.bbsNo}리스트${listAdd.bbsNo}`);
    console.log(listAdd.bbsDate + "hi" + listAdd.bbsNo);
    const li = document.querySelector("li");

    // li.addEventListener("click", () => {
    //   alert("이벤트 테스트");
    // });
  });
}

const addRes = bbs.map((listA) => listA);
console.log(addRes);

const divnum = document.querySelectorAll("div.num");

for (let i = 0; i < addRes.length; i++) {
  if (`${addRes[i].bbsNo}` == 0) {
    divnum[i].innerHTML += "<p>0이라서추가해봤어</p>";
  } else if (`${addRes[i].bbsNo}` !== 0) {
    divnum[i].innerHTML = "<p>0이아니야</p>";
  }
}

const modal = document.querySelector(".modal");
const btnOpenPopup = document.querySelector(".modalOpen");
const modalClose = document.querySelector(".modal-closeX");
btnOpenPopup.addEventListener("click", () => {
  modal.style.display = "block";
});
modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});



// addRes.forEach(v => )
// });

// ul.addEventListener("click", () => {
// });
