import React from 'react'
import Container from '../Layout/Container'
import logoone from '../../assets/logoone.png'

const Logos = () => {
  return (
    <div>
        <Container className="py-[116px]">
            <div>
                <div>
                    <img src={logoone} alt="" />
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Container>  
    </div>
  )
}

export default Logos