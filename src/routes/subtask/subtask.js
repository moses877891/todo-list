import { useContext } from "react";

import { SubTaskContext } from "../../context/subtask.context";
import { SubTaskModalContext } from "../../context/subTaskmodal.context";

import SubtaskComponent from "../../components/subtask-table/subtask-table.component";

const SubTaskPage = () => {

    const { subtask } = useContext(SubTaskContext);
    const { showSubTaskModal, setShowSubTaskModal } = useContext(SubTaskModalContext);

    // const subTaksList = todoList.reduce((group, list) => {
    //     const { toDo } = list;
    //     group[toDo] = group[toDo] ?? [];
    //     group[toDo].push(list);
    //     return group;
    // }, {})

    const toggleSubTaskModal = () => setShowSubTaskModal(!showSubTaskModal);

    return (

        <div>
            <table className=" w-full text-sm text-left text-gray-700">
                <thead className='text-xs text-gray-700 uppercase bg-gray-50
         dark:bg-gray-700 dark:text-slate-200'>
                    <tr>
                        <th className='py-3 px-6 cursor-pointer'>
                            toDo
                        </th>
                        <th className='py-3 px-6'>note</th>
                        <th className='py-3 px-6'>LinkedWith</th>
                        <th className='py-3 px-6 cursor-pointer'>
                            date
                        </th>
                        <th className='py-3 px-6'></th>
                        <th className='py-3 px-6'></th>
                    </tr>
                </thead>
                {

                    subtask.map((todo) => (
                        <SubtaskComponent key={todo.toDo} subtask={todo} />
                    ))
                }
            </table>
            <button
                className=' text-xl text-neutral-700 hover:text-neutral-200 bg-slate-300
                rounded-lg hover:bg-slate-500 px-3 hover:shadow-md my-6 py-1 w-full 
                dark:bg-gray-700 dark:text-neutral-200 dark:hover:bg-gray-800'
                type='button'
                onClick={toggleSubTaskModal}
            >
                + Add Subtask
            </button>
        </div>
    )
}

export default SubTaskPage;