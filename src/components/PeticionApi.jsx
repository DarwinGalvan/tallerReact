import React from 'react'

const PeticionApi = () => {

    const [personajes, setPersonajes] = React.useState([])
    const [paginacion, setPaginacion] = React.useState(0)

    const traerPersonajes = async (paginacion) => {
        console.log(paginacion);
        const res = await fetch(`https://api.spacexdata.com/v3/ships?limit=4&offset=${paginacion}`)
        const result = await res.json()

        setPersonajes(result)

        return () => {}
    }

    const siguiente = () =>{
        setPaginacion(paginacion+4)
        traerPersonajes(paginacion+4)
    }

    const atras = () =>{
        setPaginacion(paginacion-4)
        traerPersonajes(paginacion<=0?0: paginacion-4)
    }
  return (
    <div className='container-fluid'>
        
        <h1 className='title'>PETICIÓN AL API DE BARCOS</h1>
        <hr />
        <div className="botones">
        <button className='btn btn-primary btn-lg ' onClick={traerPersonajes}>Traer Barcos </button>
        </div>
        <br />
            <div className="botones">
                <button className='btn btn-danger btn-lg' onClick={atras}>   Atrás   </button>
                <button className='btn btn-success btn-lg' onClick={siguiente}>Siguiente</button>
            </div>
        <div className="row space">
        {
            personajes.map(({ship_id: id, ship_name: name, image}) => (
                <div key= {id} className='col-xs-12 col-lg-3'>
                    <h6>id: {id} </h6> <h4>Name: {name}</h4>
                    <img className="img-thumbnail img" src={image} alt={name} />
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default PeticionApi