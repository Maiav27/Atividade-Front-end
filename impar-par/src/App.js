
import './App.css';
import {useState, useEffect} from 'react'
function App() {
    const [texto, setTexto] = useState('Par')
    const [valor, setValor] = useState(0)

   useEffect(() =>{
       if(valor % 2 === 0){
         setTexto('Par')
       }else{
         setTexto('Impar')
       }
   }, [valor])

   /* const Contador = () => {
        setValor(valor + 1)
        console.log(valor)
       if(valor % 2  === 0){
         setTexto('Par')
         setValor(valor+1)
        // console.log(valor)
         console.log('par')
         
       }else{
         setTexto('Impar')
         setValor(valor+1)
      //   console.log(valor)
         console.log('impar')
       }
       console.log(valor)
    } */
  return (
    <div className="App">
         
         <button onClick={() => setValor(valor + 1)}>{texto}</button>
            <p>{valor}</p>
    </div>
  );
}

export default App;
