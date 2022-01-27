import './App.css';
import { useState } from 'react';
import VehicleList from './VehicleList';
import TrafficLight from './TrafficLight';

function App() {
  const [lightColor, setLightColor] = useState('red');
  // lizardSize should be a number that starts out as 10
  // alienSize should be a number that starts out as 10
  const [lizardSize, setLizardSize] = useState(10);
  const [alienSize, setAlienSize] = useState(10);
  // traffic is complicated. It should be an array of strings that starts out as ['car', 'truck']
  function handleLightColorClick(e) {
    setLightColor(`${e.target.innerHTML.toLowerCase()}`);
  }

  return (

    <div className="App">
      <div className="fight">
        <div className="monster">
          <img src="alien.png" width={alienSize * 10} />
          <div className='buttons'>
            <button onClick={() => setAlienSize(alienSize + 1)}>Oh no! The alien is gobblin up all the electricity!</button>
            <button onClick={() => setLizardSize(lizardSize - 1)}>Amazing! The alien zapped the lizard!</button>
          </div>
        </div>
        <div className="monster">
          <img src="lizard.png" width={lizardSize * 10} />
          <div className="buttons">
            <button onClick={() => setLizardSize(lizardSize + 1)}>Yegads! The lizard is ramping up to its final form!</button>
            <button onClick={() => setAlienSize(alienSize - 1)}>Oh my! The lizard chomped down on the alien!</button>
          </div>
        </div>
      </div>

      <TrafficLight color={lightColor} />
      <div className="buttons">
        <button onClick={ handleLightColorClick }>Red</button>
        <button onClick={ handleLightColorClick }>Yellow</button>
        <button onClick={ handleLightColorClick }>Green</button>
      </div>
      {/*
      the VehicleList component takes in one prop: vehicles.
      This prop should be an array of strings like ['car', 'truck', 'truck', 'car', 'bus'].
      Do you have something like that in state that you could pass as a vehicles prop?
      */}
      <VehicleList />
      <div className='buttons'>
        {/* This part is weird */}
        {/* On click, you should set the traffic in state to be a copy of the same array that's already in state, but immutably add a 'car' to the end */}
        <button>Car</button>
        {/* On click, you should set the traffic in state to be a copy of the same array that's already in state, but immutably add a 'bus' to the end */}
        <button>Bus</button>
        {/* On click, you should set the traffic in state to be a copy of the same array that's already in state, but immutably add a 'truck' to the end */}
        <button>Truck</button>
        {/* On click, you should set the traffic in state to be a copy of the same array that's already in state, but immutably add a 'motorcycle' to the end */}
        <button>Motorcycle</button>
      </div>

    </div>
  );
}

export default App;

