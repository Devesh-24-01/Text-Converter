import React, { useState } from 'react'

export default function TextForm(props) {
    const HandleUpClick = ()=>{
        setText(text.toUpperCase())
    }
    const HandleLoClick = ()=>{
        setText(text.toLowerCase())
    }
    const HandleClrClick = ()=>{
        setText("")
    }
    const HandleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const HandleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');   
    
    return (
    <>
        <div className="container mx-8 my-3"style={{color:props.mode==='dark'?'white':'#27272a'}} >
            <h2>{props.Heading}</h2>
            <div classt="mb-3">
            <textarea classt="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#27272a':'white',color:props.mode==='dark'?'white':'#27272a'}} onChange={HandleOnChange} id="myBox" rows="8" cols="80"></textarea>
            </div>
            <button className="btn btn-primary " onClick={HandleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={HandleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary " onClick={HandleClrClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={HandleCopy}>Copy Text</button>
            <hr/>
            <h3 className="container"><u>Text Summary</u></h3>
            <p className="container"><strong>Words</strong> - {text.split(" ").length} & <strong>Characters</strong> - {text.length}</p>
            <h3 className="container"><u>Preview</u></h3>
            <p className="container">{text.length>0?text:"Enter something in Text Box to Preview"}</p>
        </div>
    </>
    )
}
