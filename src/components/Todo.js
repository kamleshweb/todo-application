import './Todo.css';

const Todo = ({task}) => {
    return (
        <div className="Todo">
                <li classNames="Todo-task">
                    {task}
                </li>
        </div>
    )
}

export default Todo;