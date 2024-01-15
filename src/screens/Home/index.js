import React from "react";
import Top from "./Components/Top";
import Producers from "./Components/Producers";

export default function Home() {
  return (
    <>
      <Producers top={Top} />
    </>
  );
}
