import { useContext } from "react";

import { TodoContext } from "../../context/todo.context";
import { ShowUpdatedModalContext } from "../../context/showUpdatedmodal.context";
import { ListToUpdateContext } from "../../context/listToUpdate.context";
import { SubTaskContext } from '../../context/subtask.context'

import UpdateFormModal from "../update-form-modal/update-form-modal.component";
import { deleteSubTaskListWithMainTask } from "../../utils/firebase.utils";

const ToDoListComponent = ({ list }) => {
    const { toDo, note, priority, date } = list;
    //console.log('subTasks - ', subTasks);

    const { subtask } = useContext(SubTaskContext);
    const { removeTodoFromList, } = useContext(TodoContext);
    const { showUpdatedModal, setShowUpdatedModal } = useContext(ShowUpdatedModalContext);

    const { setListToUpdate } = useContext(ListToUpdateContext)

    const removeListHandler = () => {
        removeTodoFromList(toDo);
        deleteSubTaskListWithMainTask(toDo, subtask);
    }

    const updateListHandler = () => setListToUpdate(list);

    const toggleUpdateModal = () => setShowUpdatedModal(!showUpdatedModal);

    return (
        <>
            <tbody>
                <tr className="bg-white dark:bg-slate-100 text-slate-700
                dark:text-slate-900">
                    <td className="py-4 px-6 font-medium">{toDo}
                    </td>
                    <td className="py-4 px-6">{note}</td>
                    <td className="py-4 px-6">{priority}</td>
                    <td className="py-4 px-6">{date}</td>
                    <td className="py-4 px-0 cursor-pointer"
                        onClick={removeListHandler}>delete</td>
                    <td className="py-4 px-0 cursor-pointer"
                        onClick={() => {
                            updateListHandler();
                            toggleUpdateModal();
                        }}>edit
                    </td>
                </tr>
            </tbody>
            {showUpdatedModal ? <UpdateFormModal />
                : null}
        </>
    );
}

export default ToDoListComponent;