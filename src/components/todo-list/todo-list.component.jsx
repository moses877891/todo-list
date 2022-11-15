const ToDoListComponent = ({ list }) => {
    const { toDo, note, priority, date } = list;

    return (
        <>
            <tbody>
                <tr className="bg-white border-b ">
                    <td className="py-4 px-6 font-medium">{toDo}</td>
                    <td className="py-4 px-6">{note}</td>
                    <td className="py-4 px-6">{priority}</td>
                    <td className="py-4 px-6">{date}</td>
                </tr>
            </tbody>
        </>
    )
}

export default ToDoListComponent;