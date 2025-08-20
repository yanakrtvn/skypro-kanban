import Column from "../Column/Column.jsx";;

function Main() {
  const columnsData = [
    {
      title: "Без статуса",
      cards: [
        {
          id: 1,
          title: "Название задачи",
          theme: "orange",
          category: "Web Design",
          date: "30.10.23",
        },
        {
          id: 2,
          title: "Название задачи",
          theme: "green",
          category: "Research",
          date: "30.10.23",
        },
        {
          id: 3,
          title: "Название задачи",
          theme: "orange",
          category: "Web Design",
          date: "30.10.23",
        },
        {
          id: 4,
          title: "Название задачи",
          theme: "purple",
          category: "Copywriting",
          date: "30.10.23",
        },
        {
          id: 5,
          title: "Название задачи",
          theme: "orange",
          category: "Web Design",
          date: "30.10.23",
        },
      ],
    },
    {
      title: "Нужно сделать",
      cards: [
        {
          id: 6,
          title: "Название задачи",
          theme: "green",
          category: "Research",
          date: "30.10.23",
        },
      ],
    },
    {
      title: "В работе",
      cards: [
        {
          id: 7,
          title: "Название задачи",
          theme: "green",
          category: "Research",
          date: "30.10.23",
        },
        {
          id: 8,
          title: "Название задачи",
          theme: "purple",
          category: "Copywriting",
          date: "30.10.23",
        },
        {
          id: 9,
          title: "Название задачи",
          theme: "orange",
          category: "Web Design",
          date: "30.10.23",
        },
      ],
    },
    {
      title: "Тестирование",
      cards: [
        {
          id: 10,
          title: "Название задачи",
          theme: "green",
          category: "Research",
          date: "30.10.23",
        },
      ],
    },
    {
      title: "Готово",
      cards: [
        {
          id: 11,
          title: "Название задачи",
          theme: "green",
          category: "Research",
          date: "30.10.23",
        },
      ],
    },
  ];

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {columnsData.map((column, index) => (
              <Column key={index} title={column.title} cards={column.cards} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
