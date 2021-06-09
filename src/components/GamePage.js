import React from 'react';
import './Main.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle,CardGroup
} from 'reactstrap';


import tps from '../../src/images/tpsgame_300x168.jpg';
import rts from '../../src/images/rtsgame_300x168.jpg';
import openworld from '../../src/images/openworld_300x168.jpg';
import moba from '../../src/images/mobagames_300x168.jpg';
import fps from '../../src/images/fpsgame_300x168.jpg';
import battleroyal from '../../src/images/battleroyal.jpg';



function Cards() {

  return (
    <div>
    <CardGroup>
      <Card>
        <CardImg variant="top" src={battleroyal} />
        <CardBody>
          <CardTitle tag="h1">Battle Royale</CardTitle>
          <CardText tag="h6">
            A battle royale game is an online multiplayer video game genre that blends last-man-standing gameplay with the survival, exploration and scavenging elements of a survival game.
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg variant="top" src={fps} />
        <CardBody>
          <CardTitle tag="h1">First Person Shooter (FPS)</CardTitle>
          <CardText tag="h6">
          FPS is a sub-genre of shooter video games centered on gun and other weapon-based combat in a first-person perspective,
           with the player experiencing the action through the eyes of the protagonist and controlling the player character in a three-dimensional space.
           The genre shares common traits with other shooter games, and in turn falls under the action game genre.
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg variant="top" src={moba} />
        <CardBody>
          <CardTitle tag="h1">Multiplayer Online Battle Arena (MOBA)</CardTitle>
          <CardText>
            MOBA is a subgenre of strategy video games in which two teams of players compete against each other on a predefined battlefield.
          </CardText>
        </CardBody>
      </Card>
    </CardGroup>
    <CardGroup>
      <Card>
        <CardImg variant="top" src={openworld} />
        <CardBody>
          <CardTitle tag="h1">Open World</CardTitle>
          <CardText tag="h6">
            Open world is a game mechanic of using a virtual world that the player can explore and approach objectives freely, as opposed to a world with more linear and structured gameplay.
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg variant="top" src={rts} />
        <CardBody>
          <CardTitle tag="h1">Real Time Strategy (RTS)</CardTitle>
          <CardText>
            RTS refers to a time-based video game that centers around using resources to build units and defeat an opponent.
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg variant="top" src={tps} />
        <CardBody>
          <CardTitle tag="h1">Third Person Shooter (TPS)</CardTitle>
          <CardText tag="h6">
          TPS is a subgenre of 3D shooter games in which the gameplay consists primarily of shooting.
          </CardText>
        </CardBody>
      </Card>
    </CardGroup>
  </div>
   );
 }

export default Cards;
