import React, { useState } from "react";

function ShowFullImage() {

  function closeFullImage() {
    const showImgBox = document.querySelector('.show-img-box');
    showImgBox.style.visibility = "hidden";
  }

  return (
    <>
      <div className="show-img-box">
        <div className="img-box">
          <i className="ri-close-fill" onClick={closeFullImage}></i>
          <img/>
        </div>
      </div>
    </>
  );
}

export default ShowFullImage;
