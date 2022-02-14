const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const days = ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun']

// const mexico = { datetime: '2022-02-10T18:05:23.431325+00:00', raw_offset: -21600 }
// const london = { datetime: '2022-02-10T18:05:23.431325+00:00', raw_offset: 0 }
// const asia = { datetime: '2022-02-10T18:05:23.431325+00:00', raw_offset: 18000 }

export const formatDate = (datetime, raw_offset) => {
  const date = new Date(datetime)
  const offset = raw_offset / 60 / 60

  return {
    hours: date.getUTCHours() + offset,
    minutes: date.getUTCMinutes(),
    strDay: days[date.getUTCDay() - 1],
    numDay: date.getUTCDate(),
    month: months[date.getUTCMonth()],
  }
}
// console.log(formatDate(mexico.datetime, mexico.raw_offset))
// console.log(formatDate(london.datetime, london.raw_offset))
// console.log(formatDate(asia.datetime, asia.raw_offset))

export const getDiferencia = (principalHours, hors2) => {
  if (hors2 > principalHours) return `+${Math.abs(principalHours - hors2)}`
  return `-${Math.abs(principalHours - hors2)}`
}
