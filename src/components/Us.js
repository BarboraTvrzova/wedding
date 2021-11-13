import React, { useEffect } from 'react'
import './Us.css'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { slideUp } from '../animations'
import Jeff from '../img/Jeff.jpeg'
import Bara from '../img/Bara3.jpeg'

const Us = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  return (
    <div className='us'>
      <div className='us-content'>
        <motion.div
          className='photo jeff'
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
          <img src={Jeff} alt='' />
        </motion.div>
        <motion.p
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
          Jeff & Bara
        </motion.p>
        <motion.div
          className='photo bara'
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
          <img src={Bara} alt='' />
        </motion.div>
      </div>
    </div>
  )
}

export default Us
