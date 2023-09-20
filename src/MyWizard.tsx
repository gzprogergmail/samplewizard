import { Pivot, PivotItem, PrimaryButton } from '@fluentui/react';
import React, { useState } from 'react';
import { Greeting } from './Greeting';
import { Singing } from './Singing';
import { Draw } from './Draw';

export const MyWizard = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [primaryStateSetByInteraction, setprimaryStateSetByInteraction] = useState("N/A");
    const steps = [
        { headerText: "Sing", component: <Singing yourSong="Little star" setResult={setprimaryStateSetByInteraction} /> },
        { headerText: "Draw", component:  <Draw yourShape={"circle"} setResult={setprimaryStateSetByInteraction} />},        
        { headerText: "Greet", component: <Greeting yourName="ET" setResult={setprimaryStateSetByInteraction} /> }
    ]

    const pivotItems = steps.map((step, index) => (
        <PivotItem key={index} headerText={step.headerText} itemKey={index.toString()}>
            {step.component}
        </PivotItem>
    ));

    const handleStepChange = (item?: PivotItem) => {
        if (item) {
            setCurrentStep(parseInt(item.props.itemKey || "0"));
        }
    };

    const handlePrevClick = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleNextClick = () => {
        setCurrentStep(currentStep + 1);
    };

    return (
        <>
            <h1>My Wizard</h1>
            <h2>primary state: {primaryStateSetByInteraction} </h2>
            <Pivot onLinkClick={handleStepChange} selectedKey={currentStep.toString()}>
                {pivotItems}
            </Pivot>
            <div>
                {currentStep > 0 && (
                    <PrimaryButton onClick={handlePrevClick}>Prev</PrimaryButton>
                )}
                {currentStep < 2 && (
                    <PrimaryButton onClick={handleNextClick}>Next</PrimaryButton>
                )}
            </div>
        </>
    );
};