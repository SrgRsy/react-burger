import React from 'react';
import {
    ConstructorElement,
    DragIcon,
  } from "@ya.praktikum/react-developer-burger-ui-components";
  import styles from "./ItemBlock.module.css";
  import PropTypes from 'prop-types';


const ItemBlock = (props) => {
    return (
      <div className={styles.ItemBlock}>
        {props.data.map((item) => {
            // Если убрать return, map перестает отображать компонент.
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


  ItemBlock.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        proteins: PropTypes.number,
        fat: PropTypes.number,
        carbohydrates: PropTypes.number,
        calories: PropTypes.number,
        price: PropTypes.number.isRequired,
        image: PropTypes.string,
        image_mobile: PropTypes.string,
        image_large: PropTypes.string,
      })
    ).isRequired
  }
  export default ItemBlock;