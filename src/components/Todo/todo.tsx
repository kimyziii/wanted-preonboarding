import { useDispatch } from 'react-redux'
import { DELETE_TODO } from '../../store/slice/todoSlice'
import Button from '../Button/button'

type TodoType = {
  value: string
  id: string
}

const Todo = ({ value, id }: TodoType) => {
  const dispatch = useDispatch()

  function handleDelete() {
    dispatch(DELETE_TODO(id))
  }

  return (
    <div className='flex justify-between items-center border border-slate-200 rounded-lg px-2 py-1 min-h-10'>
      <div className='text-sm'>{value}</div>
      <Button value='Delete' handleType='delete' onClick={handleDelete} />
    </div>
  )
}

export default Todo
