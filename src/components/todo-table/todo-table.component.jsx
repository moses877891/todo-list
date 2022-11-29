import { useContext, useState } from "react";

import { TodoContext } from "../../context/todo.context";

import ToDoListComponent from "../todo-list/todo-list.component";

const TodoTable = () => {

    const { dummyConst, setDummyConst } = useContext(TodoContext);

    const [orderToDo, setOrderToDO] = useState("ASC");
    const [orderDate, setOrderDate] = useState("ASC");

    //sorting according to toDo
    const sortingToDo = () => {
        if (orderToDo === 'ASC') {
            const sorted = [...dummyConst].sort((a, b) =>

                a.toDo.toString().toLowerCase() < b.toDo.toString().toLowerCase() ? 1 : -1

            );

            setDummyConst(sorted);
            setOrderToDO("DSC");
            //logToDoList();
        }
        if (orderToDo === 'DSC') {
            const sorted = [...dummyConst].sort((a, b) =>

                a.toDo.toString().toLowerCase() > b.toDo.toString().toLowerCase() ? 1 : -1

            );

            setDummyConst(sorted);
            setOrderToDO("ASC");
            //logToDoList();
        }
    }

    // sorting according to date
    const sortingDate = () => {
        if (orderDate === 'ASC') {
            const sorted = [...dummyConst].sort((a, b) =>

                a.date < b.date ? 1 : -1

            );

            setDummyConst(sorted);
            setOrderDate("DSC");
        }
        if (orderDate === 'DSC') {
            const sorted = [...dummyConst].sort((a, b) =>

                a.date > b.date ? 1 : -1

            );

            setDummyConst(sorted);
            setOrderDate("ASC");
        }
    }

    return (
        <div>
            <table className=" w-full text-sm text-left shadow-xl">
                <thead className='text-xs text-gray-200 uppercase bg-stone-900 '>
                    <tr>
                        <th className='py-3 px-6 cursor-pointer'>
                            <p onClick={() => sortingToDo()}>
                                toDo
                                {
                                    orderToDo === 'ASC' ?
                                        (<span className=" mx-2 px-1 bg-gray-300 rounded text-stone-800">
                                            ASC</span>) : (
                                            <span className="mx-2 px-1 bg-gray-300 rounded text-stone-800">
                                                DSC</span>)
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
                                        (<span className=" mx-2 px-1 bg-gray-300 rounded text-stone-800">
                                            ASC</span>) : (
                                            <span className="mx-2 px-1 bg-gray-300 rounded text-stone-800">
                                                DSC</span>)
                                }
                            </p>
                        </th>
                        <th className='py-3 px-6'></th>
                    </tr>
                </thead>
                {
                    dummyConst ? dummyConst.map((todo) => (
                        <ToDoListComponent key={todo.toDo} list={todo} />
                    )) : null
                }
            </table>
        </div>
    )
}

export default TodoTable;