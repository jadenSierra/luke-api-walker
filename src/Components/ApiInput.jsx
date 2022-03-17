import React, {useState} from 'react';
import { useHistory } from "react-router-dom"


function ApiInput() {

    const [searchItem, setSearchItem] = useState("");
    const [searchId, setSearchId] = useState(0);
    const history = useHistory();

    console.log(searchItem);
    console.log(searchId);

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/${searchItem}/${searchId}`)
    }

  return (

    <div>
        <form onSubmit={e => handleSubmit(e)}>
            <label >Search for:</label>
            <select name="search" id="searchOption" onChange={e => setSearchItem(e.target.value)}>
                <option value={"people"}>People</option>
                <option value={"planets"}>Planet</option>
            </select>
            <label>ID:</label>
            <input type={"number"} min={1} onChange={e => setSearchId(e.target.value)}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default ApiInput