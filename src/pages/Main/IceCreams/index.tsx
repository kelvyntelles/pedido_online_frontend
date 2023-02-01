import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import SnackTitle from "../../../components/SnackTitle"

export default function IceCreams() {
  const data = [
    {
      id: 1,
      snack: 'sorvete',
      name: 'Mega',
      description: 'O artesanal tamanho família recheado com três carnes suculentas, queijo e bacon.',
      price: 25,
      image: 'https://i.imgur.com/upjIUnG.jpg'
    },
    {
      id: 2,
      snack: 'sorvete',
      name: 'Extra bacon',
      description: 'Criado para os amantes de bacon',
      price: 23.5,
      image: 'https://i.imgur.com/B4J04AJ.jpg'
    },
    {
      id: 3,
      snack: 'sorvete',
      name: 'Teste',
      description: 'Criado para fins de teste',
      price: 23.5,
      image: 'https://i.imgur.com/B4J04AJ.jpg'
    },
  ]

  return (
    <>
    <Head title="Sorvetes" />
    <SnackTitle>Sorvetes</SnackTitle>
    <Snacks snacks={data}></Snacks>
    </>
  )
}
