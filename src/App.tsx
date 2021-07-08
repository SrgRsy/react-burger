import React from "react";
import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import BurgerIngredients from "./components/BurgerIngredients/Burgeringridients";
import BurgerConstructor from "./components/BurgerConstructor/BurgerConstructor";
import data from './untils/data.js';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <main className = 'App__main'>
        <BurgerIngredients data = {data}/>
        <BurgerConstructor data = {data} count = '610'/>
      </main>
    </div>
  );
}

export default App;
