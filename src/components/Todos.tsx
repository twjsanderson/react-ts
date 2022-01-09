import { useState } from 'react';
import { TodoArray } from '../types';


const Todos = (): JSX.Element => {
    const [text, setText] = useState<string>('');
    const [textError, setTextError] = useState<string>('');
    const [todos, setTodos] = useState<TodoArray>([])

    const createTodo = (): any => {
        if (text.length > 2) {
            setTodos([
                ...todos, 
                {
                    text: text,
                    complete: false
                }
            ])
            setText('')
            setTextError('')
        } else {
            setTextError('Must be greater than 2 characters.') 
        }
    }

    const updateTodo = (index: number): any => {
        let newTodos = [...todos];
        newTodos[index].complete = !newTodos[index].complete;
        setTodos(newTodos);
    }

    const deleteTodo = (currIndex: number): any => {
        const filteredTodos = todos.filter((_, index: number) => currIndex !== index);
        setTodos(filteredTodos);
    }
    
    return (
        <div>
            <h1>Todos</h1>
            <input 
                value={text}
                onChange={e => {
                    setText(e.target.value)
                    setTextError('')
                }}
            />

            <button 
                className='btn btn-blue'
                onClick={createTodo}
            >
                Create New Todo
            </button>
            <p className='text-red-500'>{textError}</p>
            
            {
                todos.length > 0 && todos.map((todo, index) => {
                    return (
                        <div key={index}>
                            <h3 className='p-2'>Todo #{index}</h3>
                            <p className={todo.complete ? 'line-through p-2' : 'p-2'}>{todo.text}</p>
                            <p className='p-2'>{todo.complete}</p>
                            <button
                                className='p-2'
                                onClick={() => updateTodo(index)}
                            >
                                {todo.complete ? 'Task Completed!' : 'Not Completed'}
                            </button>
                            <button
                                className='p-2'
                                onClick={() => deleteTodo(index)}    
                            >
                                Delete
                            </button>
                        </div>
                    )   
                })
            }
            
        </div>
    )
}

export default Todos;