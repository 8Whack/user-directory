import React, {useState} from 'react'
import data from '../data'


let currIndex = 1
function Info() {
    
    const [firstName, setFirstName] = useState(data[0].name.first);
    const [lastName, setLastName] = useState(data[0].name.last);
    const [from, setFrom] = useState(data[0].city + ', '+ data[0].country);
    const [title, setTitle] = useState(data[0].title);
    const [employer, setEmployer] = useState(data[0].employer);
    const [movies, setMovies] = useState(data[0].favoriteMovies);

    function next() {
        
        if(currIndex < 23){
            currIndex++;
        }else{
            currIndex = 24;
        };
        setFirstName(data[currIndex].name.first);
        setLastName(data[currIndex].name.last);
        setFrom(data[currIndex].city + ', '+ data[currIndex].country);
        setTitle(data[currIndex].title);
        setEmployer(data[currIndex].employer);
        setMovies(data[currIndex].favoriteMovies)
        console.log(movies)
        
    }

    function previous() {
        if(currIndex > 0){
            currIndex--;
        }else{
            currIndex = 0;
        };
        setFirstName(data[currIndex].name.first);
        setLastName(data[currIndex].name.last);
        setFrom(data[currIndex].city + ', '+ data[currIndex].country);
        setTitle(data[currIndex].title);
        setEmployer(data[currIndex].employer);
        setMovies(data[currIndex].favoriteMovies)
        
    }

  return (
    <div style={{backgroundColor: 'white'}}>
        <h1>{firstName+ ' '+ lastName}</h1>
        <p><b>From:</b> {from}</p>
        <p><b>Job Title:</b> {title}</p>
        <p><b>Employer:</b> {employer}</p>
        <p><b>Favorite Movies:</b></p>
        <ol>
            <li>{movies[0]}</li>
            <li>{movies[1]}</li>
            <li>{movies[2]}</li>
        </ol>
        <button onClick={()=>previous()}> &lt; Previous </button>
        <button onClick={()=>next()}>Next &gt;</button>
    </div>
  )
}

export default Info