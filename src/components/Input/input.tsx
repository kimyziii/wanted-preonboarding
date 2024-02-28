import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADD_TODO } from '../../store/slice/todoSlice'
import Button from '../Button/button'

const Input = () => {
  const dispatch = useDispatch()
  const [todo, setTodo] = useState<string>('')

  function handleAdd() {
    dispatch(ADD_TODO({ value: todo, id: new Date().toISOString() }))
    setTodo(() => '')
  }

  return (
    <div className='w-[60%] flex flex-row justify-between gap-1'>
      <input
        value={todo || ''}
        className='bg-slate-200 w-full px-2 py-1 rounded-lg text-sm'
        placeholder='값을 입력하세요.'
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button value='Add' handleType='add' onClick={handleAdd} />
    </div>
  )
}

export default Input
