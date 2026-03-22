import { useState } from 'react';
import TemperatureInput from './TemperatureInput';

function TemperatureConvertor() {
  const [temperature, setTemperature] = useState('');

  let messageAffiche = 'Aucune valeur saisie';

  if (temperature !== '') {
    messageAffiche = `Température entrée : ${temperature} °C`;
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <TemperatureInput
        value={temperature}
        onChange={setTemperature}
      />
      <p>{messageAffiche}</p>
    </div>
  );
}

export default TemperatureConvertor;