import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was clicked\n" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase!", "success")
    }

    const handleLowClick = () => {
        // console.log("Lowercase was clicked\n" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase!", "success")
    }

    const handleClearClick = () => {
        setText("");
        props.showAlert("cleared text!", "success")
    }



    const handleMostFreqWord = () => {
        let words = text.split(" ");
        let a = {}
        for (let i = 0; i < words.length; i++) {
            a[words[i]] = (a[words[i]] || 0) + 1;
        }
        let max = 0;
        let maxword;
        for (let [key, val] of Object.entries(a)) {
            if (val > max) {
                max = val;
                maxword = key;
            }
            // console.log(key, val);
        }
        console.log(maxword);
        setText(maxword + " used " + max + " times.");
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("text copied to clipboard", "success")
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className="container my-2" >
                <h3 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'light' ? 'dark' : 'light' }} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleMostFreqWord} >Most Freq. Word</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy} >Copy Text</button>
            </div>
            <div className='container my-2'>
                <h3 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Your text summary</h3>
                <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{text.split(" ").length} words & {text.length} chars</p>
                <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{0.008 * text.split(" ").length} Minutes to read</p>
                <h4 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Preview</h4>
                <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{text.length > 0 ? text : "Enter something to preview"}</p>
            </div>
        </>
    )
}
