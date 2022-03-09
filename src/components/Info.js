import React, {useState} from 'react'
import data from '../data'
import Edit from './Edit';
import New from './New';
import NewFormik from './NewFormik';


let currIndex = 0
function Info() {
    
    const [firstName, setFirstName] = useState(data[0].name.first);
    const [lastName, setLastName] = useState(data[0].name.last);
    const [from, setFrom] = useState(data[0].city + ', '+ data[0].country);
    const [title, setTitle] = useState(data[0].title);
    const [employer, setEmployer] = useState(data[0].employer);
    const [movies, setMovies] = useState(data[0].favoriteMovies);
    const [newDisplay, setNewDisplay] = useState(false);
    const [edit, setEdit] = useState(false);

    function next() {
        
        if(currIndex < data.length){
            currIndex++;
        }else{
            currIndex = data.length;
        };
        setFirstName(data[currIndex].name.first);
        setLastName(data[currIndex].name.last);
        setFrom(data[currIndex].city + ', '+ data[currIndex].country);
        setTitle(data[currIndex].title);
        setEmployer(data[currIndex].employer);
        setMovies(data[currIndex].favoriteMovies)
        
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
    
    function deleteCard() {
        
        data.splice(currIndex, 1)
        console.log(data)
        setFirstName(data[currIndex].name.first);
        setLastName(data[currIndex].name.last);
        setFrom(data[currIndex].city + ', '+ data[currIndex].country);
        setTitle(data[currIndex].title);
        setEmployer(data[currIndex].employer);
        setMovies(data[currIndex].favoriteMovies)
    }

  return (
    <div style={{backgroundColor: 'white'}} className='infoBody' >
        <div className='count'>
            <h1><b>{currIndex+1}/{data.length}</b></h1>
        </div>
        
        <div className='info'>
        <h1 className='name'>{firstName+ ' '+ lastName}</h1>
        <p><b>From:</b> {from}</p>
        <p><b>Job Title:</b> {title}</p>
        <p><b>Employer:</b> {employer}</p>
        <p><b>Favorite Movies:</b></p>
        <ol>
            <li>{movies[0]}</li>
            <li>{movies[1]}</li>
            <li>{movies[2]}</li>
        </ol>
        </div>
        <div className='navigation'>
        <button onClick={()=>previous()}><b> &lt; Previous </b></button>
        <div className='create'>
            <button className='blue' onClick={()=>setEdit(!edit)}>Edit</button>
            <button className='blue' onClick={()=>deleteCard()}>Delete</button>
            <button className='blue' onClick={()=> setNewDisplay(!newDisplay)}>New</button>
            
        </div>
        <button onClick={()=>next()}><b>Next &gt;</b></button>
        </div>
        
        {newDisplay && <NewFormik display={setNewDisplay}/>}
        {edit ? <Edit display={setEdit} index/> : null}
    </div>
  )
}

export default Info