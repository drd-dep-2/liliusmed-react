import React, { useEffect, useState, useRef } from 'react';
import './SearchForHospitalNames.css';
import {Button, FormControl, InputGroup} from 'react-bootstrap';

const SearchForHospitalNames = (props) => {
    const [display, setDisplay] = useState(false);
    
    // const [search, setSearch] = useState("");
    const wrapperRef = useRef(null);


    const setSearchValue = hospital => {
        console.log(hospital)
        props.setValue(hospital);
        setDisplay(false);
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return(() => {
            document.removeEventListener('mousedown', handleClickOutside)
        })
    }, []);

    const handleClickOutside = event => {
        const {current: wrap} = wrapperRef;
        if (wrap && !wrap.contains(event.target)) {
            setDisplay(false);
        }
    }

    return (
    <div className="hospitalSearchBox" ref={wrapperRef}>
        <InputGroup autoComplete="off" size="med">   
         <FormControl aria-label="Large" 
            aria-describedby="inputGroup-sizing-lg"
            className="searchBar" 
            placeholder="Search Hospitals" 
            value={props.value}
            onChange={(event) => {
            setSearchValue(event.target.value)
            event.target.value.length > 0 ? setDisplay(true) : setDisplay(false)}}
         /> 
        </InputGroup>
    
        {display && props.hospitalList != null && (
            <div className="optionListBox">
                <ul className="optionList">
                {props.hospitalList.filter(({hospitalInfo})=> hospitalInfo.name.toLowerCase().includes(props.value.toLowerCase())).map((ele, index) => {
                    if (index < 20) {
                        return (
                            <li onClick={() => setSearchValue(ele.hospitalInfo.name)} className="option" key={index} tabIndex="0">
                                {ele.hospitalInfo.name} 
                            </li>
                        )
                    }
                })}
                </ul>
            </div>
        )}
        
    </div>
    );
}

export default SearchForHospitalNames;