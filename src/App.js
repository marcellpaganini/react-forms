import './App.css';
import FormInput from './Components/FormInput';

function App() {
  return (
    <div className="App">
      <form>
        <FormInput placeholder="User Name" />
        <FormInput placeholder="Email" />
        <FormInput placeholder="Full Name"/>
        <FormInput placeholder="Phone Number"/>  
      </form>
    </div>
  );
}

export default App;
