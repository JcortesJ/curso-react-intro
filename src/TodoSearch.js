//la mejor práctica es utilizar exports
//nombrados para evitar errores en el futuro
import './App.css';

function TodoSearch(){
    return(
        <input placeholder={"Sacar a pasear al perro"}></input>
    );
}
//export nombrado
export {TodoSearch}