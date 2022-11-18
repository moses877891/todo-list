import { useContext } from "react";

import { ShowUpdatedModalContext } from "../../context/showUpdatedmodal.context";
import { TodoContext } from "../../context/todo.context";

import UpdateFormModal from "../update-form-modal/update-form-modal.component";


const ToDoListComponent = ({ list }) => {
    const { toDo, note, priority, date } = list;

    const { removeTodoFromList, } = useContext(TodoContext);
    const { showUpdatedModal, setShowUpdatedModal } = useContext(ShowUpdatedModalContext)

    const removeListHandler = () => removeTodoFromList(list);

    const toggleUpdateModal = () => setShowUpdatedModal(!showUpdatedModal);

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
                    <td className="py-4 px-0 cursor-pointer"
                        onClick={toggleUpdateModal}>edit</td>
                </tr>
            </tbody>
            {showUpdatedModal ? <UpdateFormModal list={list} /> : null}
        </>
    );
}

export default ToDoListComponent;