import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectTodos } from '../../store/slice/todoSlice'
import Todo from '../Todo/todo'

const TodoList = () => {
  const todos = useSelector(selectTodos)
  const [isNull, setIsNull] = useState<boolean>(false)

  useEffect(() => {
    if (todos.length === 0) setIsNull(true)
    else setIsNull(false)
  }, [todos])

  return (
    <div className='w-[60%] flex flex-col gap-1'>
      {!isNull &&
        todos.map((todo) => (
          <Todo key={todo.id} value={todo.value} id={todo.id} />
        ))}

      {isNull && (
        <div className='border rounded-lg min-w-full min-h-40 px-2 py-2 mx-auto grid place-items-center'>
          <span className='text-gray-500 text-sm'>데이터가 없습니다.</span>
        </div>
      )}
    </div>
  )
}

export default TodoList
