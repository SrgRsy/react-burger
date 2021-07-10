import React from "react";
import styles from "./BurgerConstructor.module.css";
import OrderDetails from '../OrderDetails/OrderDetails';
import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import img from "../../images/bun.png";

const BurgerConstructorElement = (props: any) => {

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: "20px",
        }}
      >
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={img}
        />
      </div>
      <ItemBlock data={props.data} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: "20px",
        }}
      >
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={img}
        />
      </div>
    </div>
  );
};

const ItemBlock = (props: any) => {
  return (
    <div className={styles.BurgerConstructor__itemBlock}>
      {props.data.map((item: any) => {
        return (
          <div
            key={item._id}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "555px",
            }}
          >
            <DragIcon type="primary" />
            <ConstructorElement
              text={item.name}
              price={item.price}
              thumbnail={item.image}
              key={item._id}
            />
          </div>
        );
      })}
    </div>
  );
};

const BurgerConstructor = (props: any) => {
  const [state, setState] = React.useState({ display: 'none' })

    const onHandleModalOpen = () => {
    setState({ display: 'block' });
  }

  const onHandleClose = () => {
    setState({ display: 'none' });
  }

  const handleEscKey = (e: any) => {
    if (e.keyCode === 27 || e.keyCode === 13) {
      setState({ display: 'none' })
    }
  }


  return (
    <section className={styles.BurgerConstructor__section}>
      <OrderDetails state={state} handleEscKey={handleEscKey} onHandleClose={onHandleClose} />
      <BurgerConstructorElement data={props.data} />
      <div className={styles.BurgerConstructor__botBlock}>
        <p className={styles.BurgerConstructor__count}>
          <CurrencyIcon type="primary" /> {props.count}{" "}
        </p>
        <Button onClick={onHandleModalOpen} type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

export default BurgerConstructor;
