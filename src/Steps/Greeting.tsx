import React from 'react';
export const Greeting = (props: {
  yourName: string,
  setResult: (stepName: string) => void
}) => {
  return (
    <div>
      <div>
        Hello {props.yourName}
      </div>
      <div>
      <button name="click me to changed primary state" onClick={() => props.setResult("greeting")}>click me</button>
      </div>
    </div>
  );
};