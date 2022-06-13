import React, { useContext } from 'react'
import ApiContext from '../ApiContext'
import {AiOutlineSearch} from 'react-icons/ai'
import {GrAdd} from 'react-icons/gr'
import '../Search/Search.css'
function Search() {
    const { SubmitRequest, CurrentCityText, handleCityText } = useContext(ApiContext)
    return (
        <>
        <div className='inputContainer'>
            <form onSubmit={(e) => SubmitRequest(e)} className="formContainer">
                <AiOutlineSearch className='AiSearch'/>
                <label>
                    <input className="inputlength"type="text" value={CurrentCityText} onChange={handleCityText} maxLength="12"/>
                </label>
            </form>
            {/* <GrAdd className='GrAdd'/> */}
        </div>
            
        </>
    )
}

export default Search
