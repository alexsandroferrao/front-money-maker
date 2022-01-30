import { Route, Routes } from 'react-router';
import Home from './pages/home/Home.page';
import MoneyPage from './pages/Money.page';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/money" element={<MoneyPage />} />
        <Route path="*" element={
          <main style={{ padding: "1rem" }}>
            <p>Não tem nada nessa página!</p>
          </main>
        } />
      </Routes>
    </div>
  );
}

export default App;
