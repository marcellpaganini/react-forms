import { useRef } from 'react';
import './App.css';
import FormInput from './Components/FormInput';

function App() {
  //const [userName, setUserName] = useState("");
  const userNameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()));
  };

  console.log(userNameRef)
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <FormInput name="userName" placeholder="User Name" refer={userNameRef} />
        <FormInput name="email" placeholder="Email" />
        <FormInput name="fullName" placeholder="Full Name" />
        <FormInput name="phone" placeholder="Phone Number" />  
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
