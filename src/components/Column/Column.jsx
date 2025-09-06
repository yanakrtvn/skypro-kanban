import Card from "../Card/Card.jsx";
import { SColumnContainer, SColumnTitle, SCardsContainer } from "./Column.styled.js";

function Column({ title, cards }) {
  return (
    <SColumnContainer>
      <SColumnTitle>
        <p>{title}</p>
      </SColumnTitle>
      <SCardsContainer>
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            topic={card.topic}
            date={card.date}
          />
        ))}
      </SCardsContainer>
    </SColumnContainer>
  );
}

export default Column;
