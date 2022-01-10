const idval = document.querySelector("#userId");
const pwval = document.querySelector("#userPw");
document.querySelector("#loginBtn").addEventListener("click", () => {
  if (idval.value == "") {
    alert("아이디를 입력하세요");
  } else if (pwval.value == "") {
    alert("비밀번호 입력하세요");
  } else {
    fetch(`http://localhost:5000/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ userId: idval.value, userPw: pwval.value }),
    })
    .then((res)=> res.json())
    .then((res) => {
        console.log(res);
        if (res.status == "success") { alert("성공") }
        else { alert('fail') }    
    });
    
  }
});
