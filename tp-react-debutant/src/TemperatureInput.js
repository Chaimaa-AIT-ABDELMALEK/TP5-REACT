function TemperatureInput({ value, onChange }) {
  const gererChangement = (event) => {
    onChange(event.target.value);
  };

  return (
    <input
      type="number"
      value={value}
      onChange={gererChangement}
      placeholder="Température en Celsius"
    />
  );
}

export default TemperatureInput;