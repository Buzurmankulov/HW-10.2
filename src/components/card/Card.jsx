import React, { useEffect, useRef } from "react";
import { CardStyle } from "../Styles";

const Card = () => {
  const something = useRef();
  const colors = ["red", "green", "blue"];
  useEffect(() => {
    const timer = setInterval(() => {
      something.current.style.background =
        colors[Math.round(Math.random() * colors.length)];
    }, 1000);
    return () => {
      clearImmediate(timer);
    };
  }, [colors]);
  return (
    <div>
      <CardStyle ref={something}></CardStyle>
    </div>
  );
};
export default Card;
