import React from "react";
import { Card } from "antd";
import { Link } from 'react-router-dom'

import styles from "./Cards.module.scss";

interface CardItemProps {
  id: string;
  title: string;
  description: string;
  cover_image?: string;
  color: string;
}

const CardItem: React.FC<CardItemProps> = ({id, title, description, cover_image, color,}) => {
  let routePath = '';
  if (id === 'recon-hub') {
    routePath = `/recon-hub`;
  } else if (id === 'pytest-hub') {
    routePath = `/pytest-hub`;
  } else if (id === 'doably') {
    routePath = `/doably`;
  } else if (id === 'focal-point') {
    routePath = `/focal-point`;
  }
return(
  <Link to={routePath}>
    <Card
      hoverable
      className={styles.card}
      style={{ backgroundColor: color, position: "relative", height: "400px" }}
    >
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardDescription}>{description}</p>
      </div>
      {cover_image && (
        <img src={cover_image} alt={title} className={styles.cardImage} />
      )}
    </Card>
  </Link>
  )
};

export default CardItem;
