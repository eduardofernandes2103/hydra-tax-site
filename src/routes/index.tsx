import { BrowserRouter, Routes, Route } from "react-router-dom";
import DayTradeCalc from "../pages/DayTradeCalc/DayTradeCalc";
import Home from "../pages/Home/Home";
import Results from "../pages/Result/Result";
import SwingTradeCalc from "../pages/SwingTradeCalc/SwingTradeCalc";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dayTradeTaxCalculator" element={<DayTradeCalc />} />
        <Route path="/result" element={<Results />} />
        <Route path="/swingTradeTaxCalculator" element={<SwingTradeCalc />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
