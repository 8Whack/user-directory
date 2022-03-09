import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import data from '../data';

function EditFormik(props) {
    let index = props.index
    const formik = useFormik({
        initialValues:{
            nameFirst: '',
            nameLast: '',
            city: '',
            country: '',
            employer: '',
            title: '',
            favMovie1: '',
            favMovie2: '',
            favMovie3: '',
        },
        validationSchema: Yup.object({
            nameFirst: Yup.string().max(40, 'Must be less than 40 characters or less').required('Required'),
            nameLast: Yup.string().max(40, 'Must be less than 40 characters or less').required('Required'),
            city: Yup.string().max(40, 'Must be less than 40 characters or less').required('Required'),
            country: Yup.string().max(40, 'Must be less than 40 characters or less').required('Required'),
            employer: Yup.string().max(40, 'Must be less than 40 characters or less').required('Required'),
            title: Yup.string().max(40, 'Must be less than 40 characters or less').required('Required'),
        }),
        onSubmit: ()=> {

            let {nameFirst, nameLast, city, country, employer, title, favMovie1,favMovie2, favMovie3} = formik.values

            let info = {
                name: {first: nameFirst, last: nameLast},
                city: city,
                country: country,
                employer: employer,
                title: title,
                favoriteMovies: [favMovie1, favMovie2, favMovie3]
            }

            data.splice(index, 1, info)
            formik.handleReset();
            props.display(false);   
            props.refresh();    
        },
    });
  return (
    <form onSubmit={formik.handleSubmit}>
        <h3>Edit Here </h3>
        <button type='button' onClick={()=>console.log({index})}>click</button>
       <label htmlFor="nameFirst">First Name</label>
       <input
         id="nameFirst"
         name="nameFirst"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.nameFirst}
       />
       {formik.touched.nameFirst && formik.errors.nameFirst ? (
         <div className='err'>{formik.errors.nameFirst}</div>
       ) : null}

       <label htmlFor="nameLast">Last Name</label>
       <input
         id="nameLast"
         name="nameLast"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.nameLast}
       />
       {formik.touched.nameLast && formik.errors.nameLast ? (
         <div className='err'>{formik.errors.nameLast}</div>
       ) : null}
 
       <label htmlFor="city">City</label>
       <input
         id="city"
         name="city"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.city}
       />
       {formik.touched.city && formik.errors.city ? (
         <div className='err'>{formik.errors.city}</div>
       ) : null}
 
       <label htmlFor="country">Country</label>
       <input
         id="country"
         name="country"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.country}
       />
       {formik.touched.country && formik.errors.country ? (
         <div className='err'>{formik.errors.country}</div>
       ) : null}

       <label htmlFor='employer'>Employer</label>
       <input 
        id='employer'
        name='employer'
        type='text'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.employer}
        />
        {formik.touched.employer && formik.errors.employer ? (
            <div className='err'>{formik.errors.employer}</div>
        ): null}

       <label htmlFor='title'>Title</label>
       <input 
        id='title'
        name='title'
        type='text'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title ? (
            <div className='err'>{formik.errors.title}</div>
        ): null}

        <label htmlFor="favMovie1">Favorite Movie</label>
        <input
         id="favMovie1"
         name="favMovie1"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.favMovie1}
       />
       {formik.touched.favMovie1 && formik.errors.favMovie1 ? (
         <div className='err'>{formik.errors.favMovie1}</div>
       ) : null}
 

        <label htmlFor="favMovie2">Second Favorite Movie</label>
        <input
         id="favMovie2"
         name="favMovie2"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.favMovie2}
       />
       {formik.touched.favMovie2 && formik.errors.favMovie2 ? (
         <div className='err'>{formik.errors.favMovie2}</div>
       ) : null}

        <label htmlFor="favMovie3">Third Favorite Movie</label>
        <input
         id="favMovie3"
         name="favMovie3"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.favMovie3}
       />
       {formik.touched.favMovie3 && formik.errors.favMovie3 ? (
         <div className='err'>{formik.errors.favMovie3}</div>
       ) : null}

 
       <button type="submit">Submit</button>
     </form>
  )
}

export default EditFormik