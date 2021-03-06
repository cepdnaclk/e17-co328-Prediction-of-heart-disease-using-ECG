import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import RegistrationPage from './pages/Registration';

function App(){
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="registration" element={<RegistrationPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );

}

export default App;