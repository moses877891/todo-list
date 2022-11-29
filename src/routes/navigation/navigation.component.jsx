import { Link, Outlet } from 'react-router-dom';

import './navigation.styles.scss';

const Navigation = () => {

    return (
        <>
            <div className='flex justify-between pt-2 px-3 pb-4 border-b bg-white'>
                <Link to='/' className=' font-semibold text-3xl'>ToDo List</Link>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation;