import React from 'react'
import "./Countdown.css"

// let date = new Date

// let currentDate = {
//   month: date.getMonth(),
//   day: date.getDate(),
//   hrs: date.getHours()
// }

// console.log(currentDate)

// const weddingDate = new Date('May 24, 2022 13:00:00 GMT+1:00')
// console.log(weddingDate)

// let eventDate = {
//   month: weddingDate.getMonth(),
//   day: weddingDate.getDate(),
//   hrs: weddingDate.getHours()
// }

// console.log(eventDate)


var today = new Date();
var event = new Date('May 24, 2022 13:00:00 GMT+1:00')
var diff = new Date(event.getTime() - today.getTime());

var months = diff.getMonth(); // Gives month count of difference
var days = diff.getDate()-1; // Gives day count of difference
var hrs = diff.getUTCHours() +1

console.log(months, days, hrs)

const Countdown = () => {
  return (
    <div className="countdown">
      <h2>May 24th, 2022</h2>
      <ul className="address">
        <li>Na Dobre vode 39</li>
        <li>Prague-Kreslice</li>
        <li>Czech Republic</li>
      </ul>
      <div className="timer">
        <div className="remaining">
         {months}
         <span>months</span> 
        </div>
        <div className="remaining">
          {days}
          <span>days</span> 
        </div>
        <div className="remaining">
         {hrs} 
         <span>hours</span> 
        </div>
      </div>
    </div>
  )
}

export default Countdown
