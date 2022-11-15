import { Outlet } from 'react-router-dom';
import { useContext } from 'react';

import { ShowModalContext } from '../../context/showmodal.context';

import './navigation.styles.scss';

const Navigation = () => {
    const { showModal, setShowModal } = useContext(ShowModalContext);

    const toggleShowModal = () => {
        setShowModal(!showModal);
        console.log(showModal);
    }

    return (
        <>
            <div className='flex justify-between pt-2 px-3 pb-4 border-b'>
                <p className=' font-semibold text-3xl'>ToDo List</p>
                <span className=' bg-slate-300 rounded-md py-2 px-3'
                    onClick={toggleShowModal}
                >
                    + Add
                </span>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation;