// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../contexts/AuthContext';
// import { 
//     SExitOverlay, 
//     SExitModal, 
//     SExitTitle, 
//     SExitButtonGroup, 
//     SExitButtonYes, 
//     SExitButtonNo 
// } from './ExitPage.styled';

// function ExitPage() {
//     const navigate = useNavigate();
//     const { logout } = useAuth();

//     const handleExit = () => {
//         logout();
//         navigate('/login');
//     };

//     const handleCancel = () => {
//         navigate(-1);
//     };

//     return (
//         <>
//             <SExitOverlay />
//             <SExitModal>
//                 <SExitTitle>Выйти из аккаунта?</SExitTitle>
//                 <SExitButtonGroup>
//                     <SExitButtonYes onClick={handleExit}>
//                         Да, выйти
//                     </SExitButtonYes>
//                     <SExitButtonNo onClick={handleCancel}>
//                         Нет, остаться
//                     </SExitButtonNo>
//                 </SExitButtonGroup>
//             </SExitModal>
//         </>
//     );
// }

// export default ExitPage;