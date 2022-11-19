import { useContext } from 'react';

import { ShowModalContext } from '../../context/showmodal.context';

import FormModal from '../../components/form-modal/form-modal.component';
import DropDownButton from '../../components/dropdown-button/dropdown-button.component';
import TodoTable from '../../components/todo-table/todo-table.component';

import './homepage.styles.scss';

const HomePage = () => {
    const { showModal, setShowModal } = useContext(ShowModalContext);

    const toggleShowModal = () => setShowModal(!showModal);

    return (
        <div className='homepage-container'>
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
            {showModal ? (<FormModal />) : null}
        </div>
    );
}

export default HomePage;