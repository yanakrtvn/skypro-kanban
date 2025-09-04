import Card from "../Card/Card.jsx";

function Column({ title, cards }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            theme={card.theme}
            category={card.category}
            date={card.date}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;
