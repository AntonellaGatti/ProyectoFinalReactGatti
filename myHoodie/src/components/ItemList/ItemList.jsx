// Contenedor de Presentacion 
import styles from "./ItemList.module.css"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";




const ItemList = ({ item }) => {
    const { idCategoria } = useParams()
    return (
        <div className="container-fluid mt-2">
            <div className="display text-center align-self-start">
                <h1 className="container-fluid mt-1">
                {idCategoria 
                ? `Nuestr@s ${idCategoria}` 
                : 'Nuestr@s Productos'}
                </h1>
            </div>
            <div>
                <ul className={`row justify-content-around ${styles['custom-list']}`}>
                {item.map((item) => (
                    <li key={item.id} className={`list-group-item justify-content-around col-md-2 mb-4 rounded ${styles['custom-card']}`}>
                        <Link to={`/item/${item.id}`}>
                            <img src={`../imgPublic/${item.imageId}.jpg`} className="img-fluid" />
                            <h4>{item.nombre}</h4>
                            <p>Categoria del Producto: {item.categoria}</p>
                            <p>Precio: AR$ {item.precio}</p>
                        </Link>
                    </li>
                ))}
            </ul>
            </div>
            
        </div>
    );
}

export default ItemList;

