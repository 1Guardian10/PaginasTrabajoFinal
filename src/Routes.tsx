import { BrowserRouter, Routes, Route } from "react-router-dom";
import BosquesPage from "./App/Bosques/Bosque";
import EnergiaEolicaPage from "./App/EnergiaEolica/EnergiaEolica";
import EnergiaSolarPage from "./App/EnergiaSolar/EnergiaSolar";
import FaunaLocalPage from "./App/FaunaLoca/FaunaLocal";
import BasuraResiduosPage from "./App/ResiduosBasura/BasuraResiduos";
import DesperdicioAguaPage from "./App/DesperdicioAgua/DesperdicioAgua";
import { Header } from "./Components/Header";

const Rutas = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/Bosques" element={<BosquesPage />} />
        <Route path="/EnergiaEolica" element={<EnergiaEolicaPage />} />
        <Route path="/EnergiaSolar" element={<EnergiaSolarPage />} />
        <Route path="/FaunaLocal" element={<FaunaLocalPage />} />
        <Route path="/BasuraResiduos" element={<BasuraResiduosPage />} />
        <Route path="/DesperdicioAgua" element={<DesperdicioAguaPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
