import React from 'react';


import icon from '../assets/icons/userIcon.png'
const IconLine = () => {




    return (
        <div className="d-flex fullWidth iconLine" >
            <div className="d-flex felxCenter  iconDiv">
                <img src={icon} alt='User Icon'></img>
            </div>
            <div className='d-flex flexDirectionColumn  textBesideIcon'>
                <div className='text'>adverse effect & contraindications</div>
                <div className=' d-flex BarRow '>
                    <div className='lineNumber'><strong>546</strong></div>
                    <div className='coloredLine' ></div>
                </div>
            </div>
        </div>
    )
}
export default IconLine;