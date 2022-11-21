import { useContext } from "react";

import { TodoContext } from "../../context/todo.context";
import { ShowUpdatedModalContext } from "../../context/showUpdatedmodal.context";
import { ListToUpdateContext } from "../../context/listToUpdate.context";
import { SubTaskModalContext } from "../../context/subTaskmodal.context";
import { SubTaskContext } from "../../context/subtask.context";

import UpdateFormModal from "../update-form-modal/update-form-modal.component";
import AddSubTask from "../add-subtask/add-subtask.component";
import SubtaskComponent from "../subtask-table/subtask-table.component";


const ToDoListComponent = ({ list }) => {
    const { toDo, note, priority, date } = list;
    //console.log('subTasks - ', subTasks);

    const { subtask } = useContext(SubTaskContext);
    const { removeTodoFromList, } = useContext(TodoContext);
    const { showUpdatedModal, setShowUpdatedModal } = useContext(ShowUpdatedModalContext);
    const { showSubTaskModal, setShowSubTaskModal } = useContext(SubTaskModalContext);

    const { setListToUpdate } = useContext(ListToUpdateContext)

    const removeListHandler = () => removeTodoFromList(toDo);

    const updateListHandler = () => setListToUpdate(list);

    const addSubTaskListener = () => {
        setListToUpdate(list);
    }

    const toggleSubTaskModal = () => setShowSubTaskModal(!showSubTaskModal);

    const toggleUpdateModal = () => setShowUpdatedModal(!showUpdatedModal);

    return (
        <>
            <tbody>
                <tr className="bg-white dark:bg-slate-100 text-slate-700
                dark:text-slate-900">
                    <td className="py-4 px-6 font-medium">{toDo}
                        <p className=" text-gray-400 hover:text-zinc-600 cursor-pointer
                        text-xs"
                            onClick={() => {
                                addSubTaskListener();
                                toggleSubTaskModal();
                            }}>add subtask</p>
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
                {
                    !subtask.toDo && subtask.has(toDo) ? (subtask
                        .get(toDo)
                        .map((subtask) =>
                            //console.log('error')
                            <SubtaskComponent subtask={subtask} />
                        )) : null
                }

            </tbody>
            {showUpdatedModal ? <UpdateFormModal />
                : null}
            {showSubTaskModal ? (<AddSubTask />)
                : null}
        </>
    );
}

export default ToDoListComponent;