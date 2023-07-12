import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodo, removeTodo } from '../../levelon-lib/actions/actions'

const TodoList = ({ todos, addTodo, removeTodo }) => {
    const [text, setText] = useState('')

    const handleAddTodo = () => {
        if (text.trim()) {
            addTodo(text)
            setText('')
        }
    }

    const handleRemoveTodo = (id) => {
        removeTodo(id)
    }

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        })
    ).isRequired,
    addTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    todos: state.todos,
})

const mapDispatchToProps = {
    addTodo,
    removeTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)