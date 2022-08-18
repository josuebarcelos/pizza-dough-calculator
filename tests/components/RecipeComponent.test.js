import {render, screen} from "@testing-library/react";
import {RecipeComponent} from "../../src/components/RecipeComponent";
import BaseRecipe from "../../src/model/recipe";
import userEvent from "@testing-library/user-event";
import {toPercentString, toWeightString} from "../../src/utils/Formatter";

describe('RecipeComponent', () => {
    const recipe = new BaseRecipe()
    test('show a recipe', () => {
        render(<RecipeComponent recipe={recipe} />)
        const hydration = screen.getByTestId('hydration')
        expect(hydration).toBeInTheDocument()
        expect(hydration).toHaveTextContent(toPercentString(recipe.parameters.hydration,0))
        const updateHydrationComponent = screen.getByTestId('update-hydration')
        expect(updateHydrationComponent).toBeInTheDocument()
        const salt = screen.getByTestId('salt')
        expect(salt).toBeInTheDocument()
        expect(salt).toHaveTextContent(toPercentString(recipe.parameters.salt,1))
        const updateSaltComponent = screen.getByTestId('update-salt')
        expect(updateSaltComponent).toBeInTheDocument()
        const numberOfPizzas = screen.getByTestId('number-of-pizzas')
        expect(numberOfPizzas).toBeInTheDocument()
        expect(numberOfPizzas).toHaveTextContent(recipe.parameters.numberOfPizzas)
        const updateNumberOfPizzasComponent = screen.getByTestId('update-numberOfPizzas')
        expect(updateNumberOfPizzasComponent).toBeInTheDocument()
        const amountOfWaterPerPizza = screen.getByTestId('amount-of-water')
        expect(amountOfWaterPerPizza).toBeInTheDocument()
        expect(amountOfWaterPerPizza).toHaveTextContent(recipe.parameters.amountOfWaterPerPizza)
        const updateamountOfWaterPerPizzaComponent = screen.getByTestId('update-amountOfWaterPerPizza')
        expect(updateamountOfWaterPerPizzaComponent).toBeInTheDocument()

        const totalWater = screen.getByTestId('total-water')
        expect(totalWater).toHaveTextContent(toWeightString(recipe.totalWaterNeeded(), 0))
        const totalFlour = screen.getByTestId('total-flour')
        expect(totalFlour).toHaveTextContent(toWeightString(recipe.totalFlourNeeded(), 0))
        const totalSalt = screen.getByTestId('total-salt')
        expect(totalSalt).toHaveTextContent(toWeightString(recipe.totalSaltNeeded(), 0))
        const totalWeight = screen.getByTestId('total-weight')
        expect(totalWeight).toHaveTextContent(toWeightString(recipe.totalWeight(), 0))
        const weightPerPizza = screen.getByTestId('weight-per-pizza')
        expect(weightPerPizza).toHaveTextContent(toWeightString(recipe.weightPerPizza(), 0))

    })

    test('update hydration', () => {
        render(<RecipeComponent recipe={recipe} />)
        const expectedHydration = recipe.parameters.hydration + 0.01
        const increaseHydrationBtn = screen.getByTestId('increase-hydration')
        userEvent.click(increaseHydrationBtn)
        expect(recipe.parameters.hydration).toBe(expectedHydration)
        const decreaseHydrationBtn = screen.getByTestId('decrease-hydration')
        userEvent.click(decreaseHydrationBtn)
        expect(recipe.parameters.hydration).toBe(expectedHydration - 0.01)
    })

})