import React, { FunctionComponent, useState, useEffect } from "react";
import IslandCard from "../../fragments/IslandCard";
import { Container, Button, CardColumns } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IslandTypes } from "../../models/Island";
import { Service } from "../../common/Service";
import { TurnipIsland } from "../../models/TurnipIsland";
import { baseUrl } from "../../settings";

const StalkMarket: FunctionComponent = () => {
  const [service, setService] = useState<Service<TurnipIsland[]>>({
    status: "loading",
  });

  const [url, setUrl] = useState<string>(
    baseUrl + 'islands/turnips/',
  );

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        return setService({ status: "loaded", payload: response });
      })
      .catch((error) => setService({ status: "error", error }));
  }, [url]);


  return (
    <Container>
      <Link to="turnips/create">
        <Button variant="primary">Create Island</Button>
      </Link>
      <CardColumns>
        {service.status === "loading" && <div>Loading...</div>}
        {service.status === "loaded" &&
          service.payload.map((island) => (
            <IslandCard islandType={IslandTypes.turnipIsland} key={island.id} island={island}></IslandCard>
          ))
        }
        {service.status === "error" && (
          <div>Error, the backend moved to the dark side.</div>
        )}
      </CardColumns>

    </Container>
  );
}

export default StalkMarket;
