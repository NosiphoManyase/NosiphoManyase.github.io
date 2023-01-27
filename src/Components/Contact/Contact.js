import React, { useState } from 'react'
import { useForm } from '@formspree/react'
import styles from './contact.module.scss'

const Contact = () => {

const [state, handleSubmit] = useForm('{your-form-id}');
  if (state.succeeded) {
    return <div>Thank you for signing up!</div>;
  }


  return (
    <div className='custom-container section-spacing'>
        <h4>Contact</h4>

        <div>
        <form onSubmit={handleSubmit}>
            <input type="text"
                className='form-control my-3' 
                placeholder='ENTER YOUR NAME'
            />
            <input type="email" 
                className='form-control my-3'
                placeholder='ENTER YOUR EMAIL'
            />
            <textarea className="form-control my-3" 
                rows="5"
                placeholder='YOUR MESSAGE'>
            </textarea>
            <button type="submit" 
                disabled={state.submitting}
                className={styles.submit_btn}>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Contact