import React from "react";
import CardItem from "./CardItem.tsx";
import cardsData from "../../../data/cardsData.json";

import styles from "./Cards.module.scss";

const colors = ["#EDF8FF", "#FFF6E1", "#ECFFF9", "#F0EDFF"];

const CardList: React.FC = () => (
  <div className={styles.cardListWrapper}>
    {cardsData.map((card, index) => (
      <CardItem
        id={card.id}
        key={index}
        title={card.title}
        description={card.description}
        cover_image={card.cover_image}
        color={colors[index % colors.length]}
      />
    ))}
  </div>
);

export default CardList;
