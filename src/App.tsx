import React from "react";
import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import BurgerIngredients from "./components/BurgerIngredients/Burgeringridients";
import BurgerConstructor from "./components/BurgerConstructor/BurgerConstructor";

const App = () => {
  const SOURCE = 'https://norma.nomoreparties.space/api/ingredients';
  const [state, setState] = React.useState({ data: [] });
  React.useEffect(() => {
    fetch(SOURCE)
      .then(res => res.json())
      .then(data => setState({ state, ...data }))
      .catch(e => console.log('Ошибка'));
  }, [])
  return (
    <div className="App">
      <AppHeader />
      <main className='App__main'>
        <BurgerIngredients data={state.data} />
        <BurgerConstructor data={state.data} count='610' />
      </main>
    </div>
  );
}

export default App;
