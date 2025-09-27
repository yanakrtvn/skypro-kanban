import {
  SPopBrowse,
  SPopBrowseContainer,
  SPopBrowseBlock,
  SPopBrowseContent,
  SPopBrowseTopBlock,
  SPopBrowseTtl,
  SPopBrowseWrap,
  SFormBrowse,
  SFormBrowseBlock,
  SFormBrowseArea,
  SStatus,
  SStatusP,
  SStatusThemes,
  SStatusTheme,
  SCalendar,
  SCalendarTtl,
  SCalendarBlock,
  SCalendarContent,
  SCalendarDaysNames,
  SCalendarCells,
  SCalendarCell,
  SCalendarNav,
  SCalendarPeriod,
  SNavActions,
  SNavAction,
  SCategories,
  SCategoriesP,
  SCategoriesTheme,
  SPopBrowseBtnBrowse,
  SPopBrowseBtnEdit
} from "./PopBrowse.styled.js";

function PopBrowse({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <SPopBrowse isOpen={isOpen}>
      <SPopBrowseContainer>
        <SPopBrowseBlock>
          <SPopBrowseContent>
            <SPopBrowseTopBlock>
              <SPopBrowseTtl>Название задачи</SPopBrowseTtl>
              <SCategoriesTheme className="_orange _active-category">
                <p className="_orange">Web Design</p>
              </SCategoriesTheme>
            </SPopBrowseTopBlock>
            
            <SStatus>
              <SStatusP className="subttl">Статус</SStatusP>
              <SStatusThemes>
                <SStatusTheme className="_hide">
                  <p>Без статуса</p>
                </SStatusTheme>
                <SStatusTheme className="_gray">
                  <p className="_gray">Нужно сделать</p>
                </SStatusTheme>
                <SStatusTheme className="_hide">
                  <p>В работе</p>
                </SStatusTheme>
                <SStatusTheme className="_hide">
                  <p>Тестирование</p>
                </SStatusTheme>
                <SStatusTheme className="_hide">
                  <p>Готово</p>
                </SStatusTheme>
              </SStatusThemes>
            </SStatus>
            
            <SPopBrowseWrap>
              <SFormBrowse id="formBrowseCard" action="#">
                <SFormBrowseBlock>
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <SFormBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                  ></SFormBrowseArea>
                </SFormBrowseBlock>
              </SFormBrowse>
              
              <SCalendar>
                <SCalendarTtl className="subttl">Даты</SCalendarTtl>
                <SCalendarBlock>
                  <SCalendarNav>
                    <div className="calendar__month">Сентябрь 2023</div>
                    <SNavActions>
                      <SNavAction data-action="prev">
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                          <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
                        </svg>
                      </SNavAction>
                      <SNavAction data-action="next">
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                          <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
                        </svg>
                      </SNavAction>
                    </SNavActions>
                  </SCalendarNav>
                  
                  <SCalendarContent>
                    <SCalendarDaysNames>
                      <div className="calendar__day-name">пн</div>
                      <div className="calendar__day-name">вт</div>
                      <div className="calendar__day-name">ср</div>
                      <div className="calendar__day-name">чт</div>
                      <div className="calendar__day-name">пт</div>
                      <div className="calendar__day-name -weekend-">сб</div>
                      <div className="calendar__day-name -weekend-">вс</div>
                    </SCalendarDaysNames>
                    <SCalendarCells>
                      <SCalendarCell className="_other-month">28</SCalendarCell>
                      <SCalendarCell className="_other-month">29</SCalendarCell>
                      <SCalendarCell className="_other-month">30</SCalendarCell>
                      <SCalendarCell className="_cell-day">31</SCalendarCell>
                      <SCalendarCell className="_cell-day">1</SCalendarCell>
                      <SCalendarCell className="_cell-day _weekend">2</SCalendarCell>
                      <SCalendarCell className="_cell-day _weekend">3</SCalendarCell>
                      <SCalendarCell className="_cell-day">4</SCalendarCell>
                      <SCalendarCell className="_cell-day">5</SCalendarCell>
                      <SCalendarCell className="_cell-day ">6</SCalendarCell>
                      <SCalendarCell className="_cell-day">7</SCalendarCell>
                      <SCalendarCell className="_cell-day _current">8</SCalendarCell>
                      <SCalendarCell className="_cell-day _weekend _active-day">9</SCalendarCell>
                      <SCalendarCell className="_cell-day _weekend">10</SCalendarCell>
                      <SCalendarCell className="_cell-day">11</SCalendarCell>
                      <SCalendarCell className="_cell-day">12</SCalendarCell>
                      <SCalendarCell className="_cell-day">13</SCalendarCell>
                      <SCalendarCell className="_cell-day">14</SCalendarCell>
                      <SCalendarCell className="_cell-day">15</SCalendarCell>
                      <SCalendarCell className="_cell-day _weekend">16</SCalendarCell>
                      <SCalendarCell className="_cell-day _weekend">17</SCalendarCell>
                      <SCalendarCell className="_cell-day">18</SCalendarCell>
                      <SCalendarCell className="_cell-day">19</SCalendarCell>
                      <SCalendarCell className="_cell-day">20</SCalendarCell>
                      <SCalendarCell className="_cell-day">21</SCalendarCell>
                      <SCalendarCell className="_cell-day">22</SCalendarCell>
                      <SCalendarCell className="_cell-day _weekend">23</SCalendarCell>
                      <SCalendarCell className="_cell-day _weekend">24</SCalendarCell>
                      <SCalendarCell className="_cell-day">25</SCalendarCell>
                      <SCalendarCell className="_cell-day">26</SCalendarCell>
                      <SCalendarCell className="_cell-day">27</SCalendarCell>
                      <SCalendarCell className="_cell-day">28</SCalendarCell>
                      <SCalendarCell className="_cell-day">29</SCalendarCell>
                      <SCalendarCell className="_cell-day _weekend">30</SCalendarCell>
                      <SCalendarCell className="_other-month _weekend">1</SCalendarCell>
                    </SCalendarCells>
                  </SCalendarContent>

                  <input type="hidden" id="datepick_value" value="08.09.2023" />
                  <SCalendarPeriod>
                    <p className="calendar__p date-end">
                      Срок исполнения: <span className="date-control">09.09.23</span>
                    </p>
                  </SCalendarPeriod>
                </SCalendarBlock>
              </SCalendar>
            </SPopBrowseWrap>
            
            <SCategories className="theme-down">
              <SCategoriesP className="subttl">Категория</SCategoriesP>
              <SCategoriesTheme className="_orange _active-category">
                <p className="_orange">Web Design</p>
              </SCategoriesTheme>
            </SCategories>
            
            <SPopBrowseBtnBrowse>
              <div className="btn-group">
                <button className="btn-browse__edit _btn-bor _hover03">
                  <a href="#">Редактировать задачу</a>
                </button>
                <button className="btn-browse__delete _btn-bor _hover03">
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button className="btn-browse__close _btn-bg _hover01" onClick={handleClose}>
                <a href="#">Закрыть</a>
              </button>
            </SPopBrowseBtnBrowse>
            
            <SPopBrowseBtnEdit className="_hide">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01">
                  <a href="#">Сохранить</a>
                </button>
                <button className="btn-edit__edit _btn-bor _hover03">
                  <a href="#">Отменить</a>
                </button>
                <button className="btn-edit__delete _btn-bor _hover03" id="btnDelete">
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button className="btn-edit__close _btn-bg _hover01" onClick={handleClose}>
                <a href="#">Закрыть</a>
              </button>
            </SPopBrowseBtnEdit>
          </SPopBrowseContent>
        </SPopBrowseBlock>
      </SPopBrowseContainer>
    </SPopBrowse>
  );
}

export default PopBrowse;