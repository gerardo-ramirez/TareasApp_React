import React from 'react';
import { todos } from './../todos.json';
import FormTodo from './FormTodo';


class Header extends React.Component {
    /*el contructor toma el json antes que se cargue la pagina.*/ 
    constructor() {
        super();// super para poder heredar todas las propiedades de React;
        this.state = {
            //inicializamos estados del json.
            todos 
        }
    }
    handlerAdd = (todo)=>{
        this.setState({
            todos: [...this.state.todos,todo]

        })


    }

    
    RemoveTodo = (todo) =>{
        //llamamos al todo y decimos que si es distinto a todoTitle  vaya a la lista. 
      const newTodos = this.state.todos.filter(currentTodo=> currentTodo.title != todo.title)
      /*en la constante newTodos se encuntra una nueva lista con los todos actualizados. 
      */
      
      this.setState({
          //
          todos: newTodos

      })
       

    }
    

    render() {
        /*para recorrer el array hago un map que me retorne una tarea y su indice.
        el metodo map es de js, y crea un array con los resultados de la funcion llamada
        aplicada a cada uno de sus elementos. 

        */  
  
        const tarea = this.state.todos.map((todo, i) => {
            return (
                //console.log(todo);
            // antes de que la pagina se cargue transformamos al json y lo devolvemos en div estilizado.
                <div className='col-md-3 m-4' key={i}>
                    <div className='card'>
                    <div className='card-header'> <h3>{todo.title}</h3>
                    <span className='badge badge-pill badge-danger ml-2'> {todo.priority}</span>
                    </div>
                    <div className='card-body'><p>{todo.description}</p></div>
                     <div className='card-footer'><h2>{todo.responsible}</h2>
                     <button className='btn btn-danger' onClick={()=>this.RemoveTodo(todo)}>Delete</button></div>
                     
                    </div>
                </div>
            );





        });

        return (
            <div>
                <div>
                    <div className='container mt-4'>
                    <div className='row'>
        {/*llamamos a la const que almacena el json transformado. 
        usamos la class row por bootstrap*/}

                        {tarea}


                    </div>
                    <div class="alert alert-success" role="alert">
                    Se crearon : {tarea.length} tareas! 
                    </div>
                    <FormTodo onAdd={this.handlerAdd}/>
                    </div>
                </div>
                

            </div>
        )
    }



}

export default Header;