import { useState, useContext } from "react";

import { SubTaskContext } from "../../context/subtask.context";
import { TodoContext } from "../../context/todo.context";


const defaultFormField = {
    toDo: '',
    note: '',
    linkWith: ''
}

const AddSubTask = () => {
    const [formField, setFormField] = useState(defaultFormField);
    const { toDo, note } = formField;

    const none = '';

    const { todoList } = useContext(TodoContext);
    const {
        addItemtoToDoSubTask,
        getSubTask,
        showAddSubTaskModal,
        setShowAddSubTaskModal,
    } = useContext(SubTaskContext);

    const createSelectItems = () => {
        const items = todoList.reduce((acc, list) => {
            acc.push(<option key={list.toDo} value={list.toDo}>{list.toDo}</option>);
            return acc;
        }, [])
        return items;
    }

    const handleChange = (event) => {
        const { value, name } = event.target;
        setFormField({
            ...formField,
            [name]: value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        addItemtoToDoSubTask(formField);
        toggleShowAddSubTaskModal();
        getSubTask();
    }

    const toggleShowAddSubTaskModal = () => setShowAddSubTaskModal(!showAddSubTaskModal);

    return (
        <div className="overflow-y-auto overflow-x-hidden fixed top-0 
            right-0 left-0 z-50 w-full md:inset-0 md:h-full flex justify-center">
            <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                <div className=" bg-stone-200 rounded-lg">
                    <div className="flex items-start justify-between p-3 border-b border-solid border-gray-300 rounded-t ">
                        <h3 className="text-3xl font-light text-zinc-800">Add subtask</h3>
                        <button
                            className="bg-transparent border-0 text-black float-right"
                            onClick={toggleShowAddSubTaskModal}
                        >
                            <span className="text-zinc-800 opacity-7 h-6 w-6 text-xl block py-0 rounded-full
                            active:animate-ping">
                                x
                            </span>
                        </button>
                    </div>
                    <div className='py-6 px-6 lg:px-8'>
                        <form onSubmit={handleSubmit} className='flex flex-col'>
                            <label className='block my-2 text-sm font-medium
                            text-neutral-600 dark:text-gray-300'>subTask</label>
                            <input
                                className="bg-gray-50 border 
                            border-gray-300 text-gray-900 
                            text-sm rounded-lg focus:ring-blue-500 
                            focus:border-blue-500 block w-full p-1"
                                type="text"
                                name='toDo'
                                value={toDo}
                                onChange={handleChange}
                                required
                            />
                            <label className='block my-2 text-sm font-medium
                            text-neutral-600 dark:text-gray-300'>note</label>
                            <input
                                className="bg-gray-50 border 
                            border-gray-300 text-gray-900 
                            text-sm rounded-lg focus:ring-blue-500 
                            focus:border-blue-500 block w-full p-1"
                                type="text"
                                name='note'
                                value={note}
                                onChange={handleChange}
                                required
                            />
                            <label className='block my-2 text-sm font-medium
                            text-neutral-600 dark:text-gray-300'>link with</label>
                            <select
                                className="bg-gray-50 border 
                            border-gray-300 text-gray-900 
                            text-sm rounded-lg focus:ring-blue-500 
                            focus:border-blue-500 block w-full p-1"
                                defaultValue={none}
                                name='linkWith'
                                onChange={handleChange}
                            >
                                <option value="" name={none} ></option>
                                {createSelectItems()}
                            </select>
                            <div className="flex items-center justify-end pt-3 border-t 
                                border-solid border-blueGray-200 rounded-b">
                                <button
                                    className="text-neutral-900 background-transparent font-bold uppercase
                                px-6 py-2 text-sm outline-none focus:outline-none mr-1"
                                    type="button"
                                    onClick={toggleShowAddSubTaskModal}>cancel</button>
                                <button
                                    className="text-white bg-neutral-900 active:bg-neutral-800 font-bold uppercase 
                                text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1"
                                    type="submit">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddSubTask