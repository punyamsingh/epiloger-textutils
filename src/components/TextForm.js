import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase!", "success")
    }

    const handleLowClick = () => {
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
        let max = 0;
        let maxword;
        for (let i = 0; i < words.length; i++) {
            a[words[i]] = (a[words[i]] || 0) + 1;
        }
        for (let [key, val] of Object.entries(a)) {
            if (val > max) {
                max = val;
                maxword = key;
            }
        }
        setText(maxword + " used " + max + " times.");
        props.showAlert("Action Performed!", "success")
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("text copied to clipboard", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/\s+/);
        setText(newText.join(" "));
        props.showAlert("ExtraSpaces Removed..", "success");
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className="container my-2" >
                <h3 style={{ color: props.mode === 'light' ? '#000000' : '#ffffff' }}>
                    {props.heading}
                </h3>
                <div className="mb-2">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'light' ? 'dark' : 'light' }} onChange={handleOnChange} id="myBox" rows="8">
                    </textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Captilize text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Lowerize text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleMostFreqWord} >Most Freq. Word</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} >Slice extra spces</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className='container my-2'>
                <h5 style={{ color: props.mode === 'light' ? '#000000' : '#ffffff' }}>
                    Your text summary
                </h5>
                <p style={{ color: props.mode === 'light' ? '#07091a' : '#7bf87f' }}>
                    {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words, {text.length} chars
                    <br />
                    {0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} min. to read
                </p>
                <h5 style={{ color: props.mode === 'light' ? '#000000' : '#ffffff' }}>
                    Preview
                </h5>
                <p style={{ color: props.mode === 'light' ? '#07091a' : '#7bf87f' }}>
                    {text.length > 0 ? text : "Nothing to preview"}
                </p>
            </div>
        </>
    )
}
