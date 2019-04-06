import React, {useState, useRef} from 'react'

function validateLogin(values) {
    let errors = {};
    if (!values.email) {
        errors.email = 'Email is Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Password is Required'
    }
    return errors;
}

function isValid(errors) {
    return !errors.email && !errors.password;
}

export default () => {

    const [formValues, setValues] = useState({email: "", password: ""});
    const [touched, setTouched] = useState({});
    const [errors, setErrors] = useState({});
    const [validated, setValidated] = useState(false);
    const formRef = useRef(null);

    function handleChange(e) {
        console.log('On Handle Change');
        setValues({...formValues, [e.target.name]: e.target.value});
    }

    function handleBlur(e) {
        console.log('On Handle blur');
        setErrors(validateLogin(formValues));
        setTouched({...touched, [e.target.name]: true})
    }

    function doLogin(e) {
        e.preventDefault();
        console.log('On DoLogin');
        const formErrors = validateLogin(formValues);
        setTouched({email: true, password: true});
        setValidated(true);
        setErrors(validateLogin(formValues));
        const valid = formRef.current.checkValidity();
        // if (isValid(formErrors)) {
        //     console.log('Enviando form', formValues)
        // }
        if (valid) {
            console.log('Enviando form', formValues)
        }
    }

    return (
        <LoginForm formRef={formRef} validated={validated} handleChange={handleChange} formValues={formValues} doLogin={doLogin} handleBlur={handleBlur} />
    );
}


const LoginForm = ({handleChange, handleBlur, formValues, doLogin, touched, errors, validated, formRef}) =>

    <div className="form-container">
        <form noValidate onSubmit={doLogin} className={validated ? 'was-validated' : ''} ref={formRef}>
            <div className="form-group">
                <input className="form-control" onChange={handleChange} onBlur={handleBlur} value={formValues.email} type="email"
                       name="email" placeholder="Email" required />
                <div className="invalid-feedback">
                    Please choose a username.
                </div>
            </div>

            <div className="form-group">
                <input className="form-control" onChange={handleChange} onBlur={handleBlur} value={formValues.password}
                       type="password" name="password" placeholder="Password" required />
            </div>

            <div className="form-group">
                <button type="submit" className="btn btn-light">
                    Login
                </button>
            </div>
        </form>
    </div>;