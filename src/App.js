import './App.css';
import Header from './Components/Header/Index'
import HomepagePicture from './Components/HomepagePicture/Index'
import CallForAction from './Components/CallForAction/Index'
import Form from './Components/Form/Index'
import Warranty from './Components/Warranty/Index'
import ModelName from './Components/ModelName/Index'

function App() {
  return (
    <div className="App">

      <Header />

      <ModelName />
      
      <HomepagePicture />

      <CallForAction />

      <Form />

      <Warranty />

    </div>
  );
}

export default App;
