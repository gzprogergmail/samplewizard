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
        <button name="click to set value" onClick={() => props.setResult("draw")}>click me</button>
      </div>
    </div>
  );
};