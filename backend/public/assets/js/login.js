
const idval = document.querySelector("#userId");
const pwval = document.querySelector("#userPw");
document.querySelector("#loginBtn").addEventListener("click", () => {
  if (idval.value == "") {
    alert("아이디를 입력하세요");
  } else if (pwval.value == "") {
    alert("비밀번호 입력하세요");
  } else {
      loginCheck()
  }
});
async function loginCheck() {
  try {
    const url = "http://localhost:5000/login"    
    const fetchRes = await axios.post(url,{userId: idval.value, userPw: pwval.value })
    /* fetch(`http://localhost:5000/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ userId: idval.value, userPw: pwval.value }), */
    // });
    // const res = await fetchRes.json();
    console.log(fetchRes.data);
    const res = fetchRes.data
    if (res.status == "success") {
      alert("성공");
      location.href = "/bbsList.html";
    } else {
      alert("fail");
    }
  } catch (err) {
    console.log(err);
    console.error(err);
  }
}

// async function loginCheck2() {
//   axios.post('url', {})
//     .then(res => res.data)
// }

// 호이스팅 //화살표 함수는 호출할떄 위아래 순서가 중요함 , 일반함수는 순서 상관없이 호출가능
// loginCheck2 async() => {}

