import { useState } from "react"
import { Mensaje } from "./Mensaje";
import { PlanPremiun } from "./PlanPremiun";
import { PlanStandar } from "./PlanStandar"
/* import { CreditCardForm59 } from './../../components/CreditCardForm59';
import { useNavigate } from "react-router-dom";
import { Navigation } from './../Navigation'; */
export const BodySeccion = () => {

  const [selcPlan, setSelcPlan] = useState('planStandar')



  console.log(selcPlan);

  return (
    <>
      <div className="App__conten-opciones">
        <input type="radio" value={selcPlan} name="selecPlan"  checked onClick={() => setSelcPlan('planStandar')} /> 

        <b>Plan. Estandar</b>
        <input type="radio" value={selcPlan} name="selecPlan" onClick={() => setSelcPlan('planPremiun')} /> 

        <b>Plan. Premiun</b>
      </div>

      <div className="App__conten-contenido">
      {
          (selcPlan==='') && <Mensaje/>
        }
        {
          (selcPlan === 'planStandar') && <PlanStandar/> 
        }
        {
          (selcPlan === 'planPremiun') && <PlanPremiun/>
        }

       
      </div>
      


    </>
  )
}
