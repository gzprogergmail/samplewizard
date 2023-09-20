import React from 'react';
export const Singing = (props: {
  yourSong: string,
  setResult: (stepName: string) => void
}) => {
  return (
    <div>
      <div>
      &#9835; &#9835; &#9835; {props.yourSong}
      </div>
      <div>
      <button name="click me to changed primary state" onClick={() => props.setResult("Sing")}>click me</button>
      </div>
    </div>
  );
};