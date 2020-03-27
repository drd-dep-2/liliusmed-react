import React, { useEffect, useState, useRef } from 'react';
import './SearchForHospitalNames.css';
import {Button, FormControl, InputGroup} from 'react-bootstrap';

const SearchForHospitalNames = (props) => {
    const [display, setDisplay] = useState(false);
    const [options, setOptions] = useState([]);
    const [search, setSearch] = useState("");
    const wrapperRef = useRef(null);
    useEffect(() => {
        // const hospitalList = [];
        //METHOD TO GET HOSPITALS FROM A SERVICE THAT CALLS OUR EXPRESS SERVER
        // const getHospitals = service.getHospitals();
        // PlaceHolder
        let newHospitalList = [{name: "Cedar Saini"}, {name: "Cedar Test Hospital"}, 
                        {name: "Cleveland Clinic"}, {name: "Mayo Clinic"}, 
                        {name: "University Hospitals"}, {name: "University of Washington"},
                        {name: "Ohio State University Hospitals"}, {name: "Detroit Mercy"}];
        // add results from callout to the hospitalList

        setOptions(newHospitalList);
    }, []);

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
                {options.filter(({name}) => name.toLowerCase().includes(search.toLowerCase())).map((ele, index) => {
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