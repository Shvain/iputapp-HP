import './Contact.css'; 
import React, { useState } from 'react';
import { init, send } from 'emailjs-com';

const ContactForm = () => {
  const [name, setName] = useState(''); 
  const [mail, setMail] = useState(''); 
  const [message, setMessage] = useState(''); 

  const sendMail = () => {
    const user_ID = process.env.REACT_APP_EMAILJS_PUBLIC_ID;
    const service_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const template_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

    if(
      user_ID !== undefined &&    //!==が===だった
      service_ID !== undefined &&
      template_ID !== undefined
    ){
      init(user_ID);

      const template_params = {
        to_name: name,
        from_email: mail,
        message: message,
      };

    send(service_ID, template_ID, template_params).then(() => {
      window.alert('お問い合わせいただきありがとうございます。\n 返信まで少々お待ちください。');
  
      setName('');
      setMail('');
      setMessage('');
      });
    }
  }
    const handleClick = (e) => {
      e.preventDefault();
      sendMail();
    };

    const disableSend = 
    name === '' || mail === ''  || message === '';

  return(
    <div>
      <div className='container-wrapper'>
        <div className='title'>
          <h2 className='sayhello'>Say hello👋</h2>
          <p className='contact'>お気軽にお声掛けください！</p>
        </div>
        <div className='container'>
          <h1 className="heading">Contact</h1>
          <form className='form'>
            <div className='form-field-name'>
              <label className='label'>Name:</label>
              </div>
              <input
                webkitAppearance="none"
                type="text"
                id="nameForm"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='input'
              />
            <div className="form-field-mail">
              <label className="label">E-mail:</label>
              </div>
              <input
                webkitAppearance="none"
                type="email"
                id="mailForm"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                className="input"
              />
            <div className="form-field-message">
              <label className="label">Message:</label>
              </div>
              <textarea
                webkitAppearance="none"
                type="text"
                id="mailContentForm"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="input_message"
              />
              <div className='btns'>
                <div>
                  <button
                        onClick={handleClick}
                        disabled={disableSend} className='btns-send'>
                        <strong>送信</strong>
                  </button>
                </div>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;




