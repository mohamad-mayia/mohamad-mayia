import React from 'react';
import styled from 'styled-components';


const BarsLine = ({ values }) => {
    const Bar = styled.div.attrs(props => ({
        className: props.className
    }))`
   &::before{
    height: ${props => props.val}% 
   }
   &::after{
    height: ${props => (100 - props.val)}% 
   }
  `;




    return (
        <div className="d-flex   barsLine" >
            <div className="d-flex   barsDiv ">
                {values.barsValues.map((item, index) => (
                    <Bar key={index} val={item} className='singleBar' />
                ))}

            </div>
            <div className='d-flex flexDirectionColumn   '>
                <div className='text'>Similarity measures between molecules</div>
                <div className=' d-flex baseLine  '>
                    <strong className='lineNumber'>{values.blackRate}%</strong>
                    <div className=' d-flex baseLine greenRate  '><div className="arrow-up"></div>{values.greenRate}%</div>

                </div>
            </div>
        </div>
    )
}
export default BarsLine;