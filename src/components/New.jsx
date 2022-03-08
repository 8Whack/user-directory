import React, {useState} from 'react'
import data from '../data'

function New() {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [job, setJob] = useState('');
    const [employer, setEmployer] = useState('');
    const [movie1, setMovie1] = useState('');
    const [movie2, setMovie2] = useState('');
    const [movie3, setMovie3] = useState('');

    function submit() {
        let obj = {
            name: name,
            city: city,
            country: country,
            title: job,
            employer: employer,
            favoriteMovies: [movie1, movie2, movie3]
        }
        data.push(obj)
        setName('')
    }
  return (
    <div>
        <form>
            Name:
            <input placeholder='Name' onChange={()=> setName()}></input>
            City:
            <input placeholder='City' onChange={()=> setCity()} ></input>
            <input placeholder='Country' onChange={()=>setCountry()}></input>
            <input placeholder='Current Job' onChange={()=> setJob()}></input>
            <input placeholder='Employer' onChange={()=> setEmployer()} >
            </input>
            Favorite Movies:
            <input placeholder='Movie 1' onChange={()=> setMovie1()}></input>
            <input placeholder='Movie 2' onChange={()=> setMovie2()}></input>
            <input placeholder='Movie 3' onChange={()=> setMovie3()}></input>
        </form>
        <button onClick={()=> submit()}>Submit</button>
    </div>
  )
}

export default New