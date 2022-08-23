import { useLoader } from '@react-three/fiber'
import React, { useEffect} from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Mesh } from 'three'; 

const Car = () => {
    // Lấy ảnh 3d xe từ file models
    const gltf = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + 'models/car/scene.gltf'
    )

    useEffect(() => {
        // Thu nhỏ hình ảnh
        gltf.scene.scale.set(0.005, 0.005, 0.005)
        gltf.scene.position.set(0, -0.035, 0);
        // Soi sáng cho xe được rõ hơn
        gltf.scene.traverse((object) => {
            if (object instanceof Mesh){
                object.castShadow = true;
                object.receiveShadow = true;
                object.material.envMapIntensity = 20;
            }
        });
    }, [gltf]);

  return <primitive object={gltf.scene} />;
}

export default Car