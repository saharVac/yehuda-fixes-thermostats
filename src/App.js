import './App.css';
import Header from './Components/Header/Index'
import DisplayedImage from './Components/displayedImage/Index'
import CallForAction from './Components/CallForAction/Index'
import Form from './Components/Form/Index'
import Warranty from './Components/Footer/Index'
import Options from './Components/Options/Index';
import { useReducer, useState } from 'react';
import InfoSection from './Components/InfoSection/Index';
import Footer from './Components/Footer/Index';

const reducer = (state, action) => {
  switch (action.type) {
    case 'updateSelectedDevice':
      return {
        ...state,
        displayedDevice: action.payload,
      }
    default:
      throw new Error()
  }
}

// TODO: "iComfort/Comfort Sync - 49W95 Equivalent" - "iComfort/Comfort Sync - Emergency Stat"
// TODO: "S30 19V30/Allied Air Confort Sync A3" - "S30 19V30/Allied Air iComfort Sync A3"

function App() {

  const [state, dispatch] = useReducer(reducer, {
    displayedDevice: "iComfort Wifi - 10F81"
  })

  const setSelectedDevice = (device) => {
    dispatch({ type: 'updateSelectedDevice', payload: device })
  }

  return (
    <div className="App">

      <Header />

      <CallForAction />

      <Options setSelectedDevice={setSelectedDevice} />

      <DisplayedImage
        device={state.displayedDevice}
      />

      <InfoSection
        device={state.displayedDevice}
      />

      <Form />

      <Footer />

    </div>
  );
}

export default App;
