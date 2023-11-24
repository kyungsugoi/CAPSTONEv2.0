import React from "react";

const LoginPopup = props => {
    return (
        <div className="popup-box-login">
            <div className="box-login">
                <button className="btn-close-login"onClick={props.handleClose}>X</button>
                {props.content}
            </div>
        </div>
    )
}

export default LoginPopup;
