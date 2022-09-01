export enum YeastType {
    DRY,
    FRESH,
    SOURDOUGH
}
export interface RecipeParameters {
    hydration: number
    salt: number
    numberOfPizzas: number
    amountOfWaterPerPizza: number
    yeastType: YeastType
}

export interface Recipe {
    totalWaterNeeded: () => number
    flourWaterRatio: () => number
    totalFlourNeeded: () => number
    totalSaltNeeded: () => number
    totalWeight: () => number
    weightPerPizza: () => number
}

export default class BaseRecipe implements Recipe {
    parameters: RecipeParameters
    constructor(parameters: RecipeParameters = {hydration: 0.68, salt: 0.025, amountOfWaterPerPizza: 100, numberOfPizzas: 5, yeastType: YeastType.DRY}) {
        this.parameters = parameters
    }
    totalWaterNeeded = () => {
        return this.parameters.numberOfPizzas * this.parameters.amountOfWaterPerPizza
    }
    flourWaterRatio = () => {
        return 1/this.parameters.hydration
    }
    totalFlourNeeded = () => {
        return this.totalWaterNeeded()*this.flourWaterRatio()
    }
    totalSaltNeeded = () => {
        return this.totalFlourNeeded()*this.parameters.salt
    }
    amountOfYeast = () => {
        switch (this.parameters.yeastType) {
            case YeastType.DRY:
                return 0.0007
            case YeastType.FRESH:
                return 0.002
            case YeastType.SOURDOUGH:
                return 0.2
        }
    }
    totalYeastNeeded = () => {
        return this.totalFlourNeeded()*this.amountOfYeast()
    }
    totalWeight = () => {
        return this.totalFlourNeeded()+this.totalWaterNeeded()+this.totalSaltNeeded()
    }
    weightPerPizza = () => {
        return this.totalWeight()/this.parameters.numberOfPizzas
    }
}