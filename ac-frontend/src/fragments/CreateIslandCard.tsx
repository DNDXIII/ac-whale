import React, { useState, FunctionComponent } from 'react';
import { useHistory } from "react-router-dom";

import { Card, Form, Col, Button } from 'react-bootstrap';
import { EntryFeeType, Hemisphere, IslandTypes, initialIslandState, Island } from '../models/Island';
import usePostIslandService from '../services/usePostIslandService';
import { TurnipIsland, initialTurnipIslandState } from '../models/TurnipIsland';


// Change this one when we get more island types
interface IProps {
  islandType?: IslandTypes,
}

const CreateIslandCard: FunctionComponent<IProps> = ({ islandType = IslandTypes.default }) => {
  const history = useHistory();

  const initialState = islandType === IslandTypes.turnipIsland ? initialTurnipIslandState : initialIslandState;
  const [island, setIsland] = useState<Island | TurnipIsland>(
    initialState
  );

  const { service, publishIsland } = usePostIslandService();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();


    // To cast to number, in order to get a correct data type
    let value: string | number = event.target.value;
    if (typeof island[event.target.name] === "number") {
      value = Number(event.target.value);
    }

    setIsland(prevIsland => ({
      ...prevIsland,
      [event.target.name]: value
    }));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    publishIsland(island, islandType).then(() => history.push("/turnips/open-island"));
  };


  return (
    <Card>
      <Card.Body>
        <Card.Title>Insert your island information</Card.Title>

        <Form onSubmit={handleFormSubmit}>
          <Form.Group controlId="formIslandName">
            <Form.Label>Island Name</Form.Label>
            <Form.Control required name="name" value={island.name} onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="formIslandDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control required name="description" value={island.description} onChange={handleChange} />
          </Form.Group>

          {islandType === IslandTypes.turnipIsland &&
            (
              <Form.Group controlId="formIslandCurrentPrice">
                <Form.Label>Current Turnip Price</Form.Label>
                <Form.Control required name="currentPrice" value={(island as TurnipIsland).currentPrice} onChange={handleChange} type="number" />
              </Form.Group>
            )
          }


          <Form.Group controlId="formIslandEntryFeeType">
            <Form.Label>Entry Fee</Form.Label>
            <Form.Row>
              <Col>
                <Form.Control required name="entryFeeAmount" value={island.entryFeeAmount} onChange={handleChange} type="number" />
              </Col>
              <Col>
                <Form.Control required name="entryFeeType" value={island.entryFeeType} onChange={handleChange} as="select">
                  {Object.keys(EntryFeeType).map((entryFeeTypeKey, index) => (
                    <option value={entryFeeTypeKey} key={index}>{EntryFeeType[entryFeeTypeKey]}</option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group controlId="formIslandHemisphere">
            <Form.Label>Hemisphere</Form.Label>
            <Form.Control required name="hemisphere" value={island.hemisphere} onChange={handleChange} as="select">
              {Object.keys(Hemisphere).map((hemisphereKey, index) => (
                <option value={hemisphereKey} key={index}>{Hemisphere[hemisphereKey]}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formIslandDodoCode">
            <Form.Label>Dodo Code</Form.Label>
            <Form.Control required name="dodoCode" value={island.dodoCode} onChange={handleChange} />
          </Form.Group>

          <Button type="submit">Submit</Button>
          {service.status === 'loading' && <div>Sending...</div>}
        </Form>
      </Card.Body>
    </Card >
  );
}


export default CreateIslandCard;