//bài 1
function reverse(str) {
  var newReverse = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newReverse += str[i];
  }
  return newReverse;
}
reverse("FontEnd");
console.log(reverse("FontEnd"));
//bài 2
function upToCase(str) {
  var a = str.toLowerCase().split(" ");
  var result = a.map(function (v) {
    return v.replace(v.charAt(0), v.charAt(0).toUpperCase());
  });
  return result.join(" ");
}
upToCase("hello các bạn nhỏ");
console.log(upToCase("hello các bạn nhỏ"));
//bài 3
let arr = [1, 2, 3, 3, 4, 5, 4, 4, 4, 5, 5, 6, 6];
let arr3 = arr.reduce(function (ab, element) {
  if (ab.indexOf(element) === -1) {
    ab.push(element);
  }
  return ab;
}, []);
console.log(arr3);
//bài 4
function sortArr(arr) {
  let flag = false;
  while (!flag) {
    flag = true;
    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i - 1] > arr[i]) {
        flag = false;
        let tmp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = tmp;
      }
    }
  }

  return arr;
}
var num = [5, 2, 3, 4, 1];
sortArr(num);
console.log(num);
//bài 5
let listNv = ["Nguyễn Văn A", "Nguyễn Văn B", "Nguyễn Văn C"];
function addNv() {
  let nameNv = document.getElementById("name").value;
  listNv.push(nameNv);
  renderNhanVien();
}
function renderNv() {
  let result = `
      <tr>
        <td>Tên Nhân Viên</td>
      </tr>
  `;
  for (let i = 0; i < listNv.length; i++) {
    result += `
      <tr>
          <td>
              ${listNv[i]}
          </td>
          <td><button onclick="editNhanVien(${i})">Edit</button></td>
          <td><button onclick="deleteNhanVien(${i})">Delete</button></td>
      </tr>
      `;
  }
  document.getElementById("tableNv").innerHTML = result;
}
renderNv();
function deleteNhanVien(index) {
  listNv.splice(index, 1);
  renderNv();
}
function editNhanVien(index) {
  console.log(12312313);
  let valueEdit = prompt(`Nhập tên bạn muốn đổi`);
  listNv.splice(index, 1, valueEdit);
  renderNv();
}
