import { useState } from "react";

export default function LoginPage(){
  //State (état)
  const [inputValue, setInputValue] = useState('');

  //Comportement
  const handleSubmit = (event) => {
      event.preventDefault();
      alert(`Bonjour ${inputValue}`);
      setInputValue('');  
  }

  const handleChange = (event) => {
    setInputValue(event.target.value);     
  }

  //Affichage (render)
  return (<div>
            <h1>Bienvenue chez nous !</h1> 
            <br />   
            <h2>Connectez-vous</h2> 
            <form action="submit" onSubmit={handleSubmit}>
              <input type="text" value={inputValue} onChange={handleChange} required placeholder="Entrez votre prénom..."/>
              <button>Accéder à votre espace</button>
            </form> 
          </div>)  

}