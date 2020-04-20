import React from "react";

export default function Greeting(props) {
  console.log('greeting',props)
  let message = (props.body.token)
  // ? `hi`
    ? `Hi, ${props.body.token.email}!`
    : "You're not logged in.";

  return <span>{message}</span>;
}
