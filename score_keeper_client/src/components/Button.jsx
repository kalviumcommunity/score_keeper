import React from "react";
import "../App.css"

export default function Button(props) {
  let { action, title } = props;
  return <button className='undo' onClick={action}>{title}</button>;
}