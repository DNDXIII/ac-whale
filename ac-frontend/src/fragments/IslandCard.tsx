import React, { PureComponent } from "react";
import { Island, IslandTypes } from "../models/Island";
import { Card, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TurnipIsland } from "../models/TurnipIsland";

// Change this one when we get more island types
interface IslandProps {
  islandType?: IslandTypes,
  island: Island
}

interface TurnipIslandProps {
  islandType: IslandTypes.turnipIsland,
  island: TurnipIsland
}

type Props = TurnipIslandProps | IslandProps;


export default class IslandCard extends PureComponent<Props> {
  render() {
    const { island, islandType = IslandTypes.default } = this.props;

    return (
      <Card >
        <Card.Body>
          <Card.Title>{island.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <Row>
              <Col md={4}>{new Date(island.dateCreated!).toLocaleTimeString()}</Col>
              <Col md={8}>{island.hemisphere} Hemisphere</Col>
            </Row>
          </Card.Subtitle>
          <Card.Text>
            {
              islandType === IslandTypes.turnipIsland && (
                <div>
                  <span >Turnip price: {(island as TurnipIsland).currentPrice}</span><br />
                </div>
              )
            }
            <span>Entry Fee: {island.entryFeeAmount} {island.entryFeeType}</span><br />
            <div className="mt-3">{island.description}</div>
          </Card.Text>

          <Link to="stalk-market/open-island">
            <Button variant="primary">Get in Line</Button>
          </Link>
        </Card.Body>
      </Card>
    );
  }
}
