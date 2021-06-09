import React from 'react'
import './Page.css';
import ReactAudioPlayer from 'react-audio-player';
import {
Card,  CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import ageOfMithology from '../../src/images/ageofmythology.jpg';
import rOfNation from '../../src/images/riseof.jpg';
import starCraft from '../../src/images/starcraft1.jpg';
import ageof from '../../src/images/ageofempires4.jpg';

import ageOfM from '../../src/mp3/Age of Mythology - Main Theme.mp3';
import rOfN from '../../src/mp3/Rise of the Tomb Raider Main Theme - Official Soundtrack OST.mp3';
import starCraft1 from '../../src/mp3/Main Menu Theme - Starcraft.mp3';
import ageof1 from '../../src/mp3/Ninja Tracks - Last Transmission (Age of Empires IV - Announce Trailer Music).mp3';


function RTS() {

    return (

        <div className="card-group text" >
            <div className="col-sm-12">
            <Card>
    <CardImg variant="top" src={ageof} />
    <CardBody>
      <CardTitle tag="h1">Age of Empires IV</CardTitle>
      <CardText tag="h6">
      Age of Empires IV is an upcoming real-time strategy video game developed by Relic Entertainment and published by Xbox Game Studios.
        It is the fourth installment of the Age of Empires series. The game is scheduled for release in late 2021.
        Game events are set to be in the Middle Ages. Amongst others there will be a campaign telling a story about Norman Conquest of England.

      </CardText>
      <CardText tag="h6">
      On August 21, 2017, Microsoft announced Age of Empires IV, developed by Relic Entertainment.
      Microsoft's Executive Vice-President of Gaming, Phil Spencer, confirmed on June 11, 2019, that Age of Empires IV is still in development, with more information coming later in 2019.
      On November 14, 2019, gameplay footage of Age of Empires IV was shown at the X019 event.
      It showed medieval warfare between English and Mongol forces.
      On March 16, 2021, the fan preview was released, showing more detailed gameplay and also including the two other known civilisations, the Chinese and the Delhi Sultanate.
      The game will be released in Fall of 2021, although the specific date is not known.
      </CardText>
    </CardBody>
 <ReactAudioPlayer src={ageof1} controls />
  </Card>
            </div>

            <div className="col-sm-12">
            <Card>
            <CardImg variant="top" src={starCraft} />
            <CardBody>
              <CardTitle tag="h1">StarCraft</CardTitle>
              <CardText tag="h6">
              StarCraft is a 1998 military science fiction real-time strategy game developed and published by Blizzard Entertainment for Microsoft Windows.
      The game spawned the StarCraft franchise, and became the first game of the video game series.
      A Classic Mac OS version was released in 1999, and a Nintendo 64 adaptation, co-developed with Mass Media, was released in 2000.
              <CardText tag="h6">
              Blizzard started work on the game shortly after Warcraft II, another real-time strategy game, was released in 1995.
               The first incarnation debuted at the 1996 Electronic Entertainment Expo, where it was unfavorably compared to Warcraft II.
               As a result, the project was entirely overhauled before being showcased to the public in early 1997, at which time it received a far more positive response.
               The game's multiplayer is particularly popular in South Korea, as of 2006, where players and teams participate in professional competitions, earn sponsorships, and compete in televised tournaments.
                      </CardText>
              </CardText>
            </CardBody>
             <ReactAudioPlayer src={starCraft1} controls />
          </Card>
            </div>

            <div className="col-sm-12">
            <Card>
            <CardImg variant="top" src={rOfNation} />
            <CardBody>
              <CardTitle tag="h1">Rise of Nations</CardTitle>
              <CardText tag="h6">
              Rise of Nations is a real-time strategy video game, developed by Big Huge Games and published by Microsoft Game Studios in May 2003.
      The development was led by veteran game designer Brian Reynolds, of Civilization II and Sid Meier's Alpha Centauri.
      The game has taken several concepts from turn-based strategy games such as territories and attrition warfare.
      Rise of Nations features 18 civilizations, playable through eight ages of world history.
              </CardText>
              <CardText tag="h6">
              Rise of Nations: Extended Edition is a re-release of the main game and its expansion.
                      It released for Steam on June 12, 2014 and for the Windows 10 Store on September 14, 2017 with Xbox Live achievements and cross-play with the Steam version.
                      Graphical changes to the game include updated textures, lighting and water. Other changes to the game include Steamworks integration which adds cloud saves, Steam Trading Cards, achievements, Twitch integration and multiplayer with Elo ranked
                      matches to the game.
                      Extended Edition is developed by SkyBox Labs.
              </CardText>
            </CardBody>
             <ReactAudioPlayer src={rOfN} controls />
          </Card>
            </div>

            <div className="col-sm-12">
            <Card>
            <CardImg variant="top" src={ageOfMithology} />
            <CardBody>
              <CardTitle tag="h1">Age of Mythology</CardTitle>
              <CardText tag="h6">
              Age of Mythology (AoM) is a real-time strategy video game developed by Ensemble Studios and published by Microsoft Game Studios.
It was released on October 30, 2002 in North America and a week later in Europe.
A spin-off from the Age of Empires series, Age of Mythology takes some of its inspiration from mythology and legends of the Greeks, Egyptians, and Norse, rather than from actual historical events.
Many gameplay elements are similar to the Age of Empires series.
Its campaign follows an Atlantean admiral, Arkantos, who is forced to travel through the lands of the game's three cultures, hunting for a cyclops who is in league with Poseidon against Atlantis.
              </CardText>
              <CardText tag="h6">
              Age of Mythology was commercially successful, going platinum four months after its release after selling over one million units.
        In 2003, it was followed by an expansion pack, Age of Mythology: The Titans. On May 8, 2014, Age of Mythology: Extended Edition was released for Windows via Steam.
        This was followed by a second expansion pack, Age of Mythology: Tale of the Dragon, released on January 28, 2016.
              </CardText>
            </CardBody>
             <ReactAudioPlayer src={ageOfM} controls />
          </Card>
            </div>
        </div>
    );
}

export default RTS;
