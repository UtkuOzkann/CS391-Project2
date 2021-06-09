import React from 'react'
import './Page.css';
import ReactAudioPlayer from 'react-audio-player';
import {
Card,  CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import fortnite from '../../src/images/fortnite.jpg';
import pubg from '../../src/images/pubg1.jpg';
import apex from '../../src/images/apex.jpg';
import warzone from '../../src/images/warzone.jpg';

import fortnite1 from '../../src/mp3/Fortnite Main Theme Orchestral Cover.mp3';
import pubg1 from '../../src/mp3/PUBG MOBILE - Theme Music [Originals] Orchestral Version.mp3';
import apex1 from '../../src/mp3/Apex Legends Main Theme.mp3';
import warzone1 from '../../src/mp3/Modern Warfare Main Theme.mp3';


function BattleRoyal() {

    return (

        <div className="card-group text" >
            <div className="col-sm-12">
            <Card>
    <CardImg variant="top" src={warzone} />
    <CardBody>
      <CardTitle tag="h1">Call Of Duty: Warzone</CardTitle>
      <CardText tag="h6">
      Call of Duty: Warzone is a free-to-play battle royale video game released on March 10, 2020, for PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S, and Microsoft Windows.
       The game is a part of 2019's Call of Duty: Modern Warfare and 2020's Call of Duty: Black Ops: Cold War (but does not require purchase of them) and was introduced during Season 2 of Modern Warfare content.
        Warzone was developed by Infinity Ward, Raven Software and later Treyarch, and Beenox and published by Activision.
        Warzone allows online multiplayer combat among 150 players, although some limited-time game modes support 200 players.
        The game features both cross-platform play and cross-platform progression between three games.

      </CardText>
      <CardText tag="h6">
      The game features three main modes: Plunder, Resurgence, and Battle Royale.
       Warzone introduces a new in-game currency system which can be used at "Buy Stations" in and around the map.
       "Loadout" drops are an example of where Cash can be traded for limited access to players' custom classes.
       Players may also use Cash to purchase items such as "killstreaks" and gas masks.
       Cash can be found by looting buildings and killing players that have cash on them.
       At launch, Warzone only offered Trios, a squad capacity of three players.
       However, in free post launch content updates, Solos, Duos and Quads have all been added to the game.
      </CardText>
    </CardBody>
 <ReactAudioPlayer src={warzone1} controls />
  </Card>
            </div>

            <div className="col-sm-12">
            <Card>
            <CardImg variant="top" src={apex} />
            <CardBody>
              <CardTitle tag="h1">Apex Legends</CardTitle>
              <CardText tag="h6">
              Apex Legends is an online multiplayer battle royale game featuring squads of three players using pre-made characters (called "Legends"), similar to those of hero shooters.
                                 Alternate modes have been introduced allowing for single and for two-player squads since the game's release.
                                 The game is free-to-play and monetized through microtransactions and loot boxes, which allow the player to spend both real money and in-game currency on cosmetic items, such as outfits for the Legends and new colors for weapons.
              <CardText tag="h6">
              Each match generally features twenty teams of three-player squads.
              Players can join friends in a squad or can be matched randomly with other players.
              Before the match, each player on the squad selects one of the 16 playable characters (as of Season 8), with the exception that no character may be selected more than once by a squad.
              Each character in the squad has a unique design, personality, and abilities that provide different playstyles to the team.
                      </CardText>
              </CardText>
            </CardBody>
             <ReactAudioPlayer src={apex1} controls />
          </Card>
            </div>

            <div className="col-sm-12">
            <Card>
            <CardImg variant="top" src={pubg} />
            <CardBody>
              <CardTitle tag="h1">Playerunknown’s Battlegrounds</CardTitle>
              <CardText tag="h6">
              PlayerUnknown's Battlegrounds (PUBG) is an online multiplayer battle royale game developed and published by PUBG Corporation.
              A subsidiary of South Korean video game company Bluehole.
              The game is based on previous mods that were created by Brendan "PlayerUnknown" Greene for other games.
              Inspired by the 2000 Japanese film Battle Royale, and expanded into a standalone game under Greene's creative direction.
              </CardText>
              <CardText tag="h6">
              PUBG was first released for Microsoft Windows via Steam's early access beta program in March 2017, with a full release in December 2017.
                    The game was also released by Microsoft Studios for the Xbox One via its Xbox Game Preview program that same month, and officially released in September 2018.
                    PUBG Mobile, a free-to-play mobile game version for Android and iOS, was released in 2018, in addition to a port for the PlayStation 4.
                    A version for the Stadia streaming platform was released in April 2020.
                    </CardText>
            </CardBody>
             <ReactAudioPlayer src={pubg1} controls />
          </Card>
            </div>

            <div className="col-sm-12">
            <Card>
            <CardImg variant="top" src={fortnite} />
            <CardBody>
              <CardTitle tag="h1">Fortnite</CardTitle>
              <CardText tag="h6">
              Fortnite is an online video game developed by Epic Games and released in 2017.
                    It is available in three distinct game mode versions that otherwise share the same general gameplay and game engine: Fortnite: Save the World, a cooperative hybrid-tower defense-shooter-survival game for up to four players to fight off zombie-like creatures and defend objects with traps and fortifications they can build; Fortnite Battle Royale, a free-to-play battle royale game in which up to 100 players fight to be the last person standing.
              </CardText>
            </CardBody>
             <ReactAudioPlayer src={fortnite1} controls />
          </Card>
            </div>
        </div>
    );
}

export default BattleRoyal;
