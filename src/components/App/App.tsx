import React from "react";
import "./App.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/Burgeringridients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

const App = () => {
  const SOURCE = 'https://norma.nomoreparties.space/api/ingredients';
  const [state, setState] = React.useState({ data: [] });
  React.useEffect(() => {
    fetch(SOURCE)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .then(data => setState({ state, ...data }))
      .catch(res => console.log(res.status));
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
 