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
        <div class=member>${bbslist.member} 
        <button class="btnModi">수정</button>
        <button class="btndel"> 삭제</button>
        </div>
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
    })
  }
  const btnModiPopup = document.querySelectorAll(".btnModi");
  for (let i = 0; i < btnModiPopup.length; i++) {
    btnModiPopup[i].addEventListener("click", (e) => {
      block();
      const id = e.target.parentNode.parentNode.querySelector(".num").innerText;
      for (let i = 0; i < bbs.length; i++) {
        const res = bbs[i].no
        const res2 = bbs[i]
        if (res == id) {           
          console.log(res);
          console.log(res2);
          const num = document.querySelector('.modal  .num')
          const title = document.querySelector('.modal  .title')
          const date = document.querySelector('.modal  .date')
          const member = document.querySelector('.modal .member')
          num.innerText = bbs[i].no
          title.innerText = bbs[i].title
          date.innerText = bbs[i].regdate
          member.innerText = bbs[i].member
        }
      }    
    })
  }
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
const writeBtn = document.querySelector(".writeBtn");
const input = document.querySelector("input");

writeBtn.addEventListener("click", () => {
  // let no = bbs.length !== 0 ? Number(bbs[bbs.length - 1].no) + 1 : 1
  const member = "test41231312";
  const txtarea = document.querySelector('#modi-txtarea')
  
  // 배열 마지막 요소의  no에 + 1
  fetch(`http://localhost:5000/bbs`, {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({ title: input.value, member: member,msg:txtarea.value }),
  })
    .then((res) => (res.json()))
    .then((res) => {
      bbs.push({
        no: res.no,
        title: res.title,
        date: res.date,
        member: res.member,
        msg: res.msg
      });
      list();

    })
    .catch((err) => alert(err));

  console.log(bbs);
});
