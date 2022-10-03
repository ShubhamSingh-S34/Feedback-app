import React from 'react'
import PropTypes from 'prop-types'
function Card({ children, reverse }) {
    // return (
    //     <div className={`card ${reverse ? 'reverse' : ''}`}>
    //         {children}
    //     </div>
    // )
    const reverseStyle = {
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
        color: reverse ? '#fff' : '#000'
    }
    return (
        <div className="card" style={reverseStyle}>{children}</div>
    )
}


Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}

Card.defaultProps = {
    reverse: false,
}
export default Card