import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import audioTaleById from '../../repository/audioTaleById'
import IdAudioComponent from '../../components/IdAudioComponent/infoIdComponent';

export default function InfoId() {
    const [audioByID, setAudioByID] = useState([])

    const id = useParams()

    async function getByID() {
        const currentTale = await audioTaleById.getAdudioTaleById(id.id)
        console.log(currentTale);
        setAudioByID(currentTale)
    }

    useEffect(() => {
        getByID()
    }, [])
    return (
        <div>
            <IdAudioComponent  item={audioByID}/>
        </div>
    )
}