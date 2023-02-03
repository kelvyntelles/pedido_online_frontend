import { useState, useEffect } from "react"
import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import SnackTitle from "../../../components/SnackTitle"
import { getBurguers } from "../../../services/api"

export default function Burgers() {
  const [burguers, setBurguers] = useState([])

  useEffect(() => {
    ;(async () => {
      const burguerRequest = await getBurguers()

      setBurguers(burguerRequest.data)
    })()
  }, [])

  return (
    <>
    <Head title="Hambúrgueres" description="Nossos melhores burguers" />
    <SnackTitle>Hambúrgueres</SnackTitle>
    <Snacks snacks={burguers}></Snacks>
    </>
  )
}


