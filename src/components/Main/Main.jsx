import Column from "../Column/Column.jsx";
import { useState, useEffect } from "react";
import { cardList } from "../../data.js"; 
import { SMain, SMainBlock, SMainContent, SLoadingContent, SLoadingText } from "./Main.styled.js";

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
    <SMain>
      <div className="container">
        <SMainBlock>
          <SLoadingContent>
            <SLoadingText>Данные загружаются...</SLoadingText>
          </SLoadingContent>
          </SMainBlock>
      </div>
    </SMain>
  );
}

return (
    <SMain>
      <div className="container">
        <SMainBlock>
          <SMainContent>
            {columns.map((column, i) => (
              <Column key={i} title={column.title} cards={column.cards} />
            ))}
          </SMainContent>
        </SMainBlock>
      </div>
    </SMain>
  );
}

export default Main;
