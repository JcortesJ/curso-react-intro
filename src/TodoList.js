import './App.css';

//aqui hacemos uso de los props para que el componente
//tenga etiqueta de apertura  y cierre

function TodoList(props){
    return(<ul>
        {props.children}
    </ul>);

}

export {TodoList};