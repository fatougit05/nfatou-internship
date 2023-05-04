import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

 function Countdown({item}) {
    
        const timeRemaining = Math.floor((item?.expiryDate - Date.now()) /1000)
        const hours = Math.floor(timeRemaining/3600)
        const mins = Math.floor((timeRemaining % 3600)/60)
        const secs = timeRemaining%60
const [seconds,setSeconds] = useState(secs)
const [minutes,setMinutes] = useState(mins)
const [hour,setHours] = useState(hours)


let timer ;
        useEffect(() => {
          timer = setInterval(() => {
setSeconds(seconds - 1)

if(seconds ===0) {
  setMinutes(mins-1)
  setSeconds(59 +seconds)
}




if(minutes=== 0) {
  setHours(hours - 1)
}

          },timeRemaining)

          return () => clearInterval(timer)

        })
     
    
    

  return (
    

        <div className='de_countdown' key={item.id}>

        {
            item?.expiryDate - Date.now() > 0
            &&
            `${hours}h  ${mins}m ${seconds}s`
        }
        
        {
            item?.expiryDate - Date.now()===null && ``
        }

            </div>
         


  )

}





export default Countdown






