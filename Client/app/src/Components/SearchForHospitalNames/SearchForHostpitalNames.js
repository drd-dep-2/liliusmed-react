import React, { useEffect, useState, useRef } from 'react';
import './SearchForHospitalNames.css';
import {Button, FormControl, InputGroup} from 'react-bootstrap';

const SearchForHospitalNames = (props) => {
    const [display, setDisplay] = useState(false);
    const [search, setSearch] = useState("");
    const wrapperRef = useRef(null);


    const setSearchValue = hospital => {
        console.log(hospital)
        setSearch(hospital);
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
        <InputGroup autocomplete="off" size="med">   
         <FormControl aria-label="Large" 
            aria-describedby="inputGroup-sizing-lg"
            className="searchBar" 
            placeholder="Search Hospitals" 
            value={search}
            onChange={(event) => {
            setSearch(event.target.value)
            event.target.value.length > 0 ? setDisplay(true) : setDisplay(false)}}
         /> 
        </InputGroup>
    
        {display && (
            <div className="optionListBox">
                <ul className="optionList">
                {props.hospitalList.filter(({hospitalInfo})=> hospitalInfo.name.toLowerCase().includes(search.toLowerCase())).map((ele, index) => {
                    return (
                        <li onClick={() => setSearchValue(ele.name)} className="option" key={index} tabIndex="0">
                            {ele.name} 
                        </li>
                    )
                })}
                </ul>
            </div>
        )}
        
    </div>
    );
}

export default SearchForHospitalNames;