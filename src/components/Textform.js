import React, { useState } from "react";


export default function Textform(props) {

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    if(text.length>0){
    props.showAlert("Text copied.", "success");
  }
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    if(text.length>0){
    props.showAlert("Extra spaces removed.", "success");
  }}

  const handleUpClick = () => {
    let netText = text.toUpperCase();
    setText(netText);
    if(text.length>0){
    props.showAlert("Text has been changed to UPPERCASE.", "success");

  }}

  const handleLoClick = () => {
    let netText = text.toLowerCase();
    setText(netText);
    if(text.length>0){
    props.showAlert("Text has been changed to lowercase.", "success");

  }}

  const handleClearText = () => {
    setText("");
    if(text.length>0){
    props.showAlert("Text has been cleared.", "success")
  }}

  const handleOnChange = (event) => {
    setText(event.target.value);

  }

  const [text, setText] = useState('');
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className={`form-control bg-${props.theme}`}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            value={text}
            style={{ backgroundColor: props.theme === 'dark' ? 'grey' : 'white', color: props.theme === 'dark' ? 'white' : '#042743' }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1 button-size" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1 my-1 button-size" onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1 my-1 button-size" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary mx-1 my-1 button-size" onClick={handleExtraSpaces}>Remove exrta spaces</button>
        <button className="btn btn-primary mx-1 my-1 button-size" onClick={handleClearText}>Clear text</button>
      </div>

      <div className="container my-3">
        <h1>Your text summart</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>You need {text.split(/\s+/).filter((element)=>{return element.length!==0}).length * 0.008} minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
      </div>
    </>
  );
}
