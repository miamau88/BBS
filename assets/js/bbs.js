
let bbs = [];
fetch("http://localhost:5000/bbs")
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
        <div class=date>${bbslist.regdate}</div>
        <div class=member>${bbslist.member} <button class="btndel"> 삭제</button></div>
        </li> `;
  };
  ul.innerHTML = bbs.map(bbsMap).join("");
  const btnDel = document.querySelectorAll(".btndel");
  for (let i = 0; i < btnDel.length; i++) {
    btnDel[i].addEventListener("click", (e) => {
      const id = e.target.parentNode.parentNode.dataset.id;
      console.log(id);
      fetch(`http://localhost:5000/bbs`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json;charset=utf-8"          
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
};


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
const writeBtn = document.querySelector(".writeBtn");
const input = document.querySelector("input");

writeBtn.addEventListener("click", () => {
  let no = bbs.length !== 0 ? Number(bbs[bbs.length - 1].no) + 1 : 1
  let date = 0
  let member = 'test9'
  // 배열 마지막 요소의  no에 + 1
  fetch(
    `http://localhost:5000/bbs`,
    {
      method: "POST",
      headers: { "Content-Type": "applicaton/json;charset=utf-8" },
      body: JSON.stringify({ no: no, title: input.value,date: 0, member: 'test4123412' })
    }   
)
    .then(() => {
      bbs.push({
        no: no,
        title: input.value,
        date: date,
        member: member,
      });
      
      list();
    })
    .catch((err) => alert(err));

  console.log(bbs);
});
