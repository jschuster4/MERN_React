import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from 'axios';
import ObiWan from './ObiWan.jpeg';


const Planet = props => {
    const { id } = useParams();
    const [planet, setPlanet] = useState({});
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get('https://swapi.dev/api/planets/' + id)
        .then(response=>
        {
            setPlanet(response.data)
            setError(false);
        })
        .catch(err => setError(true))
    }, [id])
    
    return(
        <div>
            {
                planet && error === false ?
                <div> 
                    <h1>Planet {planet.name}</h1>
                    <h3>Climate: {planet.climate}</h3>
                    <h3>Terrain: {planet.terrain}</h3>
                    <h3>Population: {planet.population}</h3>
                    <h3>Diameter: {planet.diameter}</h3>
                </div> : 
                <div>
                    <p>These arent the droids you were looking for</p> 
                    <img src={ObiWan} alt="Obi Wan Kenobi" />
                </div>
            }
        </div>
    )
}

export default Planet