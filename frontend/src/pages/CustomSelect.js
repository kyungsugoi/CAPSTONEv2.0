import React from 'react';
import Select from 'react-select';

const options=[
    {label: "GPA booster",value:"GPA booster"},
    {label: "Project based",value:"Project based"},
    {label: "writing heavy",value:"writing heavy"},
    {label: "research heavy",value:"research heavy"},
]

function CustomSelect(onChange,isMulti){
    return<div>
        <Select isMulti={isMulti} options={options} onChange={onChange}/>
    </div>

}

export default CustomSelect;
