import React from 'react'
import '../../styles/contact.scss'


const Contact = () => {
  return (
    <section className='contact'>



      <form
       
      >
        <h2>Contact Us</h2>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />

        <textarea placeholder="Message..." cols="30" rows="10"></textarea>

        <button type="submit">Send</button>
      </form>

      <div>
        <div>
          
        </div>
      </div>


    </section>
  )
}

export default Contact