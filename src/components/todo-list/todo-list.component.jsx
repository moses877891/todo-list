import { useContext } from "react";

import { TodoContext } from "../../context/todo.context";
import { ShowUpdatedModalContext } from "../../context/showUpdatedmodal.context";
import { ListToUpdateContext } from "../../context/listToUpdate.context";
import { SubTaskModalContext } from "../../context/subTaskmodal.context";

import UpdateFormModal from "../update-form-modal/update-form-modal.component";
import AddSubTask from "../add-subtask/add-subtask.component";


const ToDoListComponent = ({ list }) => {
    const { toDo, note, priority, date, subTasks } = list;
    //console.log('subTasks - ', subTasks);

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
                <tr className="bg-white border-b dark:bg-slate-100 text-slate-700
                dark:text-slate-900">
                    <td className="py-4 px-6 font-medium">{toDo}
                        <p className=" text-gray-400 hover:text-zinc-600 cursor-pointer
                        text-xs"
                            onClick={() => {
                                addSubTaskListener();
                                toggleSubTaskModal();
                            }}>add subtask</p>
                        <span>{subTasks ? subTasks.map((task) => <p>{task}</p>) : null}</span>
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
                <tr>

                </tr>

            </tbody>
            {showUpdatedModal ? <UpdateFormModal />
                : null}
            {showSubTaskModal ? (<AddSubTask />)
                : null}
        </>
    );
}

export default ToDoListComponent;