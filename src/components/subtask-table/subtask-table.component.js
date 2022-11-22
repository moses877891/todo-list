import { useContext } from "react";

import { SubTaskContext } from "../../context/subtask.context";

import UpdateSubTaskFormModal from "../sub-task-form-modal/subtask-form-modal.component";


const SubtaskComponent = ({ subtask }) => {
    const {
        setSubtaskToUpdate,
        showSubTask,
        setShowSubTask,
        removeTodoFromSubTask
    } = useContext(SubTaskContext);

    const removeSubtaskHandler = () => removeTodoFromSubTask(subtask.toDo);

    const setSubtaskList = () => setSubtaskToUpdate(subtask);

    const toggleShowSubTask = () => setShowSubTask(!showSubTask);

    return (
        <>
            <tbody>
                <tr key={subtask.toDo} className="bg-gray-100 border-b dark:bg-slate-100 text-slate-700
                dark:text-slate-900">
                    <td className="py-4 px-6 font-normal">
                        {subtask.toDo}
                    </td>
                    <td className="py-4 px-6 font-normal">{subtask.note}</td>
                    <td className="py-4 px-6 font-normal">{subtask.linkWith}</td>
                    <td className="py-4 px-6 font-normal">
                        {subtask.date}
                    </td>
                    <td onClick={removeSubtaskHandler} className="cursor-pointer">delete</td>
                    <td onClick={() => {
                        setSubtaskList();
                        toggleShowSubTask();
                    }} className="cursor-pointer">edit</td>
                </tr>
            </tbody>
            {
                showSubTask ? (<UpdateSubTaskFormModal />) : null
            }
        </>
    )
}

export default SubtaskComponent;