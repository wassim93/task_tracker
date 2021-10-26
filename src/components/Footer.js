import React from 'react';
import {Link} from "react-router-dom";

function Footer(props) {
    return (
        <footer>
            <p>Copyright&copy;2021</p>
            <Link to="/about">About</Link>
        </footer>
    );
}

export default Footer;