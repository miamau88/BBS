// document.querySelector('.wrt-btnbox').onclick = function() {
//     alert('hi');
// }
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

// const writeButton = document.querySelector(".wrt-btnbox");
// writeButton.addEventListener("click", function () {
//   alert("hi");
// });
// document.querySelector()

bbsAdd();

function bbsAdd() {
  bbs.map((listAdd) => {
    ul.innerHTML += `<li>
              <div class="num">${listAdd.bbsNo}</div>
              <div class="title"><a href="bbsview.html">${listAdd.bbsTitle}</a></div>
              <div class="date">${listAdd.bbsDate}</div>
              <div class="member">${listAdd.bbsUser}</div>    
           </li>`;
    console.log(`${listAdd.bbsNo}리스트${listAdd.bbsNo}`);
    console.log(listAdd.bbsDate + "hi" + listAdd.bbsNo);
    const li = document.querySelector("li");

    li.addEventListener("click", () => {
      alert("이벤트 테스트");
    });
  });

  // const addRes = bbs.map(listA => listA);

  // for (let i = 0; i < bbs.length; i++) {
  //     ul.innerHTML += `<li>
  //       <div class="num">${bbs[i].bbsNo}</div>
  //       <div class="title"><a href="bbsview.html">${bbs[i].bbsTitle}</a></div>
  //       <div class="date">${bbs[i].bbsDate}</div>
  //       <div class="member">${bbs[i].bbsUser}</div>
  //       </li>`;
  //   }
}

// bbsa();
// function bbsa() {
// const listB = bbs.map((listA) => {
//     console.log(listA);
//   });
// }
// const listB = bbs.map(listA => listA);
// const divnum = document.querySelector("div.num");
// console.log(`${ listB[1].bbsNo } + test`);
// if (`${listB[0].bbsNo}` == 0) {
//    divnum.innerHTML += "<p>0이라서추가해봤어</p>";
//  } else {
//    divnum.innerHTML += "<p>0이아니야</p>";
//  }
const addRes = bbs.map((listA) => listA);
console.log(addRes)
// bbs.map((listA) => {
// for (let i = 0; i < addRes.length; i++ ){

const divnum = document.querySelector("div.num");
// console.log(divnum);
// console.log(listA.bbsNo + 'test');
// console.log(`${listA.bbsNo} +'test'`);
// console.log(`${listA.bbsNo}test`);
// const addres1 = `${addRes[1].bbsNo}`;
if (`${addRes[0].bbsNo}` == 0) {
  divnum.innerHTML += "<p>0이라서추가해봤어</p>";
} else if (`${addRes1}` !== 0) { 
      divnum.innerHTML = "<p>0이아니야</p>";
}
// });
// }
// function testFunc () {
// }
// const testFunc = () => {
// }

ul.addEventListener("click", function () {
  alert("!");
});

ul.addEventListener("click", () => {});
