import { useState } from "react";

export default function NumberPicker(): JSX.Element {
  const [counterValue, setCounterValue] =
    useState(0);
  const [storedValues, setStoredValues] =
    useState<number[]>([]);

  const handleAddOneToCounter = () => {
    setCounterValue(counterValue + 1);
  };

  const handleSubtractOneFromCounter = () => {
    setCounterValue(counterValue - 1);
  };

  const handleStoreCurrentCount = () => {
    setStoredValues([
      ...storedValues,
      counterValue,
    ]);
  };

  return (
    <>
      <h1>Number picker</h1>
      <p>Your stored numbers: {storedValues.join(", ")}</p>
      <p>Counter: {counterValue}</p>
      <button onClick={handleSubtractOneFromCounter}>-1</button>
      <button onClick={handleAddOneToCounter}>+1</button>
      <hr />
      <button onClick={handleStoreCurrentCount}>Store current count</button>
    </>
  );
}
