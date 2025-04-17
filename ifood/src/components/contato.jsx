import { useState } from "react";




function Contato(){
   const [contato1, setContato1] = useState('')
   const [nome, setNome] = useState('')
   const [email, setEmail] = useState('')
   return(
      
         <div>
           <h2></h2>
           <form>Nome:
            
            <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder= {`Digite seu ${contato1}`}
            />
            </form>
            
            
            <form>Email:
            <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder= {`Digite seu ${contato1}`}
            />
            </form>

           <h3>Sexo:</h3>
           <label>
           <input
             type="radio"
             value="Masculino"
             checked={contato1 === "Masculino"}
             onChange={(e) => setContato1(e.target.value)}
           />
           Masculino
           </label>

           <label>
           <input
             type="radio"
             value="Feminino"
             checked={contato1 === "Feminino"}
             onChange={(e) => setContato1(e.target.value)}
           />
         Feminino
           </label>
           </div>
   )}

export default Contato