import React from 'react'

const PeticionApi = () => {

    const [personajes, setPersonajes] = React.useState([])
    const [objCoy, setCoy] = React.useState([])
    const [paginacion, setPaginacion] = React.useState(1)

    const traerPersonajes = async () => {
        const res = await fetch(`https://api.spacexdata.com/v4/ships`)
        const result = await res.json()
        const respuesta = 
        {
            "Galvan":[
               {
                  "last_ais_update":null,
                  "legacy_id":"AMERICANCHAMPION",
                  "model":null,
                  "type":"Tug",
                  "roles":[
                     "Support Ship",
                     "Barge Tug"
                  ],
                  "imo":7434016,
                  "mmsi":367020820,
                  "abs":571252,
                  "class":7604342,
                  "mass_kg":266712,
                  "mass_lbs":588000,
                  "year_built":1976,
                  "home_port":"Port of Los Angeles",
                  "status":"",
                  "speed_kn":null,
                  "course_deg":null,
                  "latitude":null,
                  "longitude":null,
                  "link":"https://www.marinetraffic.com/en/ais/details/ships/shipid:434663/mmsi:367020820/imo:7434016/vessel:AMERICAN_CHAMPION",
                  "image":"https://i.imgur.com/woCxpkj.jpg",
                  "name":"American Champion",
                  "active":false,
                  "launches":[
                     "5eb87cdeffd86e000604b330",
                     "5eb87cdfffd86e000604b331"
                  ],
                  "id":"5ea6ed2d080df4000697c901"
               }
            ],
            "Coy":{
               "name":"juan"
            }
         }
         
        const Galvan = respuesta;
        const{Coy} = respuesta
        console.log(Galvan)
        setPersonajes(Galvan.Galvan)
        setCoy(Coy)
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
        <h1>PETICIÓN AL API DE RICK AND MORTY</h1>
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
        {
            objCoy.name
        }
        
    </div>
  )
}

export default PeticionApi