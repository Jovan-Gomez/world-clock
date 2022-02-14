import React, { useEffect, useState } from 'react'
import { formatDate } from '../../helpers'
import { getTimeZoneByRegion, getTimeZones } from '../../services/worldtimeapi.service'
import Region from '../Region'
import SearchBar from '../SearchBar'
import './worldClockStyles.css'

const WorldClock = () => {
  const [regions, setRegions] = useState([])
  const [timeZones, setTimeZones] = useState([])
  const [region, setRegion] = useState('')
  const [principalHours, setPrincipalHours] = useState(0)

  useEffect(() => {
    if (localStorage.getItem('regions')) {
      setRegions(JSON.parse(localStorage.getItem('regions')))
    }
    if (!localStorage.getItem('timezones')) {
      getTimeZones().then((timezones) => setTimeZones(timezones))
      return
    }
    setTimeZones(JSON.parse(localStorage.getItem('timezones')))
  }, [])

  useEffect(() => {
    if (region) {
      const duplicate = JSON.parse(localStorage.getItem('regions')).find((el) => el.timezone === region)
      if (duplicate !== undefined) {
        return
      }
      getTimeZoneByRegion(region).then((region) => {
        setRegions([
          ...regions,
          {
            timezone: region.timezone,
            abbreviation: region.abbreviation,
            date: formatDate(region.datetime, region.raw_offset),
          },
        ])
        setRegion('')
      })
    }
  }, [region])
  useEffect(() => {
    if (regions[0]) {
      const principal = regions[0]
      setPrincipalHours(principal.date.hours)
    }
  }, [regions])
  useEffect(() => {
    localStorage.setItem('timezones', JSON.stringify(timeZones))
  }, [timeZones])

  useEffect(() => {
    localStorage.setItem('regions', JSON.stringify(regions))
  }, [regions])

  const handleRemove = (timezone = '') => setRegions(regions.filter((region) => region.timezone !== timezone))

  return (
    <div className=' bg-white w-full h-96 rounded-2xl shadow-lg p-5 flex flex-col gap-10'>
      <div className='w-full'>
        <SearchBar timeZones={timeZones} setRegion={setRegion} />
      </div>
      <div className='w-full timezones overflow-auto relative'>
        {regions.map((region, i) => {
          return (
            <Region
              key={region.timezone}
              region={region}
              index={i}
              handleRemove={handleRemove}
              principalHours={principalHours}
              setRegions={setRegions}
            />
          )
        })}
      </div>
    </div>
  )
}

export default WorldClock
