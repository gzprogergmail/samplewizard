import React from 'react';
export const Draw = (props: {
  yourShape: string,
  setResult: (stepName: string) => void
}) => {
  return (
    <div>
      <div>
      🖌🖌🖌 {props.yourShape}
      </div>
      <div>
        <button name="click me to changed primary state" onClick={() => props.setResult("draw")}>click me</button>
      </div>
    </div>
  );
};