// const { default: axios } = require("axios")

const domain = "http://localhost:5000";
const getApi = () => fetch(domain + "/bbs");
const delApi = (no) =>
  fetch(domain + "/bbs", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ no: no }),
  });
const modiApi = (no, title, msg) =>
  fetch(`${domain}/bbs`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({
      no: no,
      title: title,
      msg: msg,
    }),
  });
const wrtApi = (title, member, msg) =>
  fetch(`${domain}/bbs`, {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({
      title: title,
      member: member,
      msg: msg,
    }),
  });
// moment.tz.setDefault("Asia/Seoul");
// var date = moment().format("YYYY-MM-DD HH:mm:ss");
// const svtimeApi = async () => {
//   try {
//     const res = await axios.get(domain + "/serverTime");
//     // console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// };

// function nowTime() {
//   var dateM = '<%=date%>'
//   var clock= document.querySelector('#clock')
//   clock.innerHTML =dateM
// }
// setInterval(nowTime, 1000);
