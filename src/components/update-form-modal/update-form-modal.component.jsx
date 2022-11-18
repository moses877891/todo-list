import { useState, useContext } from "react";

import { TodoContext } from "../../context/todo.context";
import { ShowUpdatedModalContext } from "../../context/showUpdatedmodal.context";
import { ListToUpdateContext } from "../../context/listToUpdate.context";

const UpdateFormModal = () => {
    const { listToUpdate } = useContext(ListToUpdateContext);
    const { toDo, note, priority, date } = listToUpdate;

    const defaultFormFields = {
        toDo: toDo,
        note: note,
        priority: priority,
        date: date
    }

    const { updateItemTodoList } = useContext(TodoContext);
    const { showUpdatedModal, setShowUpdatedModal } = useContext(ShowUpdatedModalContext);
    const [formField, setFormField] = useState(defaultFormFields);

    const toggleShowUpdatedModal = () => {
        setShowUpdatedModal(!showUpdatedModal);
    }

    const handleChange = (event) => {
        const { value, name } = event.target;

        setFormField({
            ...formField,
            [name]: value,
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        updateItemTodoList(defaultFormFields, formField);
    }

    return (
        <>
            <div className='overflow-y-auto overflow-x-hidden fixed top-0 
                right-0 left-0 z-50 w-full md:inset-0 md:h-full flex justify-center'>
                <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                    <div className="relative bg-stone-300 rounded-lg">
                        <div className="flex items-start justify-between p-3 border-b border-solid border-gray-300 rounded-t ">
                            <h3 className="text-3xl font-light text-zinc-600">Add a ToDo</h3>
                            <button
                                className="bg-transparent border-0 text-black float-right"
                                onClick={toggleShowUpdatedModal}
                            >
                                <span className="text-zinc-600 opacity-7 h-6 w-6 text-xl block py-0 rounded-full">
                                    x
                                </span>
                            </button>
                        </div>
                        <div className='py-6 px-6 lg:px-8'>
                            <form className='flex flex-col' onSubmit={handleSubmit}>
                                <label className='block my-2 text-sm font-medium
                                        text-zinc-600 dark:text-gray-300'>ToDo</label>
                                <input className='bg-gray-50 border 
                                        border-gray-300 text-gray-900 
                                        text-sm rounded-lg focus:ring-blue-500 
                                        focus:border-blue-500 block w-full p-2.5'
                                    type="text"
                                    name='toDo'
                                    defaultValue={toDo}
                                    onChange={handleChange}
                                    required
                                />

                                <label className='block my-2 text-sm font-medium
                                        text-zinc-600'>Note</label>
                                <input className='bg-gray-50 border 
                                        border-gray-300 text-gray-900 
                                        text-sm rounded-lg focus:ring-blue-500 
                                        focus:border-blue-500 block w-full p-2.5'
                                    type="text"
                                    name='note'
                                    defaultValue={note}
                                    onChange={handleChange}
                                    required
                                />

                                <label className='block my-2 text-sm font-medium
                                        text-zinc-600 dark:text-gray-300'>Priority</label>
                                <select className='bg-gray-50 border 
                                        border-gray-300 text-gray-900 
                                        text-sm rounded-lg focus:ring-blue-500 
                                        focus:border-blue-500 block w-full p-2.5'
                                    name='priority'
                                    onChange={handleChange}
                                    defaultValue={priority}
                                >
                                    <option value='high'>High</option>
                                    <option value='average'>Average</option>
                                    <option value='low'>Low</option>
                                </select>


                                <div className="flex items-center justify-end py-3 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-slate-900 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1"
                                        type="button"
                                        onClick={toggleShowUpdatedModal}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="text-white bg-slate-700 active:bg-slate-800 font-bold uppercase 
                                        text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1"
                                        type="submit"
                                    >
                                        update
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateFormModal;