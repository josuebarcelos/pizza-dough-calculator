import './App.css';
import {RecipeComponent} from "./components/RecipeComponent";
import BaseRecipe from "./model/recipe";

const App = () => {
    const recipe = new BaseRecipe()
  return (
    <div className="App">
      <header className="App-header">
        <p>Pizza Calculator</p>
      </header>
        <RecipeComponent recipe={recipe} />
    </div>
  );
}

export default App;
