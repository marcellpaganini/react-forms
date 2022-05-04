import { useState } from 'react';
import './App.css';
import FormInput from './Components/FormInput';

function App() {
  const [userName, setUserName] = useState("");
  console.log(userName)
  return (
    <div className="App">
      <form>
        <FormInput placeholder="User Name" setUserName={setUserName} />
        <FormInput placeholder="Email" />
        <FormInput placeholder="Full Name" />
        <FormInput placeholder="Phone Number" />  
      </form>
    </div>
  );
}

export default App;
