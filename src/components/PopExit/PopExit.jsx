import {
  SPopExit,
  SPopExitContainer,
  SPopExitBlock,
  SPopExitTtl,
  SPopExitFormGroup,
  SPopExitYes,
  SPopExitNo
} from "./PopExit.styled.js";

function PopExit({ $isOpen, onClose, onConfirm }) {
  if (!$isOpen) return null;
  
  const handleExit = () => {
    if (onConfirm) {
      onConfirm();
    }
    onClose();
  };

  const handleStay = () => {
    onClose();
  };

  return (
    <SPopExit $isOpen={$isOpen}>
      <SPopExitContainer>
        <SPopExitBlock>
          <SPopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </SPopExitTtl>
          <SPopExitFormGroup>
            <SPopExitYes onClick={handleExit}>
              Да, выйти
            </SPopExitYes>
            <SPopExitNo onClick={handleStay}>
              Нет, остаться
            </SPopExitNo>
          </SPopExitFormGroup>
        </SPopExitBlock>
      </SPopExitContainer>
    </SPopExit>
  );
}

export default PopExit;