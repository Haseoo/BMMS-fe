import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import { Loader } from "../common/Loader/Loader";
import { getMaterials } from "../services/MaterialService";
import { MaterialsList } from "./MaterialsList/MaterialsList";
import Alert from 'react-bootstrap/Alert';
import { getErrorResponseMessage } from '../common/ErrorHandler';


export const Materials = () => {

    const [materialContext, setMaterialContext] = useState({ isLoaded: false });


    useEffect(() => {
        getMaterials()
            .then(async materialResult => {
                if (materialResult.ok) {
                    return materialResult.json();
                }
                else {
                    throw await materialResult.json();
                }
            })
            .then(materials => setMaterialContext({ isLoaded: true, materials }))
            .catch((e) => setMaterialContext({ isLoaded: true, error: getErrorResponseMessage(e) }));
    }, []);

    if (!materialContext.isLoaded) {
        return <Loader />
    }

    if (materialContext.error) {
        return (
            <Alert variant='danger'>
                {materialContext.error}
            </Alert>
        );
    }

    return (
        <>
            <Button variant="primary">New material</Button>
            <MaterialsList materials={materialContext.materials} />
        </>
    )
}