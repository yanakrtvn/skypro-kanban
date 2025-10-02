import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
  outline: none;
}

ul li {
  list-style: none;
}

@keyframes card-animation {
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: auto;
    opacity: 1;
  }
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto";
  color: #000000;
  background-color: #F1F1F1;
}

._hover01:hover {
  background-color: #33399b;
}

._hover02:hover, .header__user:hover {
  color: #33399b;
}
._hover02:hover::after, .header__user:hover::after {
  border-left-color: #33399b;
  border-bottom-color: #33399b;
}

._hover03:hover {
  background-color: #33399b;
  color: #FFFFFF;
}
._hover03:hover a {
  color: #FFFFFF;
}

._orange {
  background-color: #FFE4C2;
  color: #FF6D00;
}

._green {
  background-color: #B4FDD1;
  color: #06B16E;
}

._purple {
  background-color: #E9D4FF;
  color: #9A48F1;
}

._gray {
  background: #94A6BE;
  color: #FFFFFF;
}

._active-category {
  opacity: 1 !important;
}

._hide {
  display: none;
}

._dark {
  display: none;
}

._btn-bor {
  border-radius: 4px;
  outline: none;
  background: transparent;
  color:  var(--Palette-Navy-60, rgba(86, 94, 239, 1));;
  box-sizing: border-box;
  border: 0.7px solid var(--Palette-Navy-60, rgba(86, 94, 239, 1));
  border-radius: 4px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 10px;
  text-align: center;
}
._btn-bor a {
  color: #565EEF;
}

._btn-bg {
  border-radius: 4px;
  background: var(--Palette-Navy-60, rgba(86, 94, 239, 1));
  border: none;
  outline: none;
  color: rgba(255, 255, 255, 1);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 10px;
  letter-spacing: 0%;
  text-align: center;
    
}
._btn-bg a {
  color: #FFFFFF;
}

@media screen and (max-width: 1200px) {
  .main__block {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 64px;
  }
  .main__content {
    display: block;
  }
  .main__column {
    width: 100%;
    margin: 0 auto;
    display: block;
  }
  .cards {
    width: 100%;
    display: flex;
    overflow-y: auto;
  }
  .cards__card {
    width: 220px;
    height: 130px;
    background-color: #FFFFFF;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
  }
}

@media screen and (max-width: 660px) {
  .pop-new-card {
    top: 70px;
  }
  .pop-new-card__container {
    padding: 0;
    justify-content: flex-start;
  }
  .pop-new-card__block {
    border-radius: 0;
  }
  .pop-new-card__wrap {
    display: block;
  }
  .calendar {
    max-width: 340px;
    width: 100%;
  }
  .calendar__ttl, .calendar__nav, .calendar__period {
    padding: 0;
  }
  .calendar .date-create {
    display: none;
    margin-bottom: 7px;
  }
  .calendar__p {
    font-size: 14px;
  }
  .calendar__day-name {
    font-size: 14px;
  }
  .calendar__cells {
    width: 344px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .calendar__cell {
    width: 42px;
    height: 42px;
    font-size: 14px;
  }
  .pop-browse {
    top: 70px;
  }
  .pop-browse__container {
    padding: 0;
    justify-content: flex-start;
  }
  .pop-browse__block {
    border-radius: 0;
  }
  .pop-browse__wrap {
    display: block;
  }
}

@media screen and (max-width: 495px) {
  .pop-new-card__container {
    padding: 0;
    justify-content: flex-start;
  }
  .pop-new-card__block {
    padding: 20px 16px 32px;
  }
  .pop-new-card__form {
    max-width: 100%;
    width: 100%;
    display: block;
  }
  .pop-new-card__calendar {
    width: 100%;
  }
  .form-new__area {
    max-width: 100%;
    height: 34px;
  }
  .form-new__create {
    width: 100%;
    height: 40px;
  }
  .pop-browse__block {
    padding: 20px 16px 32px;
  }
  .pop-browse__content .theme-down {
    display: block;
    margin-bottom: 20px;
  }
  .pop-browse__content .theme-top {
    display: none;
  }
  .pop-browse__form {
    max-width: 100%;
  }
  .pop-browse__calendar {
    width: 100%;
  }
  .pop-browse__btn-browse button, .pop-browse__btn-edit button {
    width: 100%;
    height: 40px;
  }
  .pop-browse__btn-browse .btn-group, .pop-browse__btn-edit .btn-group {
    width: 100%;
  }
  .pop-browse__btn-browse .btn-group button, .pop-browse__btn-edit .btn-group button {
    margin-right: 0px;
  }
  .form-browse__area {
    max-width: 100%;
  }
  .form-browse__area {
    height: 37px;
  }
}

@media only screen and (max-width: 375px) {
  .pop-exit__block {
    padding: 50px 20px;
  }
  .pop-exit__exit-yes {
    width: 100%;
    height: 40px;
    margin-right: 0;
    margin-bottom: 10px;
  }
  .pop-exit__exit-no {
    width: 100%;
    height: 40px;
  }
  .pop-exit__form-group {
    display: block;
  }
}
`;