import { useContext } from "react";
import { Link } from "react-router-dom";

import { TodoContext } from "../../context/todo.context";

import GroupByToDoListComponent from "../../components/groupby-todo-list/groupby-todo-list.component";

const GroupBy = () => {
    const { groupList } = useContext(TodoContext);

    return (
        <div>
            <table className="w-full text-sm text-left text-gray-700 dark:text-gray-400">
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700'>
                    <tr>
                        <th className='py-3 px-6'>toDo</th>
                        <th className='py-3 px-6'>note</th>
                        <th className='py-3 px-6'>priority</th>
                        <th className='py-3 px-6'>date</th>
                        <th className='py-3 px-6'></th>
                    </tr>
                </thead>
                {
                    groupList && groupList.map((todo) => (
                        <GroupByToDoListComponent key={todo.date} list={todo} />
                    ))}
            </table>
            <p className=" text-3xl font-bold mt-10 ml-3">
                <Link to='/'>
                    🡠 Back
                </Link>
            </p>
        </div>
    )
}

export default GroupBy;