import React, { useState } from 'react';
import { validateEmail, capitalizeFirstLetter } from '../../utils/helpers';



//formState reflects whatever string you have in the input box at any given moment, regardless of if it was submitted or not

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });// set initial state to empty strings
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } 
        else {
            if (!e.target.value.length) {
                    setErrorMessage(`${capitalizeFirstLetter(e.target.name)} is required.`);
            } else {
                setErrorMessage('');
            }
        } 
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }
        console.log('errorMessage', errorMessage);
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log(formState);
    }
    return (
        <section className="my-5">
          <h2 className='py-1'>Contact Me</h2>
          <form id="contact-form" onSubmit={handleSubmit}>
            {/* // name input */}
            <div className='flex-column'>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
            </div>
            {/* // email input */}
            <div className='flex-column'>
                <label htmlFor="email">Email address:</label>
                <input type="email" name="email"defaultValue={email} onBlur={handleChange}/>
            </div>
            {/* // message text area */}
            <div className='flex-column'>
                <label htmlFor="message">Message:</label>
                <textarea name="message" rows="5"  defaultValue={message} onBlur={handleChange}/>
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <button type="submit">Submit</button>
          </form>
        </section>
      )
}
    
export default Contact;