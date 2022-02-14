import { useEffect, useState } from 'react'
import { getDiferencia } from '../helpers'
import Hour from './WorldClock/Hour'

const Region = ({ region, index, handleRemove, principalHours, setRegions }) => {
  const { timezone, abbreviation, date } = region
  const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

  const [selectHour, setSelectHour] = useState(0)

  useEffect(() => {
    if (selectHour) {
      setRegions((prev) =>
        prev.map((region) => {
          if (region.timezone === timezone) {
            return {
              ...region,
              date: {
                ...region.date,
                hours: selectHour,
              },
            }
          }
          return region
        })
      )
    }
  }, [selectHour])
  return (
    <div className='grid w-full items-center pb-5 ' style={{ gridTemplateColumns: '1.5fr 3fr' }}>
      <div className='flex items-center gap-4'>
        <div
          onClick={() => handleRemove(timezone)}
          className='w-12 h-12 hover:bg-red-300 hover:cursor-pointer transition-colors rounded-full flex justify-center items-center'
        >
          <img src='../public/img/trash_icon.png' alt='trash-icon' width={20} />
        </div>
        <div className='w-12 h-12 bg-[#F5F6F7] rounded-full flex justify-center items-center'>
          {index === 0 ? (
            <img src='../public/img/home_icon.png' alt='home-icon' width={20} />
          ) : (
            <span className='font-bold text-lg'>{getDiferencia(principalHours, date.hours)}</span>
          )}
        </div>
        <div>
          <h3 className='font-bold'>{timezone.split('/')[0]}</h3>
          <span className='text-sm'>{timezone.split('/')[1]}</span>
        </div>
        <div>
          <p className='font-bold'>
            {date.hours}:{date.minutes}
            {abbreviation}
          </p>
          <span className='text-center block text-sm'>
            {date.strDay}, {date.month} {date.numDay}
          </span>
        </div>
      </div>
      <div className='flex select__hour'>
        <div className='flex items-center justify-between w-full bg-[#F5F6F7] rounded-xl px-2 '>
          {hours.map((h) => (
            <Hour key={h} isAm={true} index={index} setSelectHour={setSelectHour}>
              {h}
            </Hour>
          ))}
          <Hour isAm={false} index={index} setSelectHour={setSelectHour}>
            12
          </Hour>
          {hours.map((h) => (
            <Hour key={h} isAm={false} index={index} setSelectHour={setSelectHour}>
              {h}
            </Hour>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Region
