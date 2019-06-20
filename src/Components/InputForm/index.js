import React, {Fragment} from 'react';
import {JSS} from './styled';

const InputForm = ({label, id, type, name, value, onChange, placeholder})=>(
    <Fragment>
    <JSS>
        <label htmlFor={id}> {label} </label>
        <input id={id} 
        type={type} 
        name={name} 
        value={value} 
        onChange={onChange}
        placeholder={placeholder}
        />             
    </JSS>       
    </Fragment>
)

export default InputForm;