import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const Navbar = props => {
    const [resource, setResource] = useState("planet")
    const [id, setId] = useState(null);
    const navigate = useNavigate();


    const onSubmitHandler = e => {
        e.preventDefault();
        const starOb = {resource, id}
        props.starOb(starOb); 
        if (resource == "planet"){
            navigate("/planet/" + id)
        }
        else{
            navigate("/people/" + id)
        }
        setResource(resource);
        setId(id);
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                    <label htmlFor="resource">Search For:</label>
                    <select name="resource" onChange={(e) => setResource(e.target.value)} value={resource}>
                        <option value="planet">planet</option>
                        <option value="person">person</option>
                    </select>
                    <label htmlFor="id">ID</label>
                    <input type="text" name="id" onChange={(e) => setId(e.target.value)} value={id}/>
                    <input type="submit" value="Search" />
            </form>
        </div>
    )

}
export default Navbar;




