import { Pivot, PivotItem, PrimaryButton } from '@fluentui/react';
import React, { useState } from 'react';
import { SimpleComp1 } from './SimpeComp1';

export const MyWizard = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const handleStepChange = (item?: PivotItem) => {
        if (item) {
            setCurrentStep(parseInt(item.props.itemKey||"0"));
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
            <Pivot onLinkClick={handleStepChange} selectedKey={currentStep.toString()}>
                <PivotItem headerText="Step 1" itemKey="0">
                  hellow world
                </PivotItem>
                <PivotItem headerText="Step 2" itemKey="1">
                    step 2
                </PivotItem>
                <PivotItem headerText="Step 3" itemKey="2">
                    <SimpleComp1 />
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