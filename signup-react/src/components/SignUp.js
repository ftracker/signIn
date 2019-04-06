import React from 'react'

export default () => {

    function doRegister(e) {
        e.preventDefault();
    }

    return (<RegisterForm doRegister={doRegister} />);
}

const RegisterForm = ({doRegister}) =>
    <div className="form-container">
        <form className="was-validated" onSubmit={doRegister} noValidate >
            <div className="form-group">
                <input className="form-control" type="text" name="name" placeholder="Name" required />
            </div>
            <div className="form-group">
                <input className="form-control" type="email" name="email" placeholder="Email" required />
            </div>

            <div className="form-group">
                <input className="form-control" type="password" name="pass" placeholder="Password" required />
            </div>

            <div className="form-group">
                <input className="form-control" type="password" name="pass2" placeholder="Repeat Password" required />
            </div>

            <div>
                <button type="submit" className="btn btn-light">
                    Sign Up
                </button>
            </div>
        </form>
    </div>;