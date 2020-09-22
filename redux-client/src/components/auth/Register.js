import React, {Fragment, useState} from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {setAlert} from "../../actions/alert";
import {register} from "../../actions/auth";

const Register = ({setAlert, register}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const {name, email, password, password2} = formData;
    const onChange = e =>
        setFormData({...formData, [e.target.name]: e.target.value})

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('Passwords do not match', 'danger')
        } else {
            register({name, email, password})
        }
    }
    return (
        <Fragment>
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <form className='form' onSubmit={e => onSubmit(e)}>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        placeholder='Name'
                                        name='name'
                                        value={name}
                                        onChange={e => onChange(e)}
                                    />
                                </div>
                                <div className='form-group'>
                                    <input
                                        type='email'
                                        placeholder='Email Address'
                                        name='email'
                                        value={email}
                                        onChange={e => onChange(e)}
                                    />
                                </div>
                                <div className='form-group'>
                                    <input
                                        type='password'
                                        placeholder='Password'
                                        name='password'
                                        value={password}
                                        onChange={e => onChange(e)}
                                    />
                                </div>
                                <div className='form-group'>
                                    <input
                                        type='password'
                                        placeholder='Password Repeat'
                                        name='password2'
                                        value={password2}
                                        onChange={e => onChange(e)}
                                    />
                                </div>
                                <input type="submit" className="btn btn-info btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired
}
export default connect(null, {setAlert, register})(Register)