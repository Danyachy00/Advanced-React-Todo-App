import {useEffect, useState} from "react";
import tasksAPI from "@/shared/api/tasks/index.js";

const TaskPage = (props) => {
    const {params} = props;

    const taskId = params.id;

    const [task, setTasks] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setHasError(false)

        tasksAPI.getById(taskId)
            .then((taskData) => {
                setTasks(taskData)
                setIsLoading(false)
            })
            .catch(() => {
                setHasError(true)
                setIsLoading(false)
            })

    }, [taskId])

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (hasError) {
        return <div>Task not found!</div>
    }

    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.isDone ? 'Task is Done!' : 'Task is not done'}</p>
        </div>
    )
}

export default TaskPage