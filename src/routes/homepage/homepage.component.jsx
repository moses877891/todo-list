import { useContext, } from 'react';

import { ShowModalContext } from '../../context/showmodal.context';
import { TodoContext } from '../../context/todo.context';

import FormModal from '../../components/form-modal/form-modal.component';
import ToDoListComponent from '../../components/todo-list/todo-list.component'

import './homepage.styles.scss';


const HomePage = () => {
    const { showModal, setShowModal } = useContext(ShowModalContext);
    const { todoList } = useContext(TodoContext);

    const sortFieldWithHighPriority = () => {
        // todoList.forEach((item) => {
        //     if (item.priority === "high") {
        //         sortedField.push(item);
        //         console.log('done');
        //     }
        // });
        //console.log(sortedField);
        //return sortedField;
        console.log(todoList.sort());
    }

    const toggleShowModal = () => {
        setShowModal(!showModal);
    }

    return (
        <div className='homepage-container'>
            <table className="w-full text-sm text-left text-gray-700 dark:text-gray-400">
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700'>
                    <tr>
                        <th className='py-3 px-6'>toDo</th>
                        <th className='py-3 px-6'>note</th>
                        <th className='py-3 px-6'>priority</th>
                        <th className='py-3 px-6'>date</th>
                    </tr>
                </thead>
                {
                    todoList.map((todo) => (
                        <ToDoListComponent key={todo.toDo} list={todo} />
                    ))}
            </table>
            <span className='sideTag-contanier'>
                <button
                    className='block text-white bg-slate-300 
                    rounded-lg hover:bg-slate-400 px-3 hover:shadow-md
                    my-4'
                    type='button'
                    onClick={toggleShowModal}
                >
                    + Add a todo
                </button>
            </span>
            <button onClick={sortFieldWithHighPriority}>High</button>
            {showModal ? (<FormModal />) : null}
        </div>
    );
}

export default HomePage;