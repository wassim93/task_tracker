import PropTypes from "prop-types";
import React from "react";
const Button = ({title,color,onClick}) => {
    return(
        <button className='btn' onClick={onClick} style={{backgroundColor:color}}>{title}</button>
    )
}



export default Button

Button.defaultProps = {
    color: 'steelBlue',
}

Button.propTypes = {
    title: PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func
}