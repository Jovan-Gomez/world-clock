const getTimeZones = async () => {
  try {
    const baseUrl = 'http://worldtimeapi.org/api/timezone'
    const response = await fetch(baseUrl)
    return await response.json()
  } catch (error) {
    console.error(error)
  }
}
const getTimeZoneByRegion = async (region) => {
  try {
    const baseUrl = `http://worldtimeapi.org/api/timezone/${region}`
    const response = await fetch(baseUrl)
    return await response.json()
  } catch (error) {
    console.error(error)
  }
}

export { getTimeZones, getTimeZoneByRegion }
