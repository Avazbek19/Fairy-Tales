import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import audioTales from '../../repository/audioTales'
import AudioComponent from '../../components/audioComponent/audioComponent'


export default function AudioTales() {
    const [loading, setloading] = useState(false)
    const [audioTale, setAudioTale] = useState([])

    async function getAudioTale() {
        setloading(true)
        const current_audio = await audioTales.getAudioTales()
        setAudioTale(current_audio)
        setloading(false)
    }
    // console.log("audioTale =>", audioTale);

    useEffect(() => {
        getAudioTale()
    }, [])
    return (
        (loading) ?
            <div className="spinner">
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            :
            <AudioComponent item={audioTale} />
    )
}