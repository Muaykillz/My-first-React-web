import React from "react";

function DisplayImages({groupId, img_col}) {

  console.log(groupId);
  console.log(img_col);

  showAllImages(groupId, img_col);

  return (
    <>
      <div className="container">
        <div className="display-img">
        </div>
      </div>
    </>
  );
}

function showAllImages(groupId, img_col) {
  const sheetID = "113P1-YXO5GmPbV9b3qNrrlLF3_wxHMWr5_JpaJ5go6c";
  const sheet_Title = "rent-info";
  let sheet_range = "A2:A200";
  let idx_row;
  let full_URL = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?sheet=${sheet_Title}&range=${sheet_range}`;

  fetch(full_URL)
    .then((res) => res.text())
    .then((rep) => {
      let data = JSON.parse(rep.substr(47).slice(0, -2));
      let all_data = data.table.rows;
      let all_group = [];
      for (let row of all_data) {
        all_group.push(row.c[0].v);
      }

      idx_row = all_group.indexOf(groupId);
    })
    .then(() => {
      sheet_range = `${img_col}${idx_row + 2}:${img_col}${idx_row + 2}`;
      full_URL = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?sheet=${sheet_Title}&range=${sheet_range}`;
      if (idx_row != -1) {
        fetch(full_URL)
          .then((res) => res.text())
          .then((rep) => {
            let data = JSON.parse(rep.substr(47).slice(0, -2));
            let all_data = data.table.rows;
            let img_urls = all_data[0].c[0].v;
            showImage(img_urls);
          });
      } else {
        alert("ไม่พบข้อมูลที่บันทึกไว้");
        // return null;
      }
    });
}
function showImage(img_urls) {
  console.log(img_urls);
  let imgList = img_urls.split("\n");

  const display_img = document.getElementsByClassName("display-img")[0];
  for (const url of imgList){
    const fileName = url.substring(url.lastIndexOf("/") + 1);

    const item = document.createElement("div");
    item.className = "item";
    item.addEventListener("click", handleClick);

    const img_box = document.createElement("div");
    img_box.className = "img-box";
    const img = document.createElement("img");
    img.src = url;
    img.alt = url;
    img_box.appendChild(img);

    const file_name = document.createElement("div");
    file_name.className = "file-name";
    const p = document.createElement("p");
    p.innerText = fileName;
    file_name.appendChild(p);

    item.appendChild(img_box);
    item.appendChild(file_name);

    display_img.appendChild(item);
  }
  // <div className="item" onClick={handleClick}>
  //   <div className="img-box">
  //     <img src="Junimo.png" alt="Junimo.png" />
  //   </div>
  //   <div className="file-name">
  //     <p>Junimo.png</p>
  //   </div>
  // </div>;
}
function handleClick(event) {
  const target = event.currentTarget;
  const img_src = target.children[0].children[0].src;
  const body = document.getElementById("root");
  const show_img_box = body.getElementsByClassName("show-img-box")[0];
  const img_box = show_img_box.getElementsByClassName("img-box")[0];
  const img = img_box.children[1];
  if (img_src) {
    img.src = img_src;
    show_img_box.style.visibility = "visible";
  }
}

export default DisplayImages;
