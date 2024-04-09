import React from 'react'
import Container from '../Layout/Container'
import Logoone from '../../assets/Logoone.png'
import Logotwo from '../../assets/Logotwo.png'
import Logothree from '../../assets/Logothree.png'
import Logofour from '../../assets/Logofour.png'

const Logos = () => {
  return (
    <div>
        <Container className="py-[116px]">
          <div className='flex flex-wrap justify-center gap-x-6'>
            <div>
              <img src={Logoone} alt="" />
            </div>
            <div>
              <img src={Logotwo} alt="" />
            </div>
            <div>
              <img src={Logothree} alt="" />
            </div>
            <div>
              <img src={Logofour} alt="" />
            </div>
          </div>
        </Container>  
    </div>
  )
}

export default Logos