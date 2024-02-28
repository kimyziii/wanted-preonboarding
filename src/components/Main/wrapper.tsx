import Input from '../Input/input'
import TodoList from '../List/list'

export function Wrapper() {
  return (
    <div className='w-[800px] flex flex-col gap-2 mt-10 items-center'>
      <Input />
      <TodoList />
    </div>
  )
}

export default Wrapper
