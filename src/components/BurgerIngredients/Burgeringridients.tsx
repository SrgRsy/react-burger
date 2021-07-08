import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerIngredients.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const Tabs = () => {
  const [current, setCurrent] = React.useState("one");
  return (
    <div style={{ display: "flex" }}>
      <Tab value="one" active={current === "one"} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === "two"} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === "three"} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  );
};

const Ingredient = (props : any) => {
  return (
    <div className={styles.ingredient__item}>
      <img
        src={props.image}
        className={styles.ingredient__itemImage}
        alt="ingredient"
      />
      <h3 className={styles.ingredient__itemCount}>
        <CurrencyIcon type="secondary" />
        <span style = {{margin:'0px 4px'}}>{props.count}</span>
      </h3>
      <p className={styles.ingredient__itemName}>{props.name}</p>
    </div>
  );
};

const BurgerIngredients = (props : any) => {
    return (
      <section className={styles.ingridientsBlock}>
        <h1>Соберите бургер</h1>
        <Tabs />
        <div className = {styles.ingridient__area}>
          <h2 className={styles.ingridientsBlock__title}>Булки</h2>
          <div className={styles.ingredient__itemBlock}>
          {props.data.map((item:any) => {
              if (item.type === 'bun'){
                return <Ingredient count={item.price} name={item.name} image={item.image} key =  {item._id}/>
              }
            })}
          </div>
          <h2 className={styles.ingridientsBlock__title}>Соусы</h2>
          <div className={styles.ingredient__itemBlock}>
          {props.data.map((item:any) => {
              if (item.type === 'sauce'){
                return <Ingredient count={item.price} name={item.name} image={item.image} key =  {item._id} />
              }
            })}
          </div>
          <h2 className={styles.ingridientsBlock__title}>Начинки</h2>
          <div className={styles.ingredient__itemBlock}>
          {props.data.map((item:any) => {
              if (item.type === 'main'){
                return <Ingredient count={item.price} name={item.name} image={item.image} key =  {item._id}/>
              }
            })}
          </div>
        </div>
      </section>
    );
}

export default BurgerIngredients;
