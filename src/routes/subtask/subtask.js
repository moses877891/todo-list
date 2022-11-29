import { useContext } from "react";

import { SubTaskContext } from "../../context/subtask.context";

import SubtaskListComponent from "../../components/subtask-list/subtask-list.component";

const SubTaskPage = () => {

    const { subtask } = useContext(SubTaskContext);

    // const subTaksList = todoList.reduce((group, list) => {
    //     const { toDo } = list;
    //     group[toDo] = group[toDo] ?? [];
    //     group[toDo].push(list);
    //     return group;
    // }, {})

    return (

        <div className="pb-10 pt-3" id="subtask_section">
            <table className=" w-full text-sm text-left text-gray-700 shadow-2xl">
                <thead className='text-xs text-gray-200 uppercase bg-stone-900'>
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
                    </tr>
                </thead>
                {

                    subtask.map((todo) => (
                        <SubtaskListComponent key={todo.toDo} subtask={todo} />
                    ))
                }
            </table>
        </div>
    )
}

export default SubTaskPage;