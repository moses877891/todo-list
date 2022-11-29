import { useContext, useState } from "react";

import { SubTaskContext } from "../../context/subtask.context";

import UpdateSubTaskFormModal from "../sub-task-form-modal/subtask-form-modal.component";


const SubtaskListComponent = ({ subtask }) => {
    const {
        setSubtaskToUpdate,
        removeTodoFromSubTask,
        showEditSubTaskModal,
        setShowEditSubTaskModal
    } = useContext(SubTaskContext);

    const [showDropDown, setShowDropDown] = useState(false);

    //is the buton clicked ? animation : no animation
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const removeSubtaskHandler = () => removeTodoFromSubTask(subtask.toDo);

    const setSubtaskList = () => setSubtaskToUpdate(subtask);

    const toggleDropDown = () => {
        setShowDropDown(!showDropDown);
        setIsButtonClicked(!isButtonClicked);
    }

    const toggleShowSubTask = () => setShowEditSubTaskModal(!showEditSubTaskModal);

    return (
        <>
            <tbody>
                <tr key={subtask.toDo} className=" bg-white border-b text-slate-700
                    font-normal border-t border-t-slate-100">
                    <td className="py-4 px-6 border-b-2 border-b-stone-100">
                        {subtask.toDo}
                    </td>
                    <td className="py-4 px-6 border-b-2 border-b-stone-100">{subtask.note}</td>
                    <td className="py-4 px-6 ">{subtask.linkWith}</td>
                    <td className="py-4 px-6 border-b-2 border-b-stone-100">
                        {subtask.date}
                    </td>
                    <td className=" py-4 text-center">
                        <div className="relative">
                            <p className={`w-6 cursor-pointer ${isButtonClicked ? 'animateDownArrow' : ''}`} onClick={toggleDropDown}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 
                                    256-256S397.4 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 
                                    33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 
                                    9.4-24.6 9.4-33.9 0L135 241z" /></svg>
                            </p>
                            {showDropDown ? (
                                <div className={`z-10 relative pb-3 ${isButtonClicked ? 'fade' : ''}`}>
                                    <ul className="flex flex-col absolute w-full bg-stone-50 border border-stone-400
                            rounded-md shadow-2xl overflow-hidden">
                                        <li className="hover:bg-black hover:text-white
                                ">
                                            <p className=' py-1 font-light border-b trans' onClick={() => {
                                                setSubtaskList();
                                                toggleShowSubTask();
                                                toggleDropDown()
                                            }}>
                                                edit
                                            </p>
                                        </li>
                                        <li className=" hover:bg-black hover:text-white
                                ">
                                            <p className='py-1 font-light trans' onClick={() => {
                                                removeSubtaskHandler();
                                                toggleDropDown();
                                            }}>
                                                delete
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            ) : null}
                        </div>
                    </td>
                </tr>
            </tbody>
            {
                showEditSubTaskModal ? (<UpdateSubTaskFormModal />) : null
            }
        </>
    )
}

export default SubtaskListComponent;