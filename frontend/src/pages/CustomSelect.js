import React from 'react';
import Select from 'react-select';



function CustomSelect({onChange,isMulti, tagNames}){
    return(
	<div>
        <Select isMulti={isMulti} options={tagNames} onChange={onChange}/>
    </div>
	);

}

export default CustomSelect;
