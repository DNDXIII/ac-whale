import { useState } from 'react';
import { Service } from '../common/Service';
import { baseUrl } from '../settings';
import { TurnipIsland } from '../models/TurnipIsland';


const usePostIslandService = () => {
    const [service, setService] = useState<Service<TurnipIsland>>({
        status: 'init'
    });

    const publishIsland = (island: TurnipIsland) => {
        setService({ status: 'loading' });

        const headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');

        return new Promise((resolve, reject) => {
            fetch(baseUrl + "turnipislands", {
                method: 'POST',
                body: JSON.stringify(island),
                headers
            })
                .then(response => response.json())
                .then(response => {
                    setService({ status: 'loaded', payload: response });
                    resolve(response);
                })
                .catch(error => {
                    setService({ status: 'error', error });
                    reject(error);
                });
        });
    };

    return {
        service,
        publishIsland
    };
};

export default usePostIslandService;