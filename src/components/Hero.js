import React, { useEffect } from 'react'
import './Hero.css'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { slideUp } from '../animations'

const Hero = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <div className='hero-container'>
      <div className='hero-bg' />
      <div className='hero'>
        <motion.div className='hero-content'>
          <motion.h1
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
            Jeff & Bara
          </motion.h1>
          <motion.p
            className='subtitle'
            ref={ref}
            animate={controls}
            initial='hidden'
            transition={{
              ease: slideUp.transition.ease,
              duration: 0.5,
              delay: 0.9
            }}
            variants={{
              visible: slideUp.animate,
              hidden: slideUp.initial
            }}
          >
            Would like to invite you for their wedding celebration
          </motion.p>
          <motion.p
            className='hero-date'
            ref={ref}
            animate={controls}
            initial='hidden'
            transition={{
              ease: slideUp.transition.ease,
              duration: 0.5,
              delay: 1.2
            }}
            variants={{
              visible: slideUp.animate,
              hidden: slideUp.initial
            }}
          >
            Tuesday 24th of May 2022
          </motion.p>
          <motion.p
            ref={ref}
            animate={controls}
            initial='hidden'
            transition={{
              ease: slideUp.transition.ease,
              duration: 0.5,
              delay: 1.5
            }}
            variants={{
              visible: slideUp.animate,
              hidden: slideUp.initial
            }}
            className='font'
          >
            1:00pm
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
