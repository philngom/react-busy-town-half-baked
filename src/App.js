import './App.css';
import { useState } from 'react';
import VehicleList from './VehicleList';
import TrafficLight from './TrafficLight';

function App() {
  const [lightColor, setLightColor] = useState('red');
  const [lizardSize, setLizardSize] = useState(10);
  const [alienSize, setAlienSize] = useState(10);
  const [vehicleArray, setVehicleArray] = useState(['car', 'truck']);

  function handleLightColorClick(e) {
    setLightColor(`${e.target.innerHTML.toLowerCase()}`);
  }

  function handleVehicleButtonClick(e) {
    setVehicleArray([...vehicleArray, `${e.target.innerHTML.toLowerCase()}`]);
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
      <VehicleList vehicles={ vehicleArray }/>
      <div className='buttons'>
        <button onClick={ handleVehicleButtonClick }>Car</button>
        <button onClick={ handleVehicleButtonClick }>Bus</button>
        <button onClick={ handleVehicleButtonClick }>Truck</button>
        <button onClick={ handleVehicleButtonClick }>Motorcycle</button>
      </div>

    </div>
  );
}

export default App;

