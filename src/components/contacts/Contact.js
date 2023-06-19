import { useEffect, useRef, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { BsExclamationCircleFill } from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import './contact.css';

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [resultMsg, setResultMsg] = useState({});
    const [isSuccessfull, setIsSuccessfull] = useState('');
    const [showResultMsg, setShowResultMsg] = useState(false);

    const form = useRef();

    function handleSend(e) {
        e.preventDefault();

        emailjs
            .sendForm('service_58cmamh', 
                'template_ndbou3n',
                form.current,
                'CHTFW7f3QwyDaO3Sr')
            .then((result) => {
                console.log(result.text);
                setIsSuccessfull(true);
            }, (error) => {
                console.log(error.text);
                setIsSuccessfull(false);
            })
            .finally(() => {
                setName('');
                setEmail('');
                setMessage('');
                setShowResultMsg(true);
                setTimeout(() => {
                    setShowResultMsg(false);
                }, 5000);
            });

    }

    useEffect(() => {
        setResultMsg(isSuccessfull ? 
        {
            msg: 'Message sent successfully!',
            icon: FaCheckCircle
        } :
        {
            msg: 'Error sending your message!',
            icon: BsExclamationCircleFill
        });
    }, [isSuccessfull])

    return (
        <section className="contact" id='contact'>
            <h2>Contact me</h2>
            {showResultMsg && (
                <div className={isSuccessfull ? 'success' : 'fail'}>
                    <resultMsg.icon className='msgIcon'/>
                    <p>{resultMsg.msg}</p>
                </div>
            )}
            <form ref={form} onSubmit={handleSend}>
                <div className='contact-input'>
                    <input 
                        type="text" 
                        id="name" 
                        name='user_name'
                        placeholder="Your name" 
                        required 
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value);
                        }}/>
                    <input 
                        type="email" 
                        id="email" 
                        name='user_email'
                        placeholder="Your @email" 
                        required 
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}/>
                </div>
                <textarea 
                    placeholder='Your message...' 
                    required 
                    name='message'
                    value={message}
                    onChange={(event) => {
                        setMessage(event.target.value);
                    }}/>
                <input type="submit" value={'Send'}/>
            </form>
        </section>
    );
}