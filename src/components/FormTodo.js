import React from 'react';
import { commaLists } from 'common-tags';

class FormTodo extends React.Component {
    /* Establecemos un estado con los datos o puntos del formulario a completar vacios.*/
    constructor() {
        super()
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
            //priority se completa porque lleva radiobuttom.
        }
    }






    handlerImput = (e) => {
        //destructuring Esto es generico aplica a cualquier input. 
        /* al hacer una constante cuyo valor/clave va a ser igual a  su contenido se la simplifica conn const [] o {} si es objeto.
        Aqui decimos 
        queremos el valor, y el nombre y que ese sea igual a e.target que es el que escribo.  */
        const { value, name } = e.target;
        this.setState({
            [name]: value

        });
        

    }
    handlerSubmit = (e) => {
        (e).preventDefault();
        // la propiedad onAdd la pasamos desde header a su etiqueta. 
        this.props.onAdd(this.state);
        console.log(this.state)
    }

    render() {


        return (
            <div className="card col-md-3 m-4" >
                <form onSubmit={this.handlerSubmit} className="card-body">
                    <div className="form-group">
                        <input
                            type="text"
                            name="title"
                            className="form-control"

                            onChange={this.handlerImput}
                            placeholder="Title"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="responsible"
                            className="form-control"

                            onChange={this.handlerImput}
                            placeholder="Responsible"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="description"
                            className="form-control"

                            onChange={this.handlerImput}
                            placeholder="Description"
                        />
                    </div>
                    <div className="form-group">
                        <select
                            name="priority"
                            className="form-control"

                            onChange={this.handlerImput}
                        >
                            <option>low</option>
                            <option>medium</option>
                            <option>high</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        cargar
          </button>
                </form>
            </div>
        )
    }

}
export default FormTodo 