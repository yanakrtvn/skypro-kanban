import { useState } from "react";
import styled from "styled-components";

const SCalendar = styled.div`
  width: 182px;
  margin-bottom: 20px;
`;

const SCalendarTtl = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

const SCalendarBlock = styled.div`
  display: block;
`;

const SCalendarPeriod = styled.div`
  padding: 0 7px;
`;

const CalendarP = styled.p`
  color: #94A6BE;
  font-size: 10px;
  line-height: 1;
  padding-top: 10px;
  
  span {
    color: #000000;
  }
`;

const CalendarContent = styled.div`
  margin-bottom: 12px;
`;

const CalendarDaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`;

const CalendarDayName = styled.div`
  color: #94A6BE;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
  width: 22px;
  text-align: center;
`;

const CalendarCells = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;
`;

const CalendarCell = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94A6BE;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;
  
  &.other-month {
    opacity: 0;
    cursor: default;
  }
  
  &.cell-day:hover {
    color: #94A6BE;
    background-color: #EAEEF6;
  }
  
  &.active-day {
    background-color: #94A6BE;
    color: #FFFFFF;
  }
  
  &.current-day {
    font-weight: 700;
  }
`;

const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavAction = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    fill: #94A6BE;
  }
`;

function Calendar({ selectedDate, onDateChange }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    return firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;
  };
  
  const isToday = (date) => {
    const today = new Date();
    return date.getDate() === today.getDate() && 
           date.getMonth() === today.getMonth() && 
           date.getFullYear() === today.getFullYear();
  };
  
  const isSelected = (date) => {
    if (!selectedDate) return false;
    
    const selected = new Date(selectedDate);
    return date.getDate() === selected.getDate() && 
           date.getMonth() === selected.getMonth() && 
           date.getFullYear() === selected.getFullYear();
  };
  
  const handleDateClick = (date) => {
    if (onDateChange) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      onDateChange(`${year}-${month}-${day}`);
    }
  };
  
  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };
  
  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };
  
  const formatDisplayDate = (dateString) => {
    if (!dateString) return 'Не указано';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('ru-RU');
    } catch {
      return 'Не указано';
    }
  };
  
  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const cells = [];
    
    for (let i = 0; i < firstDay; i++) {
      cells.push(
        <CalendarCell key={`empty-${i}`} className="other-month">
          {''}
        </CalendarCell>
      );
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const cellClasses = [
        'cell-day',
        isToday(date) ? 'current-day' : '',
        isSelected(date) ? 'active-day' : ''
      ].filter(Boolean).join(' ');
      
      cells.push(
        <CalendarCell
          key={day}
          className={cellClasses}
          onClick={() => handleDateClick(date)}
        >
          {day}
        </CalendarCell>
      );
    }
    
    return cells;
  };
  
  const monthNames = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ];

  return (
    <SCalendar>
      <SCalendarTtl className="subttl">Даты</SCalendarTtl>
      <SCalendarBlock>
        <CalendarContent>
          <CalendarNav>
            <NavActions>
              <NavAction onClick={prevMonth}>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 1L1 5L5 9" stroke="#94A6BE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </NavAction>
            </NavActions>
            
            <div className="calendar__month">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </div>
            
            <NavActions>
              <NavAction onClick={nextMonth}>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9L5 5L1 1" stroke="#94A6BE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </NavAction>
            </NavActions>
          </CalendarNav>
          
          <CalendarDaysNames>
            {daysOfWeek.map(day => (
              <CalendarDayName key={day}>{day}</CalendarDayName>
            ))}
          </CalendarDaysNames>
          
          <CalendarCells>
            {renderCalendar()}
          </CalendarCells>
          <SCalendarPeriod>
            <CalendarP className="date-end">
              Срок исполнения: <span>{formatDisplayDate(selectedDate)}</span>
            </CalendarP>
          </SCalendarPeriod>
        </CalendarContent>
      </SCalendarBlock>
    </SCalendar>
  );
}

export default Calendar;