import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { slideUp } from '../animations'
import Spinner from '../components/Spinner'
import GeorgiaWedding from '../img/georgia-wedding.jpg'

import 'react-toastify/dist/ReactToastify.css'
import './Rsvp.css'
import { useParams } from 'react-router-dom'

const API_URL = 'https://jeff-bara-wedding-guest-list.herokuapp.com'

const Rsvp = () => {
  let { id: paramId } = useParams()
  const [isVeggieChecked, setIsVeggieChecked] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isPlusOneVeggieChecked, setIsPlusOneVeggieChecked] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [showSecret, setShowSecret] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: null,
    vegetarian: null,
    plus_one_vegetarian: null
  })

  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const getFirstName = () => {
    const name = formData.name.split(' ')
    const firstName = name[0]
    return firstName
  }

  const handleSubmit = async e => {
    e.preventDefault()

    setLoading(true)

    const res = await fetch(`${API_URL}/guests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (!res.ok) {
      toast.error('Something Went Wrong!')
    } else {
      const evt = await res.json()
      setTimeout(() => {
        setLoading(false)
        setFormSubmitted(true)
        toast.success('RSVP Submitted!')
      }, 1500)
    }
  }

  const handleInputChange = e => {
    const { name, value } = e.target

    if (name === 'vegetarian') {
      setIsVeggieChecked(!isVeggieChecked)
      setFormData({ ...formData, vegetarian: !isVeggieChecked })
    } else if (name === 'plus_one_vegetarian') {
      setIsPlusOneVeggieChecked(!isPlusOneVeggieChecked)
      setFormData({ ...formData, plus_one_vegetarian: !isPlusOneVeggieChecked })
    } else if (name === 'attending') {
      setFormData({ ...formData, attending: parseInt(value) })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  return (
    <div className='rsvp' id='rsvp'>
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
        Join us
      </motion.h2>
      <ToastContainer />

      {!formSubmitted ? (
        <motion.form
          onSubmit={handleSubmit}
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
          exit={slideUp.exit}
        >
          <input
            className='form-field'
            type='text'
            placeholder='Full Name'
            name='name'
            maxLength={30}
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            className='form-field'
            type='email'
            name='email'
            placeholder='Email address'
            value={formData.email}
            onChange={handleInputChange}
          />
          <div className='radios'>
            <h4>Will you be joining us?</h4>
            <div className='radio-group'>
              <input
                type='radio'
                name='attending'
                id='not-attending'
                value={0}
                onChange={handleInputChange}
              />
              <label htmlFor='not-attending'>
                Unfortunatelly, I cannot make it
              </label>
            </div>
            <div className='radio-group'>
              <input
                type='radio'
                name='attending'
                id='will-be-attending'
                value={1}
                onChange={handleInputChange}
              />{' '}
              <label htmlFor='will-be-attending'>I will be attending</label>
            </div>
            {paramId === 'plus-one' && (
              <div className='radio-group'>
                <input
                  type='radio'
                  name='attending'
                  id='attending-with-guest'
                  value={2}
                  onChange={handleInputChange}
                />{' '}
                <label htmlFor='attending-with-guest'>
                  I will be attending and I am bringing a plus one
                </label>
              </div>
            )}
          </div>
          <div className='radios'>
            <h4>
              Our served lunch menu will contain meat (beef). Please tick if you
              are vegetarian
            </h4>
            <div className='radio-group'>
              <input
                type='checkbox'
                name='vegetarian'
                id='vegetarian'
                checked={isVeggieChecked} // false
                onChange={handleInputChange}
              />
              <label htmlFor='vegetarian'>I am a vegetarian</label>
            </div>
            {paramId === 'plus-one' && (
              <div className='radio-group'>
                <input
                  type='checkbox'
                  name='plus_one_vegetarian'
                  id='plus_one_vegetarian'
                  checked={isPlusOneVeggieChecked}
                  onChange={handleInputChange}
                />
                <label htmlFor='plus_one_vegetarian'>
                  My plus one is a vegetarian
                </label>
              </div>
            )}
          </div>

          {isLoading ? (
            <Spinner />
          ) : (
            <button
              className={`${
                formData.name && formData.email && formData.attending !== null
                  ? ''
                  : 'disabled'
              }`}
            >
              Submit
            </button>
          )}
        </motion.form>
      ) : (
        <div className='thank-you'>
          {!formData.attending ? (
            <>
              <h3>
                We are sorry you couldn't make it,{' '}
                <span style={{ textTransform: 'capitalize' }}>
                  {getFirstName()}
                </span>
                ! 🥺
              </h3>

              <p>We also have a secret to reveal...</p>

              {!showSecret && (
                <button
                  className='secret-btn'
                  onClick={() => setShowSecret(true)}
                >
                  What's the secret?
                </button>
              )}

              {showSecret && (
                <>
                  <h3 className='eloped-h3'>We eloped in Georgia! </h3>

                  <div className='georgia-pic'>
                    <img src={GeorgiaWedding} alt='' />
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              <h3>Thank you for RSVP-ing {getFirstName()}!</h3>
              <p style={{ marginTop: 10 }}>
                We can't wait for you to join us on our big day 😁
              </p>

              <p>We also have a secret to reveal...</p>

              {!showSecret && (
                <button
                  className='secret-btn'
                  onClick={() => setShowSecret(true)}
                >
                  What's the secret?
                </button>
              )}

              {showSecret && (
                <>
                  <h3 className='eloped-h3'>We eloped in Georgia! </h3>

                  <div className='georgia-pic'>
                    <img src={GeorgiaWedding} alt='' />
                  </div>
                </>
              )}
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default Rsvp
