import React,{useState} from "react";
import UseForm from "./UseForm";
import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
/* import "./CreditCardForm.css"; */
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import './Pay.css'
import flecha from '../../img/flecha.png'


export const PayPremium = () => {

  const [mostrarComponente, setMostrarComponente] = useState(false);
  const { handleChange, handleFocus, handleSubmit, values, errors } = UseForm();
  return (
    <div>
    <header className="AppHeader"> 
    <button>
    <img src={flecha} height ="35px" alt="img" /></button><a href="/"><h4>Volver</h4></a> 
    </header>
      <div className="container">
        <div className="box justify-content-center align-items-center">
          <div className="formDiv">
            <div className="creditCard">
              <Cards
                cvc={values.cardSecurityCode}
                expiry={values.cardExpiration}
                focused={values.focus}
                name={values.cardName}
                number={values.cardNumber}
              />
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group><label>Nombre del titular</label>
                <Form.Control
                  type="text"
                  id="cardName"
                  data-testid="cardName"
                  name="cardName"
                  placeholder="Juan Perez"
                  value={values.cardName}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  isValid={errors.cname}
                />
              </Form.Group>

              <Form.Group><label>Número de tarjeta</label>
                <Form.Control
                  type="number"
                  id="cardNumber"
                  data-testid="cardNumber"
                  name="cardNumber"
                  placeholder="Ejm: 5215723272299329"
                  value={values.cardNumber}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  isValid={errors.cnumber}
                />
              </Form.Group>
              <Row>

                <Col>
                  <label>Código de seguridad</label>
                  <Form.Group>
                    <Form.Control
                      type="number"
                      id="cardSecurityCode"
                      data-testid="cardSecurityCode"
                      name="cardSecurityCode"
                      placeholder="CVV"
                      value={values.cardSecurityCode}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      isValid={errors.ccvv}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <label>Fecha de vencimiento</label>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      id="cardExpiration"
                      data-testid="cardExpiration"
                      name="cardExpiration"
                      placeholder="MM/AAAA"
                      value={values.cardExpiration}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      isValid={errors.cexp}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                
              </Row>
              <Button
                size={"block"}
                data-testid="validateButton"
                id="validateButton"
                type="submit"
                onClick={() => setMostrarComponente(!mostrarComponente)}
              >
                Pagar s/59.00
              </Button>
            

            </Form>
          </div>
          <Alert
            id="alertMessage"
            data-testid="alertMessage"
            variant={errors.variant}
            show={errors.show}
          >
            {errors.message}
          </Alert>{" "}
        </div>
      </div>
      <div className={mostrarComponente ? "show-element" : null}>
        {mostrarComponente && <a href="/confirmation-premium">Ver Resumen de compra ➜ </a>}
      </div>
      <div className="description">
        <span><strong>Plan Premium:</strong> <br/> s/59 al mes <a href="/credit-card29"> cambiar a plan Standart</a></span>
        
        <h6>El plan Incluye: </h6>
        <ul>
          <li>Contenido Exclusivos</li>
          <li>Navegación ilimitada</li>
          <li>Club de subscriptores</li>
          <li>Hasta el 50%menos publicidad</li>
        </ul>

      </div>



      {/* <SelectPlan/> */}
    </div>
  );
};


