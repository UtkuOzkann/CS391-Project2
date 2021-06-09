import React from 'react'
import './Page.css';
import ReactAudioPlayer from 'react-audio-player';
import {
Card,  CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import hos from '../../src/images/heroesofthestorm.jpg';
import smite from '../../src/images/smite.jpg';
import dota from '../../src/images/dota2.jpg';
import lol from '../../src/images/lol.jpg';

import hos1 from '../../src/mp3/Heroes of the Storm - Main Theme [Complete].mp3';
import smite1 from '../../src/mp3/Smite - Official Theme Music.mp3';
import dota1 from '../../src/mp3/Dota 2 Trailer Music - Main Menu Theme.mp3';
import lol1 from '../../src/mp3/Worlds 2020 Orchestral Theme - League of Legends.mp3';


function MOBA() {

    return (

        <div className="card-group text" >
            <div className="col-sm-12">
            <Card>
    <CardImg variant="top" src={lol} />
    <CardBody>
      <CardTitle tag="h1">League of Legends</CardTitle>
      <CardText tag="h6">
      League of Legends (LoL), commonly referred to as League, is a 2009 multiplayer online battle arena video game developed and published by Riot Games.
      Inspired by Defense of the Ancients, a custom map for Warcraft III, Riot's founders sought to develop a stand-alone game in the same genre.
      Since its release in October 2009, the game has been free-to-play and is monetized through purchasable character customization.
      The game is available for Microsoft Windows and macOS.

      </CardText>
      <CardText tag="h6">
      In the game, two teams of five players battle in player versus player combat, each team occupying and defending their half of the map.
      Each of the ten players controls a character, known as a "champion", with unique abilities and differing styles of play.
       During a match, champions become more powerful by collecting experience points, earning gold, and purchasing items to defeat the opposing team.
      In the game's main mode, Summoner's Rift, a team wins by pushing through to the enemy base and destroying their "Nexus", a large structure located within.
      </CardText>
    </CardBody>
 <ReactAudioPlayer src={lol1} controls />
  </Card>
            </div>

            <div className="col-sm-12">
            <Card>
            <CardImg variant="top" src={dota} />
            <CardBody>
              <CardTitle tag="h1">Dota 2</CardTitle>
              <CardText tag="h6">
              Dota 2 is a multiplayer online battle arena (MOBA) video game developed and published by Valve.
               The game is a sequel to Defense of the Ancients (DotA), which was a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos.
               Dota 2 is played in matches between two teams of five players, with each team occupying and defending their own separate base on the map.
               Each of the ten players independently controls a powerful character, known as a "hero", who all have unique abilities and differing styles of play.
              <CardText tag="h6">
              During a match players collect experience points and items for their heroes to successfully defeat the opposing team's heroes in player versus player combat.
              A team wins by being the first to destroy the other team's "Ancient", a large structure located within their base.
              Development of Dota 2 began in 2009 when IceFrog, lead designer of Defense of the Ancients, was hired by Valve to create a modernized remake for them in the Source game engine.
              It was released for Microsoft Windows, OS X, and Linux via the digital distribution platform Steam in July 2013, following a Windows-only open beta phase that began two years prior.
                      </CardText>
              </CardText>
            </CardBody>
             <ReactAudioPlayer src={dota1} controls />
          </Card>
            </div>

            <div className="col-sm-12">
            <Card>
            <CardImg variant="top" src={smite} />
            <CardBody>
              <CardTitle tag="h1">Smite</CardTitle>
              <CardText tag="h6">
              Smite features many different game modes with the largest being Conquest.
              Players are formed into two teams with five players on each team. All players begin at opposite sides of a map at their team's "fountain".
              </CardText>
              <CardText tag="h6">
              Smite is a free-to-play, third-person multiplayer online battle arena (MOBA) video game developed and published by Hi-Rez Studios for Microsoft Windows, PlayStation 4, Nintendo Switch, and Xbox One.
                    In Smite, players control a god, goddess, or other mythological figure, and take part in team-based combat, using their abilities and tactics against other player-controlled gods and non-player-controlled minions.
                    </CardText>
            </CardBody>
             <ReactAudioPlayer src={smite1} controls />
          </Card>
            </div>

            <div className="col-sm-12">
            <Card>
            <CardImg variant="top" src={hos} />
            <CardBody>
              <CardTitle tag="h1">Heroes of the Storm</CardTitle>
              <CardText tag="h6">
              Heroes of the Storm is a crossover multiplayer online battle arena video game developed and published by Blizzard Entertainment and released on June 2, 2015, for Microsoft Windows and macOS.
              The game features various characters from Blizzard's franchises as playable heroes, as well as different battlegrounds based on Warcraft, Diablo, StarCraft, and Overwatch universes.
              The game is free-to-play, based on freemium business model, and is supported by microtransactions which can be used to purchase heroes, visual alterations for the heroes in the game, mounts, and other cosmetic elements.
              Blizzard calls the game as a "hero brawler" instead of the more common "multiplayer online battle arena" (MOBA).
              </CardText>
            </CardBody>
             <ReactAudioPlayer src={hos1} controls />
          </Card>
            </div>
        </div>
    );
}

export default MOBA;
