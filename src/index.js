import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import "./index.css";

ReactDOM.render(<h1>This is my first React app!!!!</h1>, document.getElementById("root"));
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);