import React from "react";
import { useState } from "react";


const room_name = process.env.REACT_APP_ROOM_NAME;

export default function Input ({drone, username, color}) {

    const [inputValue, setInputValue] = useState('');

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault()
        drone.publish({
            room: room_name,
            message: {
                text: inputValue,
                username,
                color
            }
          });        
        setInputValue('');
    }

    
   
    return(
        <div className="input-bottom">
            <form className="form" onSubmit={handleSubmit}>
                <input value={inputValue} className="input"name="text" type="text" placeholder="Please enter your message and hit send." onChange={handleChange}/>
                <button type="submit" className="button">Send</button>
            </form>
        </div>
    );
}