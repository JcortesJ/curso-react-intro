//la mejor práctica es utilizar exports
//nombrados para evitar errores en el futuro
import './App.css';

function TodoCounter(){
    return(
       <h1>Hasta el momento has completado _ tareas !</h1>
    );
}
//export nombrado
export {TodoCounter}