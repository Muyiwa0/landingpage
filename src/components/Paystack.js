import React from 'react'
import { useState } from 'react'
import { PaystackButton } from 'react-paystack'
function Paystack(props) {
  const publicKey = 'pk_live_45cb4ea56402832c4859a716fafa44439ef2c6a5'
  console.log(props)
  const amount = props.amount * 100 // Remember, set in kobo!
  const [email, setEmail] = useState('muyiwa@gmail.com')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: 'Pay Now',
    onSuccess: () => alert('Thanks for doing business with us!'),
    onClose: () =>
      alert("Are you sure you don't want to complete your purchase?"),
  }
  return (
    <div className="checkout-form">
      <div className="checkout-field">
        <label>Name</label>
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={props.name}
        />
      </div>
      <div className="checkout-field">
        <label>Email</label>
        <input
          type="text"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={props.email}
        />
      </div>
      <div className="checkout-field">
        <label>Phone</label>
        <input
          type="text"
          id="phone"
          onChange={(e) => setPhone(e.target.value)}
          value={props.phone}
        />
      </div>
      <PaystackButton className="paystack-button" {...componentProps} />
    </div>
  )
}

export default Paystack
