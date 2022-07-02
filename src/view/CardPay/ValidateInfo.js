import valid from "card-validator";
import Swal from "sweetalert2";
/* import React from "react"; */
/* import { useNavigate } from "react-router-dom"; */

export default function ValidateInfo(values) {
/*   const navigate = useNavigate(); */


/*   const handleKitchen =()=>{
    navigate('/')
} */
  let errors = {};
  let creditCard = valid.number(values.cardNumber);
  creditCard.expirationDate = valid.expirationDate(values.cardExpiration);
  creditCard.cvv = valid.cvv(values.cardSecurityCode);
  creditCard.cardholderName = valid.cardholderName(values.cardName);
  creditCard.postalCode = valid.postalCode(values.cardPostalCode);

  errors.show = true;
 /*  errors.variant = "danger"; */
/*   errors.message = "Un error desconocido ocurrió. Por favor, inténtelo de nuevo más tarde" */
  errors.cname = false;
  errors.cnumber = false;
  /* errors.ctype = false; */
  errors.cexp = false;
  errors.ccvv = false;
  errors.cpostal = false;


  //Card CVV expiration
  if (values.cardSecurityCode === null || !values.cardSecurityCode.trim()) {
    errors.message = "Debes completar el campo CVV";
  } else if (creditCard.cvv.isValid) {
    errors.ccvv = true;
  } else {
    errors.message = "Debes ingresar un códgio de sguridad válido";
  }

  //Card Expiration Verification
  if (values.cardExpiration === null || !values.cardExpiration.trim()) {
    errors.message = "Debes ingresar la fecha de vencimiento de la tarjeta";
  } else if (creditCard.expirationDate.isValid) {
    errors.cexp = true;
  } else {
    errors.message = "El dato ingresado no es válido.";
  }


  //Card Number Verification
  if (values.cardNumber === null || !values.cardNumber.trim()) {
    errors.message = "Debes ingresar un numero de tarjeta";
  } else if (creditCard.isValid) {
    errors.cnumber = true;
  } else {
    errors.message = "El número de tarjeta ingresado no es válido.";
  }

  //Cardholder Name Verification
  if (values.cardName === null || !values.cardName.trim()) {
    errors.message = "Debes ingresar el nombre del titular de la tarjeta.";
  } else if (creditCard.cardholderName.isValid) {
    errors.cname = true;
  } else {
    errors.message = "Debes ingresar un nombre válido.";
  }

  if (
 /*    errors.ctype && */
    errors.cname &&
    errors.cnumber &&
    errors.cexp &&
    /* errors.cpostal && */
    errors.ccvv
  ) {
/*     errors.variant = "success";
    errors.message = "Tarjeta validada."; */


    Swal.fire({
     /*  position: 'top-end', */
      icon: 'success',
      title: 'Tu pago fue procesado con éxito.',
      showConfirmButton: false,
      timer: 2500
    })
/* navigate('/') */
  }

  return errors;
}
