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
      label: "User Name"
    },
    { id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email"
    },
    { id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday"
    },
    { id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password"
    },
    { id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password"
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
