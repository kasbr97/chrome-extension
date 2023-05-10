import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//Toastify Alert: after clicking on the "Send Button", this notification will appear, letting the user know that the email was sucessfully sent
export const emailNotification = () => toast.success('Email Sent!', {
    toastId: 'sent123',
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

    //If the email address doesn't end in @gmail.com, @outlook.com, @hotmail.com or @involve.ai, then this message will display
export const error = () => toast.error('Error, enter a valid email address', {
    toastId: 'error123',
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });