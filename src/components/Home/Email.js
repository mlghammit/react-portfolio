import { useEffect, useState } from 'react'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './Email.scss'

function Email() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm("service_addtuaj","template_rnqs12r", form.current, 'uJjE5DLnalo5tNvvR')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Interested in connecting? Feel free to fill out the form below to get
            in contact with me, I am currently pursuing summer 2024 internships, 
            fun side-projects that come my way, and fostering my passion for
            continous learning. If you want a coffee chat, to the side is my 
            favourite one in London.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          My favourite coffee shop (London ON)
          <br />
          Black Walnut Cafe
          <br />
          724 Richmond St <br />
          <br />
          <span>hamzakhamissa@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[42.99478382938834, -81.25251463021884]} zoom={40}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[42.99478382938834, -81.25251463021884]}>
              <Popup>Come grab a cup of coffee with me!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  )
}

export default Email;