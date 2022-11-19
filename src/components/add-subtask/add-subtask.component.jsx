import { useState, useContext } from "react";

import { SubTaskModalContext } from "../../context/subTaskmodal.context";
import { AddSubTaskToList } from '../../utils/firebase.utils';
import { ListToUpdateContext } from "../../context/listToUpdate.context";


const defaultFormField = {
    toDo: ''
}

const AddSubTask = () => {
    const [formField, setFormField] = useState(defaultFormField);
    const { toDo } = formField;

    const { showSubTaskModal, setShowSubTaskModal } = useContext(SubTaskModalContext);
    const { listToUpdate } = useContext(ListToUpdateContext);

    const handleChange = (event) => {
        const { value, name } = event.target;
        setFormField({
            [name]: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        AddSubTaskToList(listToUpdate, formField);
    }

    const toggleShowSubTaskModal = () => setShowSubTaskModal(!showSubTaskModal);

    return (
        <div className="overflow-y-auto overflow-x-hidden fixed top-0 
            right-0 left-0 z-50 w-full md:inset-0 md:h-full flex justify-center">
            <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                <div className=" bg-stone-300 rounded-lg">
                    <div className="flex items-start justify-between p-3 border-b border-solid border-gray-300 rounded-t ">
                        <h3 className="text-3xl font-light text-zinc-600">Add subtask</h3>
                    </div>
                    <div className='py-6 px-6 lg:px-8'>
                        <form onSubmit={handleSubmit} className='flex flex-col'>
                            <label className='block my-2 text-sm font-medium
                            text-zinc-600 dark:text-gray-300'>subTask</label>
                            <input
                                className="bg-gray-50 border 
                            border-gray-300 text-gray-900 
                            text-sm rounded-lg focus:ring-blue-500 
                            focus:border-blue-500 block w-full p-1"
                                type="text"
                                name='toDo'
                                value={toDo}
                                onChange={handleChange}
                            />
                            <div className="flex items-center justify-end pt-3 border-t 
                                border-solid border-blueGray-200 rounded-b">
                                <button
                                    className="text-slate-900 background-transparent font-bold uppercase
                                px-6 py-2 text-sm outline-none focus:outline-none mr-1"
                                    type="button"
                                    onClick={toggleShowSubTaskModal}>cancel</button>
                                <button
                                    className="text-white bg-slate-700 active:bg-slate-800 font-bold uppercase 
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