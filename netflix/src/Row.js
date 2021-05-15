import React, {useState, useEffect} from 'react'
import axios from './axios'

const base_url ='https://image.tmdb.org/t/p/original/'
function Row({title, fetchUrl}){
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            // console.log(request.data.results);
            setMovies(request.data.results)
            return request
        }
        fetchData();
    }, [fetchUrl]);
    console.table(movies)
    return(
        <div className='row'>
            <h2>{title}</h2>
            <div className='posters'>
                {
                    movies.map((movie, index)=>
                    <img src={`${base_url}${movie.backdrop_path}`} alt={movie.name}/>
                    )
                }
            </div>
        </div>
    )
}

export default Row