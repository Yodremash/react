import React from 'react';

const Info = ({ text }) => !text
    ? null
    : <div className="Info">
        {text}
    </div>

export default Info;