import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

/* import App from "./App" */
/* import {PayNormal} from '../view/CardPay/PayNormal'; */

/* import { PayPremium } from '../view/CardPay/PayPremium'; */
import Home from '../view/Home/Home';
import { PayPremium } from '../view/CardPay/PayPremium';
import { PayNormal } from '../view/CardPay/PayNormal';
import { ConfirmacionPlanPremiun } from '../view/Confirmations/ConfirmacionPlanPremiun';
import { ConfirmacionPlanStandar } from '../view/Confirmations/ConfirmacionPlanStandar';



/* -----------------RUTAS DE NAVEGACION ----------------*/
export const Navigation = () => {

  return (
    <Router>
      <div className="Navigation">
        <Routes>
          <Route path="/credit-card59" element={<PayPremium/>} />
          <Route path="/credit-card29" element={<PayNormal/>} />
          <Route path="/confirmation-premium" element={<ConfirmacionPlanPremiun/>} />
          <Route path="/confirmation-standart" element={<ConfirmacionPlanStandar/>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
