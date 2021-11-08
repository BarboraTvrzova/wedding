import React from 'react'
import "./Location.css"

import { withScriptjs ,withGoogleMap, GoogleMap, Marker } from "react-google-maps"


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={11}
    defaultCenter={{ lat: 50.0304121, lng: 14.564531 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 50.0304121, lng: 14.564531 }} />}
  </GoogleMap>
))

export const Location = () => {
//api-key: AIzaSyCVoSZ2xc6gv8lwo2uNoyUXiz7teAZNN-g
  return (
    <div className="location">
      <h2>Location</h2>
      <a href="https://www.google.com/maps/place/Ml%C3%BDn+na+Dobr%C3%A9+vod%C4%9B/@50.0348132,14.5330178,12.62z/data=!4m12!1m6!3m5!1s0x0:0x927ef01468415429!2zTWzDvW4gbmEgRG9icsOpIHZvZMSb!8m2!3d50.0304244!4d14.5645439!3m4!1s0x0:0x927ef01468415429!8m2!3d50.0304244!4d14.5645439">
        <ul className="address" target="_blank">
          <li>Na Dobre vode 39</li>
          <li>Prague-Kreslice</li>
          <li>Czech Republic</li>
        </ul>
      </a>
      <div className="map" style={{ height: '500px', width: '80%', margin: "0 auto" }}>
        <MyMapComponent
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCVoSZ2xc6gv8lwo2uNoyUXiz7teAZNN-g&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `500px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          isMarkerShown 
        />
      </div>
      <h3>Accomodation</h3>
      <p>We know most of you will be coming from very far. Since some of you might wanna stay longer and enjoy couple days in Prague or maybe continue somewhere afterwards, we recommend simply checking booking.com (or any other platform you might prefer for that matter) and chosing the dates and type of accomodation that will work for you the best. </p>
      <a href="https://www.booking.com/searchresults.html?label=gen173nr-1DCBkoggI46AdIM1gEaAKIAQGYATG4AQfIAQzYAQPoAQH4AQKIAgGoAgO4Aquhj4wGwAIB0gIkMjU4ZmVmMzAtMDRkNC00MTc3LWFmZTEtNzkxZWNmMmIzM2I32AIE4AIB&lang=en-us&sid=558a380bdf7b437707fd8a1459c4c7a6&sb=1&sb_lp=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.html%3Flabel%3Dgen173nr-1DCBkoggI46AdIM1gEaAKIAQGYATG4AQfIAQzYAQPoAQH4AQKIAgGoAgO4Aquhj4wGwAIB0gIkMjU4ZmVmMzAtMDRkNC00MTc3LWFmZTEtNzkxZWNmMmIzM2I32AIE4AIB%3Bsid%3D558a380bdf7b437707fd8a1459c4c7a6%3Bsb_price_type%3Dtotal%3Bsig%3Dv14bielcZr%26%3B&ss=Prague%2C+Czech+Republic&is_ski_area=&checkin_year=&checkin_month=&checkout_year=&checkout_month=&group_adults=2&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1&ss_raw=Prague&ac_position=0&ac_langcode=en&ac_click_type=b&dest_id=-553173&dest_type=city&iata=PRG&place_id_lat=50.08773&place_id_lon=14.421133&search_pageview_id=13165717193f0215&search_selected=true&search_pageview_id=13165717193f0215&ac_suggestion_list_length=5&ac_suggestion_theme_list_length=0" target="_blank">Hotels in Prague</a>

    </div>
  )
}

export default Location