import React from "react";
import styles from "./BurgerIngredients.module.css";
import Modal from '../Modal/Modal';
import Ingredient from '../Ingredients/Ingredient';
import Tabs from '../Tabs/Tabs';
import PropTypes from 'prop-types';


const BurgerIngredients = (props) => {
  const [state, setState] = React.useState({ display: 'none' })
  const [elementType, setElementType] = React.useState('ingredient')

  const onHandleModalOpen = () => {
    setState({ display: 'block' });
  }

  const onHandleClose = () => {
    setState({ display: 'none' });
  }

  const handleEscKey = (e) => {
    if (e.keyCode === 27 || e.keyCode === 13) {
      setState({ display: 'none' })
    }
  }

  return (
    <section className={styles.ingridientsBlock}>
       <Modal elementType = {elementType} state = {state} onHandleClose={onHandleClose} handleEscKey={handleEscKey} modalName = "Наименование" />
      <h1>Соберите бургер</h1>
      <Tabs />
      <div className={styles.ingridient__area}>
        <h2 className={styles.ingridientsBlock__title}>Булки</h2>
        <div className={styles.ingredient__itemBlock}>
          {props.data.map((item) => {
            if (item.type === 'bun') {
              // Если убрать return, map перестает отображать компонент.
              return ( <Ingredient onClick={onHandleModalOpen} count={item.price} name={item.name} image={item.image} key={item._id} /> )
            }
          })}
        </div>
        <h2 className={styles.ingridientsBlock__title}>Соусы</h2>
        <div className={styles.ingredient__itemBlock}>
          {props.data.map((item) => {
            if (item.type === 'sauce') {
              // Если убрать return, map перестает отображать компонент.
              return ( <Ingredient onClick={onHandleModalOpen} count={item.price} name={item.name} image={item.image} key={item._id} />) 
            }
          })}
        </div>
        <h2 className={styles.ingridientsBlock__title}>Начинки</h2>
        <div className={styles.ingredient__itemBlock}>
          {props.data.map((item) => {
            if (item.type === 'main') {
              // Если убрать return, map перестает отображать компонент.
              return ( <Ingredient onClick={onHandleModalOpen} count={item.price} name={item.name} image={item.image} key={item._id} /> )
            }
          })}
        </div>
      </div>
    </section>
  );
}

BurgerIngredients.propTypes = {
data: PropTypes.array.isRequired
}


export default BurgerIngredients;
