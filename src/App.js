import './App.css';
import Header from './Components/Header/Index'
import DisplayedImage from './Components/displayedImage/Index'
import CallForAction from './Components/CallForAction/Index'
import Form from './Components/Form/Index'
import Options from './Components/Options/Index';
import { useReducer } from 'react';
import InfoSection from './Components/InfoSection/Index';
import Footer from './Components/Footer/Index';
import Disclaimer from './Components/Disclaimer/Index';
import Support from './Components/Support/Index';

const reducer = (state, action) => {
  switch (action.type) {
    case 'updateSelectedDevice':
      return {
        ...state,
        displayedDevice: action.payload,
      }
    case 'updateSelectedPic':
      return {
        ...state,
        displayedPic: action.payload,
      }
    default:
      throw new Error()
  }
}

// TODO: "iComfort/Comfort Sync - 49W95 Equivalent" - "iComfort/Comfort Sync - Emergency Stat"
// TODO: "S30 19V30/Allied Air Confort Sync A3" - "S30 19V30/Allied Air iComfort Sync A3"

function App() {

  const [state, dispatch] = useReducer(reducer, {
    displayedDevice: "iComfort Wifi - 10F81",
    displayedPic: 1
  })

  const setSelectedDevice = (device) => {
    dispatch({ type: 'updateSelectedDevice', payload: device })
    dispatch({ type: 'updateSelectedPic', payload: 1 })
  }

  const setSelectedPic = (pic) => {
    dispatch({ type: 'updateSelectedPic', payload: pic })
  }

  return (
    <div className="App">

      <Header />

      <CallForAction />

      <Options
        setSelectedDevice={setSelectedDevice}
        displayedDevice={state.displayedDevice}
      />

      <DisplayedImage
        device={state.displayedDevice}
        setSelectedPic={setSelectedPic}
        displayedPic={state.displayedPic}
      />

      <InfoSection
        device={state.displayedDevice}
      />

      <Disclaimer />

      <Form />

      <Support />

      <Footer />

    </div>
  );
}

export default App;
