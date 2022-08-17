import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import { Loader } from "../common/Loader/Loader";
import { getMaterials } from "../services/MaterialService";
import { MaterialsList } from "./MaterialsList/MaterialsList";


export const Materials = () => {

    const [materialContext, setMaterialContext] = useState({ isLoaded: false });


    useEffect(() => {
        getMaterials()
            .then(materialResult => {

                if (materialResult.ok) {
                    return materialResult.json();
                }
            })
            .then(materials => setMaterialContext({ isLoaded: true, materials }));
    }, []);

    if (!materialContext.isLoaded) {
        return <Loader />
    }

    return (
        <>
            <Button variant="primary">New material</Button>
            <MaterialsList materials={materialContext.materials} />
        </>
    )
}