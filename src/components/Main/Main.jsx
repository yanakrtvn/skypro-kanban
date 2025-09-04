import Column from "../Column/Column.jsx";
import { useState, useEffect } from "react";
import { cardList } from "../../data.js"; 

function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const statuses = [
        "Без статуса",
        "Нужно сделать",
        "В работе",
        "Тестирование",
        "Готово",
      ];

      const groupedColumns = statuses.map(status => ({
        title: status,
        cards: cardList.filter(card => card.status === status)
      }));

      setColumns(groupedColumns);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
    
if (isLoading) {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="loading__content">
            <p className="loading__text">Данные загружаются...</p>
          </div>
        </div>
      </div>
    </main>
  );
}

return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {columns.map((column, i) => (
              <Column key={i} title={column.title} cards={column.cards} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
