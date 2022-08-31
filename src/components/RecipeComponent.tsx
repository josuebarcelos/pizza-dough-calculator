import React, {useCallback, useEffect, useState} from "react";
import BaseRecipe from "../model/recipe";
import {toPercentString, toWeightString} from "../utils/Formatter";
import StepperComponent from "./StepperComponent";
import './RecipeComponent.css'

export interface RecipeComponentProps {
    recipe: BaseRecipe
}

export const RecipeComponent = ({recipe}) => {
    const [parameters, setParameters] = useState(recipe.parameters)
    const updateRecipe = useCallback((key, value) => {
        parameters[key] = parameters[key] + value
        setParameters({...parameters})
    }, [parameters])

    useEffect(() => {
        recipe.parameters = parameters
    }, [recipe, parameters])
    return (
        <>
            <div data-testid="recipe-component" className="recipe">
                <p>Recipe Parameters</p>
                <div data-testid="hydration" className="recipe-property">
                    <label>Hydration:</label>
                    {toPercentString(parameters.hydration, 0)}
                </div>
                <StepperComponent property={'hydration'} step={0.01} callback={updateRecipe}/>
                <div data-testid="salt" className="recipe-property">
                    <label>Salt:</label>
                    {toPercentString(parameters.salt, 1)}
                </div>
                <StepperComponent property={'salt'} step={0.005} callback={updateRecipe}/>
                <div data-testid="number-of-pizzas" className="recipe-property">
                    <label>Number of pizzas:</label>
                    {parameters.numberOfPizzas}
                </div>
                <StepperComponent property={'numberOfPizzas'} step={1} callback={updateRecipe}/>
                <div data-testid="amount-of-water" className="recipe-property">
                    <label>Amount of water per pizza:</label>
                    {parameters.amountOfWaterPerPizza}
                </div>
                <StepperComponent property={'amountOfWaterPerPizza'} step={1} callback={updateRecipe}/>
            </div>
            <div data-testid="results" className="recipe-results">
                <div data-testid="total-water"><label>Total water:</label>{toWeightString(recipe.totalWaterNeeded(), 0)}
                </div>
                <div data-testid="total-flour"><label>Total flour:</label>{toWeightString(recipe.totalFlourNeeded(), 0)}
                </div>
                <div data-testid="total-salt"><label>Total salt:</label>{toWeightString(recipe.totalSaltNeeded(), 0)}
                </div>
                <div data-testid="total-weight"><label>Total weight:</label>{toWeightString(recipe.totalWeight(), 0)}
                </div>
                <div data-testid="weight-per-pizza"><label>Weight per
                    pizza:</label>{toWeightString(recipe.weightPerPizza(), 0)}</div>
            </div>
        </>
    )
}