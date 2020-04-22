import { useState } from 'react';
import { Service } from '../common/Service';
import { baseUrl } from '../settings';
import { TurnipIsland } from '../models/TurnipIsland';
import { Island, IslandTypes } from '../models/Island';


const usePostIslandService = () => {
    const [service, setService] = useState<Service<TurnipIsland>>({
        status: 'init'
    });

    const publishIsland = (island: Island | TurnipIsland, islandType: IslandTypes) => {
        setService({ status: 'loading' });

        const url = islandType === IslandTypes.turnipIsland ? baseUrl + "islands/turnips" : baseUrl + "islands"

        const headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');


        return new Promise((resolve, reject) => {
            fetch(url, {
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