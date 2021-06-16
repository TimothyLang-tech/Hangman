import React from "react";


//horizontal line
const ColoredLine = ({ color }) => (
    <hr
        style={{
            width: 600,
            color: color,
            backgroundColor: color,
            height: 0.2,
            opacity: 1
        }}
    />
);

export default ColoredLine;