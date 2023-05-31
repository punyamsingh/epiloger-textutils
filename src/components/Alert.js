import React from 'react'

function Alert(props) {
    return (
        <div className="container my-2" style={{height: '50px', width: '500px'}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <center><strong>{props.alert.type}</strong>: {props.alert.msg}</center>
            </div>}
        </div>
    )
}

export default Alert
