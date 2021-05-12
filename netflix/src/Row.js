import React, {useState} from 'react'

function Row({title}){
    const [movie, setMovies] = useState([])
    return(
        <>
            <h2>{title}</h2>
        </>
    )
}

export default Row