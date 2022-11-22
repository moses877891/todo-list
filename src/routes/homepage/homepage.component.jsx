import { useContext } from 'react';

import { ShowModalContext } from '../../context/showmodal.context';
import { SubTaskModalContext } from "../../context/subTaskmodal.context";

import FormModal from '../../components/form-modal/form-modal.component';
import DropDownButton from '../../components/dropdown-button/dropdown-button.component';
import TodoTable from '../../components/todo-table/todo-table.component';
import AddSubTask from '../../components/add-subtask/add-subtask.component';

import './homepage.styles.scss';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const { showModal, setShowModal } = useContext(ShowModalContext);
    const { showSubTaskModal, setShowSubTaskModal } = useContext(SubTaskModalContext);

    const toggleShowModal = () => setShowModal(!showModal);

    const toggleSubTaskModal = () => setShowSubTaskModal(!showSubTaskModal);

    return (
        <div className='homepage-container'>
            <Link to='/subTasks'>
                <button
                    className=' text-xl text-neutral-700 hover:text-neutral-200 bg-slate-300
            rounded-lg hover:bg-slate-500 px-3 hover:shadow-md py-1 w-1/4 
            dark:bg-gray-700 dark:text-neutral-200 dark:hover:bg-gray-800'
                    type='button'
                >
                    View subtasks
                </button>
            </Link>
            <DropDownButton />
            <TodoTable />
            <button
                className=' text-xl text-neutral-700 hover:text-neutral-200 bg-slate-300
                rounded-lg hover:bg-slate-500 px-3 hover:shadow-md my-6 py-1 w-full 
                dark:bg-gray-700 dark:text-neutral-200 dark:hover:bg-gray-800'
                type='button'
                onClick={toggleShowModal}
            >
                + Add a todo
            </button>
            <button
                className=' text-xl text-neutral-700 hover:text-neutral-200 bg-slate-300
                rounded-lg hover:bg-slate-500 px-3 hover:shadow-md my-6 py-1 w-full 
                dark:bg-gray-700 dark:text-neutral-200 dark:hover:bg-gray-800'
                type='button'
                onClick={toggleSubTaskModal}
            >
                + Add Subtask
            </button>
            {showModal ? (<FormModal />) : null}
            {showSubTaskModal ? (<AddSubTask />) : null}
        </div>
    );
}

export default HomePage;