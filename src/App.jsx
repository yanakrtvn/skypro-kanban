import AppRoutes from './components/AppRoutes.jsx';
import { GlobalStyles } from './components/GlobalStyles.styled.js';
import { AuthProvider } from './contexts/AuthProvider';
import { TaskProvider } from './contexts/TaskProvider';

function App() {
    return (
        <div>
            <GlobalStyles />
            <AuthProvider>
                <TaskProvider>
                    <AppRoutes />
                </TaskProvider>
            </AuthProvider>
        </div>
    );
}

export default App;