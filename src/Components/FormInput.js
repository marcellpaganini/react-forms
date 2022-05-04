import React from 'react'
import './FormInput.css'

export default function FormInput(props) {
  return (
    <div className="form-input">
        {/*<label>User Name</label>*/}
        <input name={props.name} placeholder={props.placeholder} ref={props.refer}/>
    </div>
  )
}
