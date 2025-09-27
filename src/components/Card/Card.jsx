import { 
  SCardItem,
  SCardContainer,
  SCardGroup,
  SCardTheme,
  SCardButton,
  SCardBtn,
  SCardTitle,
  SCardContent,
  SCardDate,
  SDateText,
  SCardDropdownMenu,
  SCardDropdownItem
} from "./Card.styled.js";
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Card({ title, topic, date, id, onDelete }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Закрытие dropdown при клике вне его
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Обработчик начала перетаскивания
  const handleDragStart = (e) => {
    e.dataTransfer.setData('taskId', id);
    e.dataTransfer.effectAllowed = 'move';
  };

  // Обработчик клика по кнопке меню
  const handleMenuClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Обработчик удаления задачи
  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (window.confirm('Вы уверены, что хотите удалить эту задачу?')) {
      onDelete(id);
    }
    setIsDropdownOpen(false);
  };

  // Обработчик редактирования
  const handleEdit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/card/${id}`);
    setIsDropdownOpen(false);
  };

  return (
    <SCardItem 
      draggable="true"
      onDragStart={handleDragStart}
    >
      <SCardContainer>
        <SCardGroup>
          <SCardTheme $themecolor={topic}>
            <p>{topic}</p>
          </SCardTheme>
          <SCardButton 
            href="#"
            onClick={handleMenuClick}
            ref={dropdownRef}
          >
            <SCardBtn></SCardBtn>
            <SCardBtn></SCardBtn>
            <SCardBtn></SCardBtn>
            
            {isDropdownOpen && (
              <SCardDropdownMenu>
                <SCardDropdownItem onClick={handleEdit}>
                  Редактировать
                </SCardDropdownItem>
                <SCardDropdownItem onClick={handleDelete} className="delete">
                  Удалить
                </SCardDropdownItem>
              </SCardDropdownMenu>
            )}
          </SCardButton>
        </SCardGroup>
        <SCardContent>
          <Link to={`/card/${id}`} style={{ textDecoration: 'none' }}>
            <SCardTitle>{title}</SCardTitle>
          </Link>
          <SCardDate>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <g clipPath="url(#clip0_1_415)">
                <path
                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                  stroke="#94A6BE"
                  strokeWidth="0.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                  stroke="#94A6BE"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_415">
                  <rect width="13" height="13" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <SDateText>{date}</SDateText>
          </SCardDate>
        </SCardContent>
      </SCardContainer>
    </SCardItem>
  );
}

export default Card;
