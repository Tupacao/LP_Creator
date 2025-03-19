import { BrowserRouter, Routes, Route } from "react-router-dom";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Teste</h1>} />
        <Route path="*" element={<h1>Teste</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;