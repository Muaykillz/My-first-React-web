import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ShowProfile from "./components/ShowProfile";
import NavBar from "./components/NavBar";
import DisplayImages from "./components/DisplayImages";
import ShowFullImage from "./components/ShowFullImage";

function App() {
  const url = window.location;
  let decode_url = decodeURIComponent(url);
  let url_obj = new URL(decode_url);
  let params = new URLSearchParams(url_obj.search);
  const groupId = params.get("gid");
  const img_col = params.get("img_col");

  // console.log(groupId);
  // console.log(img_type);
  return (
    <>
      <ShowFullImage/>
      <NavBar />
      <DisplayImages groupId={groupId} img_col={img_col}/>
    </>
  );
}

export default App;
