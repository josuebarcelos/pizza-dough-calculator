import StepperComponent from "../../src/components/StepperComponent";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('StepperComponent', () => {
    test('callback to update property with value', () => {

        const propKey = 'property'
        const step = 1
        const callback = jest.fn()

        render(<StepperComponent callback={callback} step={step} property={propKey}/> )
        const increaseBtn = screen.getByTestId(`increase-${propKey}`)
        expect(increaseBtn).toBeInTheDocument()
        userEvent.click(increaseBtn)
        expect(callback).toHaveBeenCalledWith(propKey, step)
        const decreaseBtn = screen.getByTestId(`decrease-${propKey}`)
        expect(decreaseBtn).toBeInTheDocument()
        userEvent.click(decreaseBtn)
        expect(callback).toHaveBeenCalledWith(propKey, -step)
    })

})