const frm = document.querySelector("#frm");
const idchkBtn = document.querySelector("#idCheck");
frm.addEventListener("submit", (e) => {
  console.log(frm.id);
  e.preventDefault(); // form에 있는 새로고침 기본기능을 막아줌 이걸넣으면
  if (frm.id.value == "") {
    alert("아이디를 입력하세요");
  } else if (frm.pw.value == "") {
    alert("비밀번호 입력하세요");
  } else if (frm.name.value == "") {
    alert("사용자를 입력하세요");
  } else if (
    frm.id.value !== "" ||
    frm.pw.value !== "" ||
    frm.name.value !== ""
  ) {
    signCheck({
      userId: frm.id.value,
      userPw: frm.pw.value,
      userName: frm.name.value,
    });
  }
});
async function signCheck(data) {
  try {
    const url = "http://localhost:5000/signUp";
    const fetchRes = await axios.post(url, data);
    //  fetch(`http://localhost:5000/signUp`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    //   body: JSON.stringify(data),
    // });
    // const fetchRes2 = await fetchRes.json();
    console.log(fetchRes.data);
    const res = fetchRes.data;
    if (res.status == "Sign success") {
      alert("등록성공");
      location.href = "/";
    } else if (res.status == "failId") {
      alert("아이디가 중복되었습니다 중복확인하세요");
    } // await alert("test");
    // await alert("ddd");
  } catch (err) {
    console.log(err);
    console.error(err);
  }
}

const idchk = document.querySelector("#idCheck");
const userId = document.querySelector("#userId");
idchk.addEventListener("click", async () => {
  if (userId.value == "") {
    return alert("아이디를 입력하세요");
  }
  const id = document.querySelector("#userId");
  try {
    const url = "http://localhost:5000/idCheck";
    const axiosPost = await axios.post(url, { userId: id.value });
    const res = axiosPost.data;
    console.log(axiosPost);
    console.log(res);
    if (res.status == "success") {
      alert("아이디 사용가능");
    } else if (res.status == "fail") {
      return alert("아이디 사용불가");
    }
  } catch (err) {
    console.log(err);
  }
});

// async function AxiosIdChk() {
//   const id = document.querySelector("#userId");
//   try {
//     const url = "http://localhost:5000/idCheck";
//     const axiosPost = await axios.post(url, { userId: id.value });
//     const res = axiosPost.data;
//     console.log(axiosPost);
//     console.log(res);
//     if (res.status == "success") {
//       alert("아이디 사용가능");
//     } else if (res.status == "fail") {
//       return alert("아이디 사용불가");
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }
