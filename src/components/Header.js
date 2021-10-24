import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
const Header = (props) => {
   const {title,showTask,buttonText} = props;
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button title={buttonText ? 'Close' : 'Add Task' } color={buttonText ? 'red':'green'} onClick={showTask}/>
        </header>
    )
}
export default Header

Header.defaultProps = {
    title: "Task Tracker"
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}

