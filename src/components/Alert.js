import React from "react";

export default function Alert(props) {

  const capitalize = (word) => {
    word = word.toLowerCase()
    return word.charAt(0).toUpperCase() + word.slice(1)
}
  return (
     props.alert && <div className={`alert alert-${props.alert.ty} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.alert.ty)}! </strong> {props.alert.msg}
</div>
  );
}