import React from "react";

export default function LogInOut(props) {
    console.log('loginout',props)

  let message = props.body.token ? "Sign out" : "Sign in";

  let path = props.body.token ? "/logout" : "/login";

  return <a href={props.uri + path}>{message}</a>;
}
