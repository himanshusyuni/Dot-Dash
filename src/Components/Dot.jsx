import React from 'react';

function Dot({ x, y, ind }) {
    const colors = ["bg-blue-500", "bg-red-500", "bg-green-500", "bg-yellow-500", "bg-purple-500", "bg-sky-500"];

    const colorIndex = ind % colors.length;
    const dotColorClass = colors[colorIndex];
    return (
        <div
            className={`size-8 rounded-full absolute blur-sm ${dotColorClass}  z-0`}
            style={{
                top: y,
                left: x,
            }}
        >
        </div>
    );
}

export default Dot;
