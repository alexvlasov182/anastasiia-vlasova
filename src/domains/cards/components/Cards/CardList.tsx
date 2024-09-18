import React from "react";
import CardItem from "./CardItem.tsx";
import cardsData from "../../../../data/cardsData.json";

import styles from "./Cards.module.scss";

const colors = ["#EDF0FF", "#F6E8C5", "#DCEDEC", "#EDF8FF"];

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
