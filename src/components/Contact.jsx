import React from 'react'

export default function Contact() {
  return (
    <div className='contact'>
      <main>
        <h1>Contact Us</h1>

        <form>
      <div>
        <label>Name</label>
        <input type='Text' placeholder='abc' required/>
      </div>
      <div>
        <label>Email</label>
        <input type='email' placeholder='abc@xyz.com' required/>
      </div>
      <div>
        <label>Message</label>
        <input type='Text' placeholder='Tell us about your query..' required/>
      </div>
      <button type='submit'>Send</button>
        </form>
      </main>
    </div>
  )
}
