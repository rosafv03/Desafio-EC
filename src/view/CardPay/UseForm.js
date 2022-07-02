import { useState } from 'react'
import ValidateInfo from './ValidateInfo';



const UseForm = () => {


    const [values, setValues] = useState({
        cardName: '',
        cardNumber: '',
        cardType: '',
        cardExpiration: '',
        cardSecurityCode: '',
        cardPostalCode: '',
        focus: ''
    })

    const [errors, setErrors] = useState({})

    const handleFocus = (e) => {
        setValues({ 
            ...values,
            focus: (e.target.name === 'cardSecurityCode') ? 'cvc' : e.target.name
        });
    }

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(ValidateInfo(values))
    };
    

/*     const handleNormal=async(e)=>{
        e.preventDefault()
try{
    
    
    Swal.fire({

         icon: 'success',
         title: 'Tu pago fue procesado con éxito.',
         showConfirmButton: false,
         timer: 5500
       })
       navigate('/confirmation-standart')
}
catch(error){
console.log(error)
} */
        

        
    

    return { handleChange, handleFocus, handleSubmit, values, errors  };
};

export default UseForm; 