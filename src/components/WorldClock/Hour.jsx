const Hour = ({ children, isAm, index, setSelectHour }) => {
  const handleClick = () => {
    if (index === 0) {
      setSelectHour(children)
      return
    }
  }
  return (
    <span
      onClick={handleClick}
      className={`block leading-4 text-sm font-semibold  ${index === 0 ? 'cursor-pointer select_hour' : ''}`}
    >
      {children}
      <span className='block text-[10px] '>{isAm ? 'am' : 'pm'}</span>
    </span>
  )
}

export default Hour
