import React from 'react';
import {Link} from "react-router-dom";

function About(props) {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            <Link to="/">Go back</Link>
        </div>
    );
}

export default About;