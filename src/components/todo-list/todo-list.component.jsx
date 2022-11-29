import { useContext, useState } from "react";

import { deleteSubTaskListWithMainTask } from "../../utils/firebase.utils";

import { TodoContext } from "../../context/todo.context";
import { SubTaskContext } from '../../context/subtask.context'

import UpdateFormModal from "../update-form-modal/update-form-modal.component";
import SubtaskComponent from "../subtask-table/subtask-table.component";
import AddSubTask from "../add-subtask/add-subtask.component";

import './todo-list.styles.scss';

const ToDoListComponent = ({ list }) => {
    const { toDo, note, priority, date } = list;
    //console.log('subTasks - ', subTasks);

    const { subtask, showAddSubTaskModal, setShowAddSubTaskModal } = useContext(SubTaskContext);
    const {
        removeTodoFromList,
        showEditTodoModal,
        setShowEditTodoModal,
        setListToUpdate
    } = useContext(TodoContext);

    //show dropdown menu
    const [showDropDown, setShowDropDown] = useState(false);

    //is the buton clicked ? animation : no animation
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const removeListHandler = () => {
        removeTodoFromList(toDo);
        deleteSubTaskListWithMainTask(toDo, subtask);
    }
    const updateListHandler = () => setListToUpdate(list);

    const toggleDropDown = () => {
        setShowDropDown(!showDropDown);
        setIsButtonClicked(!isButtonClicked);
    }

    const toggleSubTaskModal = () => setShowAddSubTaskModal(!showAddSubTaskModal);

    const toggleUpdateModal = () => setShowEditTodoModal(!showEditTodoModal);

    return (
        <>
            <tbody>
                <tr className="bg-white dark:bg-slate-100 text-stone-900
                dark:text-slate-900 font-semibold">
                    <td className="py-4 px-6">{toDo}
                    </td>
                    <td className="py-4 px-6">{note}</td>
                    <td className="py-4 px-6">{priority}</td>
                    <td className="py-4 px-6">{date}</td>
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
                                <div className={`z-10 relative ${isButtonClicked ? 'fade' : ''}`}>
                                    <ul className="flex flex-col absolute w-full bg-stone-50 border border-stone-400
                                    rounded-md shadow-2xl overflow-hidden">
                                        <li className="hover:bg-black hover:text-white
                                        ">
                                            <p className=' py-1 font-light border-b trans' onClick={() => {
                                                updateListHandler();
                                                toggleUpdateModal();
                                                toggleDropDown();
                                            }}>
                                                edit
                                            </p>
                                        </li>
                                        <li className=" hover:bg-black hover:text-white
                                        ">
                                            <p className=' py-1 font-light border-b trans' onClick={() => {
                                                toggleSubTaskModal();
                                                toggleDropDown();
                                            }}>
                                                add subtask
                                                {showAddSubTaskModal ? (<AddSubTask />) : null}
                                            </p>
                                        </li>
                                        <li className=" hover:bg-black hover:text-white
                                        ">
                                            <p className='py-1 font-light trans' onClick={() => {
                                                toggleDropDown();
                                                removeListHandler();
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
                subtask.map((todo) => (
                    todo.linkWith === toDo ? <SubtaskComponent key={todo.toDo} subtask={todo} /> : null
                ))
            }
            {showEditTodoModal ? <UpdateFormModal />
                : null}
        </>
    );
}

export default ToDoListComponent;