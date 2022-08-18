import React from "react";

const StepperComponent = ({callback, property, step}) => {
    return (
        <div data-testid={`update-${property}`}>
            <button data-testid={`increase-${property}`}
                    onClick={() => callback(property, step)}
            >+</button>
            <button data-testid={`decrease-${property}`}
                    onClick={() => callback(property, -step)}
            >-</button>
        </div>
    )
}

export default StepperComponent