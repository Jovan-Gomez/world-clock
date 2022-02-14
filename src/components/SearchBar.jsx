import React, { useEffect, useState } from 'react'

const SearchBar = ({ timeZones, setRegion }) => {
  const [inputValue, setInputValue] = useState('')
  const [items, setItems] = useState([])

  useEffect(() => {
    if (!inputValue) {
      setItems([])
      return
    }
    setItems(timeZones.filter((el) => el.toLowerCase().includes(inputValue.toLowerCase())))
  }, [inputValue])

  const handleSelect = (region) => {
    setRegion(region)
    setInputValue('')
    setItems([])
  }

  return (
    <div className='relative'>
      <div className='bg-[#F5F6F7] rounded-full py-2 px-4 w-full max-w-sm text-red-100'>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type='text'
          placeholder='Find place or timezone - Press'
          className='outline-none bg-transparent w-full rounded-full text-[#C7CACE] placeholder:text-[#C7CACE]'
        />
      </div>
      {items.length > 0 && (
        <ul className='timezones z-10 w-full max-w-[300px] max-h-60 overflow-auto bg-black rounded-lg shadow-sm p-2 absolute'>
          {items.map((item) => (
            <li
              onClick={() => handleSelect(item)}
              className='text-white hover:font-semibold hover:cursor-pointer'
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchBar
