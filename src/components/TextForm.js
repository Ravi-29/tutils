import React, {useState} from 'react'



export default function TextForm(props) {
    const handelUpClick = () => {
       // console.log("Uppercase was click" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handelLoClick = () => {
      // console.log("Uppercase was click" + text);
       let newText = text.toLowerCase();
       setText(newText)
   }
    const handelOnChange = (event) => {
       // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter text here");
  return (
    <>
    <div className="container">
        <h1> {props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handelOnChange} id="myBox" rows="8"></textarea>
          </div>
          <button className='btn btn-primary mx-2'onClick={handelUpClick} on>Convert to Upper Case</button>
          <button className='btn btn-primary mx-2'onClick={handelLoClick} on>Convert to lower Case</button>

        
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters </p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
