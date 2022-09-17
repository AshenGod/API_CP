import axios from "axios"
import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
const ListUsers=()=>{
    const [users,setUsers] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=> setUsers(res.data))
        .then(()=> setLoading(false))
        .catch((error)=>console.log(error))
    },[])
    return(
        <div id="users">
             {
               loading ? <Button variant="primary" disabled>
               <Spinner
                 as="span"
                 animation="grow"
                 size="sm"
                 role="status"
                 aria-hidden="true"
               />
               Loading...
             </Button> :  users.map(user => <Link to={`/Users/${user.id}`}><h2 id="userlist">{user.name}</h2></Link>)
             }
        </div>
    )
}

export default ListUsers