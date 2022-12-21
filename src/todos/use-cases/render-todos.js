import { Todo } from "../models/todo.model";
import { createTodoHTML } from "./";

let element;

/**
 * 
 * @param {String} elementId 
 * @param {Todo} todos Es un array de Todos
 */
export const renderTodos = ( elementId, todos = [] ) => {

    if( !element ) 
        element = document.querySelector( elementId );

    if( !element ) throw new Error( `Element ${ elementId } not found` );

    element.innerHTML = ''; //Limpiar la información

    todos.forEach( todo => {
        element.append( createTodoHTML( todo ) );
    });

}