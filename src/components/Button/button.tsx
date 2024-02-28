type ButtonType = {
  value: string
  handleType: string
  onClick: () => void
}

type colorVarType = {
  [key: string]: string
}

export function Button({ value, handleType, onClick }: ButtonType) {
  const colorVar: colorVarType = {
    add: 'text-blue-800 border',
    delete: 'bg-red-600 text-white',
  }

  return (
    <button
      onClick={onClick}
      className={`px-2 py-1 rounded-lg text-xs ${colorVar[handleType]} min-h-8`}
    >
      {value}
    </button>
  )
}

export default Button
