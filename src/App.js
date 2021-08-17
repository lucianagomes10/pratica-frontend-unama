import React, { useState } from "react";
import './App.css';

function validate (formValues){
  const errors ={};
  if(!formValues.email.includes('@')){
  errors.email = 'Insira um e-mail válido';
  }
  if(!formValues.confirme.includes('@')){
    errors.confirme = 'Insira um e-mail válido';
    }
  return errors;
}



function App() {
    
  const [errors, setErrors] = useState ({});
       
        //confirme: 'Os campos devem ser iguais'
        //email: 'Insira um campo válido'


  const [formValues, setFormValues] = useState({});
  const handleInputChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setFormValues ({... formValues, [name]: value });
    
   };
  const handlesubmit = (e) =>{
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log ('handleSubmit', data);
    //console.log ('handleSubmit');

    setErrors(validate(formValues));
  };
  
  console.log ('formValues',formValues);
  

  return ( 
    
    
    <form onSubmit = {handlesubmit}> 
       <label>
        Email
          <input type = "text" name = "email" placeholder = "Email@email.com" onChange={handleInputChange} value={formValues.email || ''}/>
       </label>
       {errors.email && <span> {errors.email} </span>}

       <label>
        Confirme o email
         <input type = "text" name = "confirme" placeholder = "Email@email.com"onChange={handleInputChange}value={formValues.confirme || ''} />
       </label>
       {errors.confirme && <span>{errors.confirme}</span>}
       <label>
        Nome
          <input type = "text" name =  "nome" placeholder = "Luciana" onChange={handleInputChange} value={formValues.nome || ''} />
       </label>
       <label>
        Sobrenome
          <input type = "text" name = "sobrenome" placeholder = "Gomes" onChange={handleInputChange} value={formValues.sobrenome || ''} />
       </label>
       <label>
        CPF
          <input type = "text" name = "CPF" placeholder = "000.000.000-00" onChange={handleInputChange} value={formValues.CPF || ''}/>
       </label>
       <label>
        Telefone
          <select name = "tipoTelefone" placeholder = "Tipo" onChange={handleInputChange} value={formValues.tipoTelefone || ''}>
            <option value = "celular"> Celular </option>
            <option value = "fixo"> Fixo </option>
          </select>
          <input type = "text" name = "telefone" placeholder = "xxxxx-xxxx" onChange={handleInputChange} value={formValues.telefone || ''}  />
       </label>
    <div className = "genero-data">
        <div className = "radios">
          <label>Gênero</label>
          <label>
           <input 
             type = "radio" 
             value ="feminino" 
             name = "genero" 
             onChange = {handleInputChange}
           /> Feminino
          </label>

          <label>
         <input 
             type = "radio" 
             value ="masculino" 
             name = "genero" 
             onChange = {handleInputChange}
           /> Masculino
         </label>
         
         <label> 
          <input 
             type = "radio" 
             value ="outros" 
             name = "genero" 
             onChange = {handleInputChange}
           /> Outros
          </label>
      </div>   
      <div className = "data">
      <label>
        Data de Nascimento
        <input type = "text" name = "data" placeholder = "00/00/0000" onChange={handleInputChange} value={formValues.data || ''} />

      </label>
      </div>
    </div>  
          
      
      <button type = "submit"> Concluir </button>
    
    </form>
  

  );
};
export default App;
