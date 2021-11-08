import React from 'react'
import "./Rsvp.css"

const Rsvp = () => {
  return (
    <div className="rsvp" id="rsvp">
      <h2>Join us</h2>
      <form action="">
        <input className="form-field" type="text" placeholder="Name"/>
        <input className="form-field" type="email" placeholder="Email address"/>
        <div className="radios">
          <h4>Will you be joining us?</h4>
          <div className="radio-group">
            <input type="radio" name="guests" value="0" />Unfortunatelly, I am not gonna make it
          </div>
          <div className="radio-group">
           <input type="radio" name="guests" value="1"/> I will be attending
          </div>
          <div className="radio-group">
            <input type="radio" name="guests" value="2" /> I will be attending and I am bringing a plus one
          </div>
        </div>
        <div className="radios">
          <h4>Our served lunch menu will contain meat (beef). Please tick if you are vegetarian</h4>
          <div className="radio-group">
            <input type="checkbox" name="veg" value="veg" /> I am a vegetarian
          </div>
          <div className="radio-group">
            <input type="checkbox" name="veg" value="veg" /> My plus one is a vegetarian
          </div>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Rsvp
