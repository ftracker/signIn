import React, {useState, useRef} from 'react'


const LoginForm = ({handleChange, formValues, doLogin, validated, formRef}) =>

    <div className="form-container">
        <form noValidate onSubmit={doLogin} className={validated ? 'was-validated' : ''} ref={formRef}>
            <div className="form-group">
                <input className="form-control" value={formValues.email}
                       onChange={handleChange} type="email" name="email" placeholder="Email" required />
                <div className="invalid-feedback">
                    Please enter a valid email.
                </div>
            </div>

            <div className="form-group">
                <input className="form-control" value={formValues.password}
                       onChange={handleChange} type="password" name="password" placeholder="Password" required />
                <div className="invalid-feedback">
                    Please enter your password.
                </div>
            </div>

            <div className="form-group">
                <button type="submit" className="btn btn-light">
                    Login
                </button>
            </div>
        </form>
    </div>


export default () => {

    const [validated, setValidated] = useState(false);
    const [formValues, setValues] = useState({email: "", password: ""});
    const formRef = useRef(null);

    function handleChange(e) {
        console.log('On Handle Change');
        setValues({...formValues, [e.target.name]: e.target.value});
    }

    function doLogin(e) {
        e.preventDefault();
        console.log('On DoLogin');
        setValidated(true);
        if (formRef.current.checkValidity()) {
            console.log('Enviando form', formValues);
            const data = new URLSearchParams();
            data.append('email', formValues.email);
            data.append('password', formValues.password);
            fetch('http://127.0.0.1:8081/login', {
                method: 'POST',
                // mode: 'cors',
                body: data
            })
        }
    }

    return (
        <LoginForm formRef={formRef}
                   validated={validated}
                   doLogin={doLogin}
                   formValues={formValues}
                   handleChange={handleChange} />
    );
}