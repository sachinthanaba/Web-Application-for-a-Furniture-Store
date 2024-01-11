import React from "react";
import { useGLTF, useRotation } from "@react-three/drei";

function ThreeDView({ modelPath, scale }) {
    // Always call the hook
    const { scene } = useGLTF(modelPath);


    return <primitive object={scene} scale={scale} />;

}

export default ThreeDView;
