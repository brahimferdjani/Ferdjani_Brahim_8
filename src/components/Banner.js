import React from "react";
function Banner(props) {
  return (
    <div className={props.className}>
      <p>{props.text}</p>
    </div>
  );
}

export default Banner;
