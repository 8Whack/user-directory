import React, {useState} from 'react'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import data from '../data';
import EditFormik from './EditFormik';

function Edit(props) {
    const [index, setIndex] = useState(undefined)
    const [toEdit, setToEdit] = useState(false)
    const formik = useFormik({
        initialValues:{

        firstName: '',
        lastName: ''

    },
    validationSchema: Yup.object({
        firstName: Yup.string().max(40, 'Must be less than 40 characters or less').required('Required'),
        lastName: Yup.string().max(40, 'Must be less than 40 characters or less').required('Required')
    }),
    onSubmit: (values)=>{
        
        let {firstName, lastName} = values;
        console.log(firstName, lastName)
        for(let i=0; i < data.length; i++){
            if (data[i].name.first === firstName && data[i].name.last === lastName){
                 console.log(data[i])
                 setIndex(i)
                 console.log(index)
                 setToEdit(true)
                 break
            }else{
                 console.log('User not Found')
            }
        }
        
    }
});
  return (
      <div>
    <form onSubmit={formik.handleSubmit}>
        <h3>Search by Name</h3>
        <label htmlFor='firstName'>First Name</label>
        <input
        id='firstName'
        name='firstName'
        type='text'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
            <div className='err'>{formik.errors.firstName}</div>
        ): null}

        <label htmlFor='lastName'>Last Name</label>
        <input
        id='lastName'
        name='lastName'
        type='text'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
            <div className='err'>{formik.errors.lastName}</div>
        ): null}

        <button type="submit">Search</button>
    </form>
    {toEdit && <EditFormik index={index} display={props.display} refresh={props.refresh}/>}
    </div>
  )
}

export default Edit