import { useContext } from "react";

import { SubTaskContext } from "../../context/subtask.context";

import UpdateSubTaskFormModal from "../sub-task-form-modal/subtask-form-modal.component";


const SubtaskComponent = ({ subtask }) => {
    const {
        setSubtaskToUpdate,
        removeTodoFromSubTask,
        showEditSubTaskModal,
        setShowEditSubTaskModal
    } = useContext(SubTaskContext);

    const removeSubtaskHandler = () => removeTodoFromSubTask(subtask.toDo);

    const setSubtaskList = () => setSubtaskToUpdate(subtask);

    const toggleShowSubTask = () => setShowEditSubTaskModal(!showEditSubTaskModal);

    return (
        <>
            <tbody>
                <tr key={subtask.toDo} className=" bg-neutral-100 border-b text-slate-800
                    border-t border-t-slate-100 text-sm">
                    <td className="py-4 px-6 border-b-2 border-b-stone-100">
                        {subtask.toDo}
                    </td>
                    <td className="py-4 px-6 border-b-2 border-b-stone-100">{subtask.note}</td>
                    {/*<td className="py-4 px-6 ">{subtask.linkWith}</td>*/}
                    <td className="py-4 px-6 border-b-2 border-b-stone-100">
                        {subtask.date}
                    </td>
                    <td className="py-4 px-6 border-b-2 border-b-stone-100">
                        <span className="cursor-pointer" onClick={() => {
                            setSubtaskList();
                            toggleShowSubTask();
                        }}>
                            edit
                        </span>
                    </td>
                    <td className=" border-b-2 border-b-stone-100">
                        <span className="cursor-pointer" onClick={removeSubtaskHandler}>
                            delete
                        </span>
                    </td>
                </tr>
            </tbody>
            {
                showEditSubTaskModal ? (<UpdateSubTaskFormModal />) : null
            }
        </>
    )
}

export default SubtaskComponent;