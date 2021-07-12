import React from "react";
import img from "../../images/bun.png";
import ItemBlock from '../ItemBlock/ItemBlock'
import PropTypes from 'prop-types';
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerConstructorElement = (props) => {
  
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
  
  BurgerConstructorElement.propTypes = {
    data : PropTypes.array.isRequired
  }

  
  export default BurgerConstructorElement;