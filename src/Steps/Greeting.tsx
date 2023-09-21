import React, { useState, useEffect } from "react";
export const Greeting = (props: {
  yourName: string,
  setResult: (stepName: string) => void
}) => {
  const [bodyResult, setbodyResult] = useState<string>("");
  useEffect(() => {
    let mainAsyncFunction =async ()=> {
    const result = await fetch("http://jzlinux.westus2.cloudapp.azure.com:8080/getnumber");
    const json = await result.json();
    setbodyResult(JSON.stringify(json, null, 2));
    }
    mainAsyncFunction();
  },[]);

  return (
    <div>
      <div>
        Hello {props.yourName}
        Results from a Rest API call:
        <pre>{bodyResult || null}</pre>
      </div>
      <div>
        <button type="button" onClick={() => props.setResult("greeting")}>click me</button>
      </div>
    </div>
  );
};

