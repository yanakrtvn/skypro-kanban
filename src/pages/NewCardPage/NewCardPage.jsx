import Header from "../../components/Header/Header.jsx";

function NewCardPage() {
    return (
        <>
            <Header />
            <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
                <h2>Добавление новой задачи</h2>
                <div style={{ 
                    border: '1px solid #ddd', 
                    padding: '20px', 
                    borderRadius: '8px',
                    marginTop: '20px'
                }}>
                    <p>Здесь будет форма добавления новой задачи</p>
                    <form style={{ marginTop: '20px' }}>
                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ display: 'block', marginBottom: '5px' }}>Название задачи:</label>
                            <input 
                                type="text" 
                                style={{ 
                                    width: '100%', 
                                    padding: '10px', 
                                    border: '1px solid #ccc',
                                    borderRadius: '4px'
                                }}
                                placeholder="Введите название задачи"
                            />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ display: 'block', marginBottom: '5px' }}>Описание:</label>
                            <textarea 
                                style={{ 
                                    width: '100%', 
                                    padding: '10px', 
                                    border: '1px solid #ccc',
                                    borderRadius: '4px',
                                    height: '100px'
                                }}
                                placeholder="Введите описание задачи"
                            />
                        </div>
                        <button 
                            type="submit"
                            style={{ 
                                padding: '10px 20px', 
                                backgroundColor: '#565EEF',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            Создать задачу
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default NewCardPage;