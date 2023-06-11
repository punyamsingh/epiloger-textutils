import React from 'react'

function Alert(props) {
    return (
        <div className="container mb-3 mt-2" style={{height: '10px', width: '400px'}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <center><strong>{props.alert.type}</strong>: {props.alert.msg}</center>
            </div>}
        </div>
    )
}

export default Alert
