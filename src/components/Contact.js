import React, { useState } from 'react';


import './Contact.css';
/*import './Button.css';*/

export default function Contact() {
    const [name, setName ] = useState('');
    const [email, setEmail ] = useState('');
    const [message, setMessage ] = useState('');
    return (
        <div className='cont'>
            <form>

            <div className="form-group">
                    <label htmlFor="name">
                    Navn
                    <input
                     type="text"
                     id="name"
                     name="name"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                    />
                    
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="email">
                    E-mail
                    <input
                     type="text"
                     id="email"
                     email="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                    />

                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="message">
                    Din beskjed
                    <textarea className="textarea"
                     type="text"
                     id="message"
                     name="message"
                     value={message}
                     onChange={(e) => setMessage(e.target.value)}
                    />
                    
                    </label>
                   
                </div>
                <button className='button' type="submit">Send</button>
               
                
            </form>
        </div>

    )



}