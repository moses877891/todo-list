import { useContext, useState } from "react";

import { TodoContext } from "../../context/todo.context";

import ToDoListComponent from "../todo-list/todo-list.component";

const TodoTable = () => {

    const { todoList, setTodoList } = useContext(TodoContext);
    const [orderToDo, setOrderToDO] = useState("ASC");
    const [orderDate, setOrderDate] = useState("ASC");

    //sorting according to toDo
    const sortingToDo = () => {
        if (orderToDo === 'ASC') {
            const sorted = [...todoList].sort((a, b) =>

                a.toDo.toString().toLowerCase() < b.toDo.toString().toLowerCase() ? 1 : -1

            );

            setTodoList(sorted);
            setOrderToDO("DSC");
            //logToDoList();
        }
        if (orderToDo === 'DSC') {
            const sorted = [...todoList].sort((a, b) =>

                a.toDo.toString().toLowerCase() > b.toDo.toString().toLowerCase() ? 1 : -1

            );

            setTodoList(sorted);
            setOrderToDO("ASC");
            //logToDoList();
        }
    }

    // sorting according to date
    const sortingDate = () => {
        if (orderDate === 'ASC') {
            const sorted = [...todoList].sort((a, b) =>

                a.date < b.date ? 1 : -1

            );

            setTodoList(sorted);
            setOrderDate("DSC");
        }
        if (orderDate === 'DSC') {
            const sorted = [...todoList].sort((a, b) =>

                a.date > b.date ? 1 : -1

            );

            setTodoList(sorted);
            setOrderDate("ASC");
        }
    }

    return (
        <div>
            <table className="w-full text-sm text-left text-gray-700 dark:text-gray-400">
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700'>
                    <tr>
                        <th className='py-3 px-6 cursor-pointer'>
                            <p onClick={() => sortingToDo()}>
                                toDo
                                {
                                    orderToDo === 'ASC' ?
                                        (<span className=" mx-2 px-1 bg-gray-300 rounded">ASC</span>) : (
                                            <span className="mx-2 px-1 bg-gray-300 rounded">DSC</span>)
                                }
                            </p>
                        </th>
                        <th className='py-3 px-6'>note</th>
                        <th className='py-3 px-6'>priority</th>
                        <th className='py-3 px-6 cursor-pointer'>
                            <p onClick={() => sortingDate()}>
                                date
                                {
                                    orderDate === 'ASC' ?
                                        (<span className=" mx-2 px-1 bg-gray-300 rounded">ASC</span>) : (
                                            <span className="mx-2 px-1 bg-gray-300 rounded">DSC</span>)
                                }
                            </p>
                        </th>
                        <th className='py-3 px-6'></th>
                        <th className='py-3 px-6'></th>
                    </tr>
                </thead>
                {

                    todoList.map((todo) => (
                        //console.log(todo);
                        <ToDoListComponent key={todo.toDo} list={todo} />
                    ))
                }
            </table>
        </div>
    )
}

export default TodoTable;