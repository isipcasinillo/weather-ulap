import React, { useContext } from 'react'
import ApiContext from './ApiContext'
function Search() {
    const { SubmitRequest, CurrentCityText, handleCityText } = useContext(ApiContext)
    return (
        <>
            <form onSubmit={(e) => SubmitRequest(e)}>
                <label >
                    Name:
                    <input type="text" value={CurrentCityText} onChange={handleCityText} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default Search
