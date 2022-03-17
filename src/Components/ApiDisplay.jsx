import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"

function ApiDisplay(props) {

    const {search, id} = useParams();

    const [resData, setResData] = useState([]);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${search}/${id}/`)
            .then(response => setResData(response.data))
    }, [search, id])

    console.log(resData) 

  return (
    <div>
        <div>
            { (search === "people") ? 
                <div>
                    <h1>{resData.name}</h1>
                    <p><strong>Height:</strong>    {resData.height}cm</p>
                    <p><strong>Mass:</strong>    {resData.mass}kg</p>
                    <p><strong>Hair Color:</strong>    {resData.hair_color}</p>
                    <p><strong>Skin Color:</strong>    {resData.skin_color}</p>
                </div> :
                (search === "planets") ?               
                <div>
                    <h1>{resData.name}</h1>
                    <p><strong>Climate:</strong>    {resData.climate}</p>
                    <p><strong>Terrain:</strong>    {resData.terrain}</p>
                    <p><strong>Surface Water:</strong>    {resData.surface_water}</p>
                    <p><strong>Population:</strong>    {resData.population}</p>
                </div> : alert("please enter a valid Search Option") }
        </div>
    </div>
  )
}

export default ApiDisplay