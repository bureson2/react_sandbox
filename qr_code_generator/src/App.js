import React, { useState } from 'react';
import './App.css';
import MyQRCode from "./MyQRCode";

function App() {
    const [text, setText] = useState('');

    return (
        <div className="App">
            <h1>QR code generator</h1>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write text for QR code"
            />
            <MyQRCode value={text} /> {}
        </div>
    );
}

export default App;
