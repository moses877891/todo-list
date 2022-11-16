import { useContext } from "react";

import { TodoContext } from "../../context/todo.context";

import ToDoListComponent from "../todo-list/todo-list.component";

const TodoTable = () => {
    const { todoList } = useContext(TodoContext);
    // const [order, setOrder] = useState("ASC");

    // const sorting = (col) => {
    //     if (order === 'ASC') {
    //         const sorted = [...todoList].sort((a, b) =>
    //             //console.log(a.col);
    //             a[col].toLowercase() > b[col].toLowercase() ? 1 : -1

    //         );

    //         setTodoList(sorted);
    //         setOrder("DSC");
    //     }
    // }

    return (
        <div>
            <table className="w-full text-sm text-left text-gray-700 dark:text-gray-400">
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700'>
                    <tr>
                        <th className='py-3 px-6'>toDo</th>
                        <th className='py-3 px-6'>note</th>
                        <th className='py-3 px-6'>priority</th>
                        <th className='py-3 px-6'>date</th>
                        <th className='py-3 px-6'></th>
                    </tr>
                </thead>
                {
                    todoList.map((todo) => (
                        <ToDoListComponent key={todo.date} list={todo} />
                    ))
                }
            </table>
        </div>
    )
}

export default TodoTable;