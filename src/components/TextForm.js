import React, {useState} from 'react'


export default function TexthtmlForm(props) {
    const clear=()=>{
      let n=''
      setText(n);
      props.showAlert("Text has been cleared","success")
    }
    const handeluP=()=>{
       // console.log("UpperCase Was Clicked!!");
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Text Converted to Uppercase","success")
    }
    const handelLw=()=>{
        // console.log("UpperCase Was Clicked!!");
         let newText=text.toLowerCase();
         setText(newText)
         props.showAlert("Text Converted to Lowercase","success")
     }
    const handleOnChange=(event)=>{
        //console.log("Handle on Change");
        setText(event.target.value);
        

    }
    const copy=()=>{
       var text=document.getElementById("myBox")
       text.select();
       navigator.clipboard.writeText(text.value);
       props.showAlert("Text Coppied to clipboard","success")

    }
    const extraSpaces=() =>{
        let newT=text.split(/[ ]+/);
        setText(newT.join(" "))
        props.showAlert("ExtraSpaces Removed","success")
    }
    const [text,setText]=useState('');
    return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
    <div className="mb-3">
    
       
       <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'
       }}  id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handeluP}>Convert to UpperCase</button> 
    <button className="btn btn-primary mx-1" onClick={handelLw}>Convert to LowerCase</button>
    <button className="btn btn-primary mx-1" onClick={copy}>CopyText</button>      
    <button className="btn btn-primary mx-1" onClick={extraSpaces}>Handle Spaces</button>      
    <button className="btn btn-primary mx-1" onClick={clear}>ClearText</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <p>{text.split(" ").length} words   {text.length} characters</p>
        <p>{0.008*text.split(" ").length}</p>
     <h1>Preview</h1>
     <p>{text.length>0?text:"Enter Text to preview"}</p>
    </div>
    </>
  )
}
