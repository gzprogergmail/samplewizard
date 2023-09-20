import { Pivot, PivotItem, PrimaryButton } from '@fluentui/react';
import React, { useState } from 'react';
import { Greeting } from './Greeting';
import { Singing } from './Singing';
import { Draw } from './Draw';

export const MyWizard = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [stepName, setStepName] = useState("N/A");

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
            <h2>primary state: {stepName} </h2>
            <Pivot onLinkClick={handleStepChange} selectedKey={currentStep.toString()}>
                <PivotItem headerText="Step 1" itemKey="0">
                <Draw yourShape="circle" setResult={setStepName} />
                </PivotItem>
                <PivotItem headerText="Step 2" itemKey="1">
                <Singing yourSong="Little star" setResult={setStepName} />
                </PivotItem>
                <PivotItem headerText="Step 3" itemKey="2">
                    <Greeting yourName="ET" setResult={setStepName} />
                </PivotItem>
                {/* Add more PivotItems as needed... */}
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