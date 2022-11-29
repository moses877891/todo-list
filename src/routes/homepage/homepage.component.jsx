import { useContext } from 'react';

import { TodoContext } from '../../context/todo.context';
import { SubTaskContext } from "../../context/subtask.context";
// import { ViewTodoContext } from '../../context/viewTodo.context';

import FormModal from '../../components/form-modal/form-modal.component';
import DropDownButton from '../../components/dropdown-button/dropdown-button.component';
import TodoTable from '../../components/todo-table/todo-table.component';
import AddSubTask from '../../components/add-subtask/add-subtask.component';

import './homepage.styles.scss';
import SubTaskPage from '../subtask/subtask';

const HomePage = () => {
    const { showAddTodoModal, setShowAddTodoModal } = useContext(TodoContext);
    const { showAddSubTaskModal, setShowAddSubTaskModal } = useContext(SubTaskContext);


    const toggleShowModal = () => setShowAddTodoModal(!showAddTodoModal);

    const toggleSubTaskModal = () => setShowAddSubTaskModal(!showAddSubTaskModal);

    return (
        <div className='homepage-container'>
            <DropDownButton />
            <TodoTable />
            <button
                className=' text-xl text-gray-300 hover:text-gray-200 bg-stone-900
                rounded-lg hover:bg-black px-3 hover:shadow-md mt-10 py-1 w-full'
                type='button'
                onClick={toggleShowModal}
            >
                + Add a todo
            </button>
            <button
                className=' text-xl text-gray-300 hover:text-gray-200 bg-stone-900
            rounded-lg hover:bg-black px-3 hover:shadow-md mt-5 py-1 w-full'
                type='button'
                onClick={toggleSubTaskModal}
            >
                + Add Subtask
            </button>
            <p className='text-center text-2xl mt-5'>All Subtasks</p>
            <SubTaskPage />
            {showAddTodoModal ? (<FormModal />) : null}
            {showAddSubTaskModal ? (<AddSubTask />) : null}
        </div>
    );
}

export default HomePage;