import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios';
import ObiWan from './ObiWan.jpeg';


const People = props => {
    const [person, setPerson]= useState({});
    const { id } = useParams();
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/' + id)
        .then(response=>{
            setPerson(response.data)
            setError(false);
        })
        .catch(err => setError(true) )
        // is response.data correct json path?
    }, [id])

    return(
        <div>
            {person && error === false ? 
                <div> 
                    <h3>Name: {person.name} </h3>
                    <h3>Height: {person.height} </h3>
                    <h3>Hair color: {person.hair_color} </h3>
                    <h3>Gender: {person.gender} </h3>
                </div>
                : <div> 
                    <p>These arent the droids you were looking for</p> 
                    <img src={ObiWan} alt="Obi Wan Kenobi" />
                </div>
            
            }
        </div>
    )
}

export default People;