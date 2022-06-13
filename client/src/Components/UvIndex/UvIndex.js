import React , {useContext} from 'react'
import './UvIndex.css'
import '../global.css'
import ApiContext  from '../ApiContext'

function UvIndex() {
    const { currentData,
    } = useContext(ApiContext)
    return (
        <div className="UvIndex">
            <div className='UvIndexContainer cw'>
                <div className='pdb16 p12'>UV INDEX</div>
                <div className='pdb8 p32'>{currentData.uvi}</div>
                <div className='pdb42 p16'>Moderate</div>
                <div className='pdb8 p10'>Sunscreen is recommended</div>
                <div className='pdb14 p10'>Read more about sunscreens</div>
            </div>
        </div>
    )
}

export default UvIndex