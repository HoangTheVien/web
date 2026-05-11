
fetch("menu.html")
.then(res => res.text())
.then(data => {
    document.getElementById("menu").innerHTML = data;
});



fetch("footer.html")
.then(res => res.text())
.then(data => {
    document.getElementById("footer").innerHTML = data;
});





function tinhTienNuoc() {
  let ten = document.getElementById("ten").value;
  let cu = parseFloat(document.getElementById("cu").value);
  let moi = parseFloat(document.getElementById("moi").value);

  let soNuoc = moi - cu;
  let tien = soNuoc * 5000;

  let vatNuoc = tien * 0.08;   
  let tongNuoc = tien + vatNuoc;   

  localStorage.setItem("ten", ten);
  localStorage.setItem("cu", cu);
  localStorage.setItem("moi", moi);
  localStorage.setItem("soNuoc", soNuoc);
  localStorage.setItem("tien", tien);
  localStorage.setItem("vatNuoc", vatNuoc);
  localStorage.setItem("tongNuoc", tongNuoc);

  window.open("water_bill.html", "_blank");
}


function tinhTienDien() {
  let ten = document.getElementById("ten").value;
  let cu = parseFloat(document.getElementById("cu").value);
  let moi = parseFloat(document.getElementById("moi").value);

  let soDien = moi - cu;
  let tienDien = soDien * 3000;

  let vatDien = tienDien * 0.08;     
  let tongDien = tienDien + vatDien;   

  localStorage.setItem("tenDien", ten);
  localStorage.setItem("cuDien", cu);
  localStorage.setItem("moiDien", moi);
  localStorage.setItem("soDien", soDien);
  localStorage.setItem("tienDien", tienDien);
  localStorage.setItem("vatDien", vatDien);
  localStorage.setItem("tongDien", tongDien);

  window.open("electric_bill.html", "_blank");
  // window.location.href = "electric_bill.html";
}



window.onload = function () {


  if (document.getElementById("soNuoc")) {
    document.getElementById("ten").innerText = localStorage.getItem("ten");
    document.getElementById("cu").innerText = localStorage.getItem("cu");
    document.getElementById("moi").innerText = localStorage.getItem("moi");
    document.getElementById("soNuoc").innerText = localStorage.getItem("soNuoc");
    document.getElementById("tien").innerText = localStorage.getItem("tien");
    document.getElementById("vatNuoc").innerText = localStorage.getItem("vatNuoc");
    document.getElementById("tongNuoc").innerText = localStorage.getItem("tongNuoc");

    document.getElementById("tien").innerText =
    Number(localStorage.getItem("tien")).toLocaleString("vi-VN");

    document.getElementById("vatNuoc").innerText =
    Number(localStorage.getItem("vatNuoc")).toLocaleString("vi-VN");

    document.getElementById("tongNuoc").innerText =
    Number(localStorage.getItem("tongNuoc")).toLocaleString("vi-VN");
  }


  if (document.getElementById("soDien")) {
    document.getElementById("ten").innerText = localStorage.getItem("tenDien");
    document.getElementById("cu").innerText = localStorage.getItem("cuDien");
    document.getElementById("moi").innerText = localStorage.getItem("moiDien");
    document.getElementById("soDien").innerText = localStorage.getItem("soDien");
    document.getElementById("tienDien").innerText = localStorage.getItem("tienDien");
    document.getElementById("vatDien").innerText = localStorage.getItem("vatDien");
    document.getElementById("tongDien").innerText = localStorage.getItem("tongDien");
    
    document.getElementById("tienDien").innerText =
    Number(localStorage.getItem("tienDien")).toLocaleString("vi-VN");

    document.getElementById("vatDien").innerText =
    Number(localStorage.getItem("vatDien")).toLocaleString("vi-VN");


    document.getElementById("tongDien").innerText =
    Number(localStorage.getItem("tongDien")).toLocaleString("vi-VN");
  }

let today = new Date();

let ngay = String(today.getDate()).padStart(2, "0");
let thang = String(today.getMonth() + 1).padStart(2, "0");
let nam = today.getFullYear();

  let formatted_1 ="Ngày " + ngay + " Tháng " + thang + " Năm " + nam;
  let formatted_2 =  ngay + " / " + thang + " / " + nam;

  document.getElementById("ngay_1").innerText = formatted_1;
  document.getElementById("ngay_2").innerText = formatted_2;
};

function inHoaDon() {
  window.print();
}
function inHoaDon() {
  window.print();
}