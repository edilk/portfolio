import { useState } from 'react';
import './contact.css';

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <section className="contact">
            <h2>Contact me</h2>
            <form onSubmit={handleSubmit}>
                <div className='contact-input'>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="Your name" 
                        required 
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value);
                        }}/>
                    <input 
                        type="email" 
                        id="email" 
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
                    value={message}
                    onChange={(event) => {
                        setMessage(event.target.value);
                    }}/>
                <input type="submit" value={'Submit'}/>
            </form>
        </section>
    );
}