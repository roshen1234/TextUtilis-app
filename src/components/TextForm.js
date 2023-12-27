import React,{useState} from 'react'


export default function TextForm(props) {
  const handleUpClick =() =>{
    // console.log("clicked the uppercase button"+text)
    let newText=text.toUpperCase();
    setState(newText)
    props.showAlert("converted text to uppercase","success")
  }
  const clear =() =>{
    
    setState("")
    props.showAlert("cleared text","success")
    
  }
  const handleLoClick =() =>{
    // console.log("clicked the uppercase button"+text)
    let newText=text.toLowerCase();
    setState(newText)
    props.showAlert("converted text to lowercase","success")
    
  }
  const handleOnChange =(event) =>{
    // console.log("On change")
    setState(event.target.value)
  }
  const handleCopy=()=>{
   navigator.clipboard.writeText(text)
   props.showAlert("Copied To clipboard","success")
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("speaking the text written down","success")
  }
  
    const[text,setState]=useState("enter the text her2")

//   text="newtext" wrong way to change text value
//   setState("newstate") correct way to change text value

    return (
      <>
    <div className='container' style={{color:props.mode==="light"?"#042743":"white"}}>
      <h1>{props.heading}</h1>   
      <div class="mb-3">
      <textarea class="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10" style={{backgroundColor:props.mode==="light"?"white":"grey",color:props.mode==="light"?"black":"white"}}></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpClick}>to uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleLoClick}>to lower case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={clear}>clear</button>
      <button disabled={text.length===0} onClick={speak} className="btn btn-primary mx-2">Speak</button>
      <button disabled={text.length===0} className="btn btn-primary" onClick={handleCopy}>copy</button>
    </div>
     
     <div className='container' style={{color:props.mode==="light"?"#042743":"white"}}>
      <h1>your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} word and {text.length} charactor</p>
      {/* to read 125 words it take 1 min so to read 1 word it takes (1/125)=0.008 */}
      <p>{0.008*text.split(" ").length} minutes to read</p>
      <h2>preview</h2>
      <p>{text.length>0?text:"enter something to preview here"}</p>

     </div>
    
     </>
  )
}
