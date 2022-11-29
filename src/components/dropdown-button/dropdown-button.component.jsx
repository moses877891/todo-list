import { useState, useContext } from "react";

import { TodoContext } from '../../context/todo.context';

import './dropdown-button.styles.scss';

const DropDownButton = () => {
    const [showDropDown, setShowDropDown] = useState(false);

    const [buttonValue, setButtonValue] = useState('All');

    //todoContext
    const {
        groupedHigh,
        groupedAverage,
        groupedLow,
        grouped,
        setDummyConst,
        todoList
    } = useContext(TodoContext);

    const toggleDropDown = () => {
        setShowDropDown(!showDropDown);
    }

    const viewAllTodo = async () => {
        setDummyConst(todoList);
    }

    const groupItemWithHigh = () => {
        grouped();
        //const list = todoList.filter((todo) => todo.priority === 'high');
        setDummyConst(groupedHigh);
    }

    const groupItemWithAverage = () => {
        grouped();
        //const list = todoList.filter((todo) => todo.priority === 'average');
        setDummyConst(groupedAverage);
    }

    const groupItemWithLow = () => {
        grouped();
        //const list = todoList.filter((todo) => todo.priority === 'low');
        setDummyConst(groupedLow);
    }

    const eventHandler = (event) => {
        setButtonValue(event.target.outerText);
    }

    return (
        <div className="dropdown my-5 px-5">
            <span>View Only:</span>
            <button onClick={toggleDropDown} type='button' className=" bg-white border-black border
                text-stone-900 px-2 ml-2 py-2 rounded-lg font-semibold mt-4 w-1/6">
                {buttonValue.toUpperCase()}
                <span className="float-right hover:text-stone-900">▼</span>
            </button>
            {showDropDown ? (
                <div className='z-50 relative pt-0 ml-5 -mr-5' style={{ width: '25%' }}>
                    <ul className="flex flex-col absolute w-full bg-stone-50 border border-stone-400
                        rounded-md shadow-2xl overflow-hidden text-center">
                        <li className="hover:bg-black hover:text-white" onClick={eventHandler}>
                            <p onClick={() => {
                                viewAllTodo();
                                toggleDropDown();
                            }}
                                className='py-1 font-light border-b trans'>
                                All
                            </p>
                        </li>
                        <li className="hover:bg-black hover:text-white" onClick={eventHandler}>
                            <p onClick={() => {
                                groupItemWithHigh();
                                toggleDropDown();
                            }}
                                className='py-1 font-light border-b trans'>
                                high
                            </p>
                        </li>
                        <li className="hover:bg-black hover:text-white" onClick={eventHandler}>
                            <p onClick={() => {
                                groupItemWithAverage();
                                toggleDropDown();
                            }}
                                className='py-1 font-light border-b trans'>
                                average
                            </p>
                        </li>
                        <li className="hover:bg-black hover:text-white" onClick={eventHandler}>
                            <p onClick={() => {
                                groupItemWithLow();
                                toggleDropDown();
                            }}
                                className='py-1 font-light border-b trans'>
                                low
                            </p>
                        </li>
                        <li className="hover:bg-black hover:text-white">
                            <p onClick={() => {
                                window.location.replace("#subtask_section");
                                toggleDropDown();
                            }
                            }
                                className='py-1 font-light border-b trans'>
                                subtasks
                            </p>
                        </li>
                    </ul>
                </div>
            ) : null}
        </div>
    )
}

export default DropDownButton;