import React from 'react';

const Info = ({ text }) => !text
    ? null
    : <div className="message">
        {text}
    </div>

export default Info;