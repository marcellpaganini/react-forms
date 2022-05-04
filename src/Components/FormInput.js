import React from 'react'
import './FormInput.css'

export default function FormInput(props) {
  return (
    <div className="form-input">
        {/*<label>User Name</label>*/}
        <input placeholder={props.placeholder} onChange={e => props.setUserName(e.target.value)} />
    </div>
  )
}
