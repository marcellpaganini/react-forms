import { useState } from 'react';
import './App.css';
import FormInput from './Components/FormInput';

function App() {
  const [values, setValues] = useState({ userName: "",
                                         email: "",
                                         birthday: "",
                                         password: "",
                                         confirmPassword: "" });

  const inputs = [
    { id: 1,
      name: "userName",
      type: "text",
      placeholder: "User Name",
      errorMessage: "User name should be 3-16 characters and shouldn't include any special chatacter.",
      label: "User Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true
    },
    { id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address.",
      label: "Email",
      required: true
    },
    { id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
      required: true
    },
    { id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password should be 8-20 chatacters and include at least 1 character, 1 number and 1 special character.",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      label: "Password",
      required: true
    },
    { id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match.",
      label: "Confirm Password",
      pattern: values.password,
      required: true
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  console.log(values);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
