import './Contact.css'; 
import React, { useState } from 'react';


function App(){
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return(
    <div>
      <div className='container-wrapper'>
        <div className='title'>
          <h2 className='sayhello'>Say hello👋</h2>
          <p className='contact'>お気軽にお声掛けください！</p>
          </div>
        <div className='container'>
          <h1 className="heading">Contact</h1>
          <form className='form' onSubmit={handleSubmit}>
            <div className='form-field'>
              <label className='label'>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className='input'
              />
            </div>
            <div className="form-field">
              <label className="label">E-mail:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="input"
              />
            </div>
            <div className="form-field">
              <label className="label">Message:</label>
              <textarea
                type="text"
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="input_message"
              />
            </div>
            <button type="submit" className='button'>
              送信
            </button>
          </form>
        </div>
        </div>
    </div>
  );
}

export default App;