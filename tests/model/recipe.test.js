import BaseRecipe, {RecipeParameters} from "../../src/model/recipe";



describe('Recipe', () =>{
    let recipe = null
    beforeEach(() => {
        recipe = new BaseRecipe()
    })
    test('empty constructor with default values', () => {
        expect(recipe.parameters).toStrictEqual({
            hydration: 0.68,
            salt: 0.025,
            amountOfWaterPerPizza: 100,
            numberOfPizzas: 5
        })
    })
    test('total water needed for the recipe', () => {
        const amountOfWaterPerPizza = 100
        const numberOfPizzas = 5
        const params = {numberOfPizzas, amountOfWaterPerPizza}
        recipe = new BaseRecipe(params)
        expect(recipe.totalWaterNeeded()).toBe(amountOfWaterPerPizza * numberOfPizzas)
    })
    test('flour:water ratio', () => {
        expect(recipe.flourWaterRatio()).toBe(1/recipe.parameters.hydration)
    })
    test('total flour needed', () => {
        expect(recipe.totalFlourNeeded()).toBe(recipe.totalWaterNeeded()*recipe.flourWaterRatio())
    })
    test('total salt needed', () => {
        expect(recipe.totalSaltNeeded()).toBe(recipe.totalFlourNeeded()*recipe.parameters.salt)
    })
    test('total weight', () => {
        expect(recipe.totalWeight()).toBe(recipe.totalWaterNeeded()+recipe.totalFlourNeeded()+recipe.totalSaltNeeded())
    })
    test('weight per pizza', () => {
        expect(recipe.weightPerPizza()).toBe(recipe.totalWeight()/recipe.parameters.numberOfPizzas)
    })
})