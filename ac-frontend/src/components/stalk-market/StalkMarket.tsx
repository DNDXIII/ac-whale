import React, { FunctionComponent } from "react";
import useGetIslandsService from "../../services/useGetIslandsService";
import IslandCard from "../../fragments/IslandCard";
import { Container, Button, CardColumns } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IslandTypes } from "../../models/Island";

const StalkMarket: FunctionComponent = () => {
  const service = useGetIslandsService();

  return (
    <Container>
      <Link to="stalk-market/create">
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
