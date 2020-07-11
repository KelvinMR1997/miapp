import React from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';
const Cliente = (props) => {

    const handleDeleteCliente = (idCliente) => {

        Swal.fire({
            title: '¿Estas seguro?',
            text: "Una vez eliminado no será posible recuperarlo!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si,eliminar!'
        }).then((result) => {
            //si el valor es verdadero
            if (result.value) {
                //Se elimina de forma asincrona
                Axios.delete(`http://localhost:5000/clientes/${idCliente}`).then(res => {
                    Swal.fire(
                        'Eliminado',
                        'Has valido verga! :v',
                        'success'
                      )
                    props.consultarAPI();
                }).catch(error => {
                    console.log(error);
                })
            }
        })






    }
    return (
        <tr>
            <th scope="row" />
            <td>{props.nombre}</td>
            <td>{props.apellido}</td>
            <td>{props.empresa}</td>
            <td>{props.email}</td>
            {/* Ultimo elemento con botones */}
            <td className="anchor">{props.telefono} <div className="col-12 col-md-12 col-sm-12"><button className="btn btn-info ml-5 mr-1 ">Editar</button>
                <button className="btn-danger btn" onClick={() => handleDeleteCliente(props._id)}>Eliminar</button>
            </div>
            </td>
        </tr>
    );
}

export default Cliente;