import React, {useState} from "react";
import { render } from "react-dom";
import Navbar from "./Navbar.jsx";
import { emailNotification, error } from "./Toastify.jsx";
import { ToastContainer } from 'react-toastify';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/js/bootstrap.min';
import 'react-toastify/dist/ReactToastify.css';
import { Credentials } from "./Credentials.jsx";


//Main
function Popup(){

    //These three state hooks get the information from the input fields to help send the message properly
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [context, setContext] = useState('');

    //The templateparams are part of the EmailJS module and are shaped inside the EmailJS server 
    //to use the information provided. 
    //https://stackoverflow.com/questions/55795125/how-to-send-email-from-my-react-web-application
    const templateParams = {
        email,
        title,
        context
    };

    //Regex for validating if the email address is from either gmail, outlook or involve.ai
    const validEmail = new RegExp('^[\w.+\-]+(@)|(@yahoo\.com)|(@gmail\.com)|(@outlook\.com)|(@hotmail\.com)|(@involve\.ai)$');

    const handleSubmit= () => {
        if (validEmail.test(email)){
            //sends email to the address typed
            emailjs.send(Credentials.SERVICE_ID, Credentials.TEMPLATE_ID, templateParams, Credentials.USER_ID)
                    .then((response) => {
                        console.log('SUCCESS!', response.status, response.text);
                        //shows the notification after it sends the email
                        emailNotification(true);
                    }, (err) => {
                        console.log('FAILED...', err);
                    });
            
        }else{
            error(true);
        }
    }

    return(
        <div>
            {/*Added a navbar and a toast notification when 
            pressing the "Send Email" button */}
            <Navbar/>
            {/*when pressing the hamburger menu (the button in the navbar, to the right)
            options will display such as Compose Email and Calendar Scheduling. 
            Since it's not a fully functioning app, these were added only to
            make the extension more visually appealing */}
            
            <ToastContainer/>

            
                <div class="p-5">
                    <p class="h6">Write an email</p>
                    <input class="form-control mb-2" 
                        onChange = {(e) => setEmail(e.target.value)}
                        value={email} type='email'
                        placeholder="Add email destination" 
                        required/>

                    <input class="form-control mb-2"
                        onChange = {(e) => setTitle(e.target.value)} 
                        value={title}
                         placeholder="Email title" 
                         required/>

                    <textarea class="form-control mb-2" 
                        onChange={(e) => setContext(e.target.value)}
                        value={context}
                        rows="3" placeholder="Email Body"/>

                        {/* If all the input fields aren't empty, then the button to send a message will activate */}
                    {email && title && context ? (
                        <button class="btn btn-outline-success" onClick={handleSubmit} type="submit">Send Email</button>
                    ):(
                        <button disabled class="btn btn-outline-success">Send Email</button>
                    )}
                </div>
            
           
        </div>
    )
}

render(<Popup />, document.getElementById("react-target"));
