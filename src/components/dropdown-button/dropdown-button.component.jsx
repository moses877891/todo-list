import { useState, useContext } from "react";
import { Link } from 'react-router-dom';

import { TodoContext } from '../../context/todo.context';

import './dropdown-button.styles.scss';

const DropDownButton = () => {
    const [showDropDown, setShowDropDown] = useState(false);
    const { groupedHigh, groupedAverage, groupedLow, grouped, setGroupList } = useContext(TodoContext);

    const toggleDropDown = () => {
        setShowDropDown(!showDropDown);
    }

    const groupItemWithHigh = () => {
        grouped();
        setGroupList(groupedHigh);
    }
    const groupItemWithAverage = () => {
        grouped();
        setGroupList(groupedAverage);
    }
    const groupItemWithLow = () => {
        grouped();
        setGroupList(groupedLow);
    }

    return (
        <div>
            <div className="dropdown float-right">
                <button onClick={toggleDropDown} className="block bg-slate-300 hover:bg-slate-400
                text-slate-700 px-2 py-2 rounded-lg font-semibold my-4
                 dark:bg-gray-600 dark:text-neutral-100 dark:hover:bg-gray-700">
                    Group by priority 🡣
                </button>
                {showDropDown ? (
                    <div>
                        <ul className="menu flex flex-col">
                            <Link to='/groupByPriority' className="link">
                                <li className="menu-item">
                                    <p onClick={() => {
                                        groupItemWithHigh();
                                    }}
                                        className=' font-medium'>
                                        high
                                    </p>
                                </li>
                            </Link>
                            <Link to='/groupByPriority' className="link">
                                <li className="menu-item">
                                    <p onClick={() => {
                                        groupItemWithAverage();
                                    }}
                                        className=' font-medium'>
                                        average
                                    </p>
                                </li>
                            </Link>
                            <Link to='/groupByPriority' className="link">
                                <li className="menu-item">
                                    <p onClick={() => {
                                        groupItemWithLow();
                                    }}
                                        className=' font-medium'>
                                        low
                                    </p>
                                </li>
                            </Link>
                        </ul>
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default DropDownButton;