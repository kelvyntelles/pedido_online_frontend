import { useState, useEffect } from 'react'
import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import SnackTitle from "../../../components/SnackTitle"
import { getIceCreams } from '../../../services/api'

export default function IceCreams() {
  const [iceCreams, setIceCreams] = useState([])

  useEffect(() => {
    ;(async () => {
      const pizzaRequest = await getIceCreams()

      setIceCreams(pizzaRequest.data)
    })()
  }, [])

  return (
    <>
    <Head title="Sorvetes" />
    <SnackTitle>Sorvetes</SnackTitle>
    <Snacks snacks={iceCreams}></Snacks>
    </>
  )
}
