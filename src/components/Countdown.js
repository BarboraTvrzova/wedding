import React, { useEffect } from 'react'
import './Countdown.css'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { slideUp } from '../animations'

var today = new Date()
var event = new Date('May 24, 2022 13:00:00 GMT+1:00')
var diff = new Date(event.getTime() - today.getTime())

var months = diff.getMonth() // Gives month count of difference
var days = diff.getDate() - 1 // Gives day count of difference
var hrs = diff.getUTCHours() + 1

console.log(months, days, hrs)

const Countdown = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  return (
    <div className='countdown'>
      <motion.h2
        ref={ref}
        animate={controls}
        initial='hidden'
        transition={{
          ease: slideUp.transition.ease,
          duration: 0.5
        }}
        variants={{
          visible: slideUp.animate,
          hidden: slideUp.initial
        }}
      >
        May 24th, 2022
      </motion.h2>
      <motion.ul
        className='address'
        ref={ref}
        animate={controls}
        initial='hidden'
        transition={{
          ease: slideUp.transition.ease,
          duration: 0.5,
          delay: 0.3
        }}
        variants={{
          visible: slideUp.animate,
          hidden: slideUp.initial
        }}
      >
        <li>Na Dobre vode 39</li>
        <li>Prague-Kreslice</li>
        <li>Czech Republic</li>
      </motion.ul>
      <motion.div
        className='timer'
        ref={ref}
        animate={controls}
        initial='hidden'
        transition={{
          ease: slideUp.transition.ease,
          duration: 0.5,
          delay: 0.6
        }}
        variants={{
          visible: slideUp.animate,
          hidden: slideUp.initial
        }}
      >
        <div className='remaining'>
          {months}
          <span>months</span>
        </div>
        <div className='remaining'>
          {days}
          <span>days</span>
        </div>
        <div className='remaining'>
          {hrs}
          <span>hours</span>
        </div>
      </motion.div>
    </div>
  )
}

export default Countdown
