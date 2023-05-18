import React from 'react'

const PeticionApi = () => {

    const [personajes, setPersonajes] = React.useState([])
    const [paginacion, setPaginacion] = React.useState(1)

    const traerPersonajes = async () => {
        const res = await fetch(`https://api.spacexdata.com/v4/ships`)
        const result = await res.json()

        setPersonajes(result)

        return () => {}
    }

    const siguiente = () =>{
        setPaginacion(paginacion+1)
        traerPersonajes()
    }

    const atras = () =>{
        setPaginacion(paginacion-1)
        traerPersonajes()
    }
  return (
    <div>
        <h1>PETICIÓN AL API DE BARCOS</h1>
        <button onClick={traerPersonajes}>Traer Personajes</button>
        <button onClick={atras}>Atrás</button>
        <button onClick={siguiente}>Siguiente</button>
        
        {
            personajes.map(({id, name, image}) => (
                <div key= {id}>
                    <h4>{id} - {name}</h4>
                    <img src={image} alt={name} />
                </div>
            ))
        }
        
    </div>
  )
}

export default PeticionApi