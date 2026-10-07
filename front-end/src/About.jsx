import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './About.css'
const AboutUs = () => {
    const [text, setText] = useState([]);
    const[pic, setPic] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState('');
    const [feedback, setFeedback] = useState('');

    const fetchData = () => {
        axios
      .get(`${import.meta.env.VITE_SERVER_HOSTNAME}/aboutUs`)
      .then(response => {
        const text = response.data.text
        setText(text)
      })
    }
    useEffect(() => {
        fetchData()
    const intervalHandle = setInterval(() => {
      fetchData()
    }, 5000)

    return e => {
      clearInterval(intervalHandle)
    }
  }, []) 

return(
    <>
    <h1>About Me</h1>

    <div className="textbox">
        <p>text below:</p>
        <p>{text}</p>
    </div>

    </>

)
}
export default AboutUs
