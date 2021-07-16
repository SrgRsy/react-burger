import React from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./AppHeader.module.css";

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <Button type="secondary" size="medium">
          <BurgerIcon type="primary" />
          <span
            style={{
              padding: "4px 4px",
              width: "106px",
              height: "24px",
              margin: "0px 8px",
            }}
          >
            Конструктор
          </span>
        </Button>

        <Button type="secondary" size="medium">
          <ListIcon type="primary" />
          <span
            style={{
              padding: "4px 4px",
              width: "106px",
              height: "24px",
              margin: "0px 8px",
            }}
          >
            Лента заказов
          </span>
        </Button>
      </nav>
      <Logo />

      <Button type="secondary" size="medium">
        <ProfileIcon type="primary" />
        <span
          style={{
            padding: "4px 4px",
            width: "106px",
            height: "24px",
            margin: "0px 8px",
          }}
        >
          Личный кабинет
        </span>
      </Button>
    </header>
  );
};

export default AppHeader;
