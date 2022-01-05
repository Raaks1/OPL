import React from 'react';
import './ContactForm.css'

export default function KontaktOss() {

    function sendEmail(e) {
        e.preventDefault();

  
    }

    return(
        <div>
            <div className="contain">
            <form onSubmit={sendEmail}>
                    <div className="row">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Navn" name="name"/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email Addresse" name="email"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Tema" name="subject"/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-text"  placeholder="Din beskjed" name="message"></textarea>
                        </div>
                        <div className="send">
                            <input type="submit" className="btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}