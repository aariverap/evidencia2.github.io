import React,{ useState} from 'react';

const Contador = () => {
    // Declara una nueva variable de estado, que llamaremos "count".
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>Haz hecho clic {count} veces</p>
        <button onClick={() => setCount(count + 1)}>
          Clic
        </button>
      </div>
    );
  }
  
export default Contador;