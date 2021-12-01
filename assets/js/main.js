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


function bbsAdd (){

  bbs.map(listAdd => {
      
    ul.innerHTML += `<li>
           <div class="num">${listAdd.bbsNo}</div>
           <div class="title"><a href="bbsview.html">${listAdd.bbsTitle}</a></div>
           <div class="date">${listAdd.bbsDate}</div>
           <div class="member">${listAdd.bbsUser}</div>    
           </li>`;
      
  });

    // for (let i = 0; i < bbs.length; i++) {
    //     ul.innerHTML += `<li>
    //       <div class="num">${bbs[i].bbsNo}</div>
    //       <div class="title"><a href="bbsview.html">${bbs[i].bbsTitle}</a></div>
    //       <div class="date">${bbs[i].bbsDate}</div>
    //       <div class="member">${bbs[i].bbsUser}</div>    
    //       </li>`;
    //   }
}

// function testFunc () {
// }
// const testFunc = () => {
// }

ul.addEventListener('click', function() {
    alert('!')
})

ul.addEventListener('click', () => {
    
})

