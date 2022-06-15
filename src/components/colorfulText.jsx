import React from "react";

// propsを引き取る
const ColorfulMessage = (props) => {
  // console.log(props); // {color: "blue", message: "お元気ですか?"}
  // const {color, message} = props
  // 分割代入できる
  const fonrStyle = {
    color: props.color,
    fonrSize: "18px"
  };

  return (
    <>
      <p style={fonrStyle}>{props.message}</p>
      {/* タグの間でうけとった　ものはchildrenとして受け取れる */}
      <p>{props.children}</p>
    </>
  );
};

export default ColorfulMessage;
