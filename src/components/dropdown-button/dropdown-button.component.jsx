import { useState, useContext } from "react";
import { Link } from 'react-router-dom';

import { TodoContext } from '../../context/todo.context';

import './dropdown-button.styles.scss';

const DropDownButton = () => {
    const [showDropDown, setShowDropDown] = useState(false);
    const { groupItemsWithPriority } = useContext(TodoContext);

    const toggleDropDown = () => {
        setShowDropDown(!showDropDown);
    }

    const handleMenu = () => {
        setShowDropDown(false);
    };


    return (
        <div>
            <div className="dropdown float-right">
                <button onClick={toggleDropDown} className="block bg-zinc-600 hover:bg-zinc-800
                text-neutral-50 px-2 py-2 rounded-lg font-semibold my-4">
                    Group by priority 🡣
                </button>
                {showDropDown ? (
                    <div>
                        <ul className="menu flex flex-col">
                            <Link to='/groupByPriority' className="link">
                                <li className="menu-item">
                                    <button onClick={() => {
                                        groupItemsWithPriority('high');
                                        handleMenu();
                                    }}
                                        className=' font-medium'>
                                        high
                                    </button>
                                </li>
                            </Link>
                            <Link to='/groupByPriority' className="link">
                                <li className="menu-item">
                                    <button onClick={() => {
                                        groupItemsWithPriority('average');
                                        handleMenu();
                                    }}
                                        className=' font-medium'>
                                        average
                                    </button>
                                </li>
                            </Link>
                            <Link to='/groupByPriority' className="link">
                                <li className="menu-item">
                                    <button onClick={() => {
                                        groupItemsWithPriority('low');
                                        handleMenu();
                                    }}
                                        className=' font-medium'>
                                        low
                                    </button>
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