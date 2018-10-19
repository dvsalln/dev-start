import React from 'react';

import "./Backdrop.css";

const Backdrop = props => (
    <div className="backdrop" onCLick={props.click} />
);

export default Backdrop;