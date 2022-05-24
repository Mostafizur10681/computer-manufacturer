import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PartsDetails = () => {
    const { partsId } = useParams();
    const [part, setPart] = useState({})

    useEffect(() => {

    }, [])
    return (
        <div>

        </div>
    );
};

export default PartsDetails;