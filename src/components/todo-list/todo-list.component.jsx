import { useContext } from "react";

import { TodoContext } from "../../context/todo.context";

const ToDoListComponent = ({ list }) => {
    const { toDo, note, priority, date } = list;

    const { removeTodoFromList } = useContext(TodoContext);

    const removeListHandler = () => removeTodoFromList(list);

    return (
        <>
            <tbody>
                <tr className="bg-white border-b ">
                    <td className="py-4 px-6 font-medium">{toDo}</td>
                    <td className="py-4 px-6">{note}</td>
                    <td className="py-4 px-6">{priority}</td>
                    <td className="py-4 px-6">{date}</td>
                    <td className="py-4 px-0 cursor-pointer"
                        onClick={removeListHandler}>delete</td>
                </tr>
            </tbody>
        </>
    );
}

export default ToDoListComponent;