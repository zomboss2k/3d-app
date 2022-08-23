import React, { useRef } from 'react'

const Rings = () => {
    const itemsRef = useRef([])

  return (
    <>
        {
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((v, i)=>{
                <mesh castShadow receiveShadow position={[0, 0, 0]} key={i} ref={(el) => (itemsRef.current[i] = el)}>

                </mesh>
            })
        }
    </>
  )
}

export default Rings