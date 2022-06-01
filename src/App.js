import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import NewUserPage from "./pages/NewUserPage";
import styled from "styled-components";

export const Container = styled.div`
    margin: 3%;
    min-width: 320px;
`;

function App() {
  return (
    <Container>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<UserPage />} />
        <Route path="/new" element={<NewUserPage />} />
      </Routes>
    </BrowserRouter>
    </Container>
  );
}

export default App;
