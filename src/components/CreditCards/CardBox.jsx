import { CardsItem } from "./CardsItem";

import "./creditCards.scss";

export function CardBox(props) {
  return (
    <section className="pay-card-boxes">
      <div className="header-cards">
        <div className="title">
          <h3>{props.data.title} expenses</h3>
        </div>
        <div className="total-value">
          <p className="negrito">€ {props.data.factur}</p>
        </div>
      </div>

      <div className="container-creditcard">
        <CardsItem />
      </div>
    </section>
  );
}
