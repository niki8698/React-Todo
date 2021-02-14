import React from 'react';
import {connect} from 'react-redux';
import {deleteTodo} from '../../Actions/action'

const List = (props) => {
    return (
        <div>
            <ul>
                {props.todos.map((todo,index)=>(
                    <li key={index}>{todo.message}<button onClick={()=>props.dispatch(deleteTodo(todo.id))}>Delete</button></li>
                ))}
            </ul>
        </div>
    );
};

const mapStatetoProps =(state)=>({
    todos:state.todos.data,
});

export default connect(mapStatetoProps)(List)
