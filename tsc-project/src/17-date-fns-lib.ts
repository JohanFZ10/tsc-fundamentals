import {format, subDays} from 'date-fns'

const date = new Date()   // Obtener la fecha actual
const daysAmount = date.getDate()
console.log(date)
console.log(daysAmount)

const newDate = subDays(date,daysAmount)
console.log(newDate);

// Formatear fecha
const finalDate = format(newDate, 'yyyy-MM-dd')
console.log(finalDate)
