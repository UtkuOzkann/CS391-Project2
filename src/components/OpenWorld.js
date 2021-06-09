import React from 'react'
import './Page.css';
import ReactAudioPlayer from 'react-audio-player';
import {
Card,  CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import rd from '../../src/images/red dead.jpg';
import sleepingD from '../../src/images/sleeping dogs.jpg';
import watchD from '../../src/images/watch dogs.jpg';
import gta from '../../src/images/gta5.jpg';

import rd1 from '../../src/mp3/dangelo-unshaken-audio.mp3';
import sleepingD1 from '../../src/mp3/sleeping-dogs.mp3';
import watchD1 from '../../src/mp3/watch dogs.mp3';
import gta1 from '../../src/mp3/gta5.mp3';


function OpenWorld() {

    return (

        <div className="card-group text" >
            <div className="col-sm-12">
            <Card>
    <CardImg variant="top" src={gta} />
    <CardBody>
      <CardTitle tag="h1">GTA 5</CardTitle>
      <CardText tag="h6">
      Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the first main entry in the
      Grand Theft Auto series since 2008's Grand Theft Auto IV. Set within the fictional state of San Andreas, based on Southern California, the single-player story
      follows three protagonists—retired bank robber Michael De Santa, street gangster Franklin Clinton, and drug dealer and arms smuggler Trevor Philips—and their
      efforts to commit heists while under pressure from a corrupt government agency and powerful criminals. The open world design lets players freely roam
      San Andreas' open countryside and the fictional city of Los Santos, based on Los Angeles.

      </CardText>
      <CardText tag="h6">
      The game is played from either a third-person or first-person perspective, and its world is navigated on foot and by vehicle. Players control the three
      lead protagonists throughout single-player and switch among them, both during and outside missions. The story is centred on the heist sequences, and many
      missions involve shooting and driving gameplay. A "wanted" system governs the aggression of law enforcement response to players who commit crimes.
      Grand Theft Auto Online, the game's online multiplayer mode, lets up to 30 players engage in a variety of different cooperative and competitive game modes.
      </CardText>
    </CardBody>
 <ReactAudioPlayer src={gta1} controls />
  </Card>
            </div>

            <div className="col-sm-12">
            <Card>
            <CardImg variant="top" src={watchD} />
            <CardBody>
              <CardTitle tag="h1">Watch Dogs</CardTitle>
              <CardText tag="h6">
              Watch Dogs (stylized as WATCH_DOGS) is a 2014 action-adventure game developed by Ubisoft Montreal and published by Ubisoft. It is the first installment
              in the Watch Dogs series. The game is played from a third-person perspective, and its world is navigated on foot or by vehicle. Set within a fictionalized
              version of the Chicagoland area in 2013, the single-player story follows grey hat hacker and vigilante Aiden Pearce's quest for revenge after the killing
              of his niece. An online multiplayer mode allows up to eight players to engage in cooperative and competitive gameplay.
              <CardText tag="h6">
              Following its announcement in June 2012, Watch Dogs was widely anticipated. It was released for Microsoft Windows, PlayStation 3, PlayStation 4, Xbox 360,
              Xbox One, and Wii U in 2014. The game received generally favorable reviews; praise was directed at the gameplay, mission and open world design, combat system,
              hacking elements and mission variety, while criticism was expressed concerning technical issues, the discrepancy in graphical quality between marketing and the
              real game, plot, and protagonist. Watch Dogs was a commercial success, breaking the record for the biggest first-day sales of a Ubisoft game and becoming the
              biggest launch of a new intellectual property in the United Kingdom at the time. The game has shipped over 10 million copies. A sequel, Watch Dogs 2, was
              released in November 2016, and a third game, Watch Dogs: Legion, was released in October 2020.
                      </CardText>
              </CardText>
            </CardBody>
             <ReactAudioPlayer src={watchD1} controls />
          </Card>
            </div>

            <div className="col-sm-12">
            <Card>
            <CardImg variant="top" src={sleepingD} />
            <CardBody>
              <CardTitle tag="h1">Sleeping Dogs </CardTitle>
              <CardText tag="h6">
              Sleeping Dogs is an action-adventure video game developed by United Front Games and published by Square Enix's European subsidiary. It was originally released
              for PlayStation 3, Xbox 360 and Windows in 2012. Set in contemporary Hong Kong, the story follows Wei Shen, an undercover Chinese-American police officer on
              assignment to infiltrate the Sun On Yee Triad organization. Gameplay focuses on Shen's fighting, shooting and parkour abilities, and on gadgets that can be used
              for combat and exploration. Players must complete missions to unlock content and continue the story, but they may instead freely roam the game's open world
              environment and engage in both legal and criminal activities. The latter may incite a police response, the intensity of which is controlled by a "heat" system.
              Actions such as fighting, driving and racing grant Shen statistical rewards and earn the player achievements.
              </CardText>
            </CardBody>
             <ReactAudioPlayer src={sleepingD1} controls />
          </Card>
            </div>

            <div className="col-sm-12">
            <Card>
            <CardImg variant="top" src={rd} />
            <CardBody>
              <CardTitle tag="h1">Red Dead Redemption 2</CardTitle>
              <CardText tag="h6">
              Red Dead Redemption 2 (stylized as Red Dead Redemption II) is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third
              entry in the Red Dead series and is a prequel to the 2010 game Red Dead Redemption. The story is set in 1899 in a fictionalized representation of the Western,
              Midwestern, and Southern United States and follows outlaw Arthur Morgan, a member of the Van der Linde gang. Arthur must deal with the decline of the Wild West
              whilst attempting to survive against government forces, rival gangs, and other adversaries. The story also follows fellow gang member John Marston,
              the protagonist of Red Dead Redemption.
              </CardText>
              <CardText tag="h6">
              The game is presented through both first and third-person perspectives, and the player may freely roam in its interactive open world. Gameplay elements include
              shootouts, heists, hunting, horseback riding, interacting with non-player characters, and maintaining the character's honor rating through moral choices and deeds.
              A bounty system similar to the "wanted" system from the Grand Theft Auto franchise governs the response of law enforcement and bounty hunters to crimes committed
              by the player.
              </CardText>
            </CardBody>
             <ReactAudioPlayer src={rd1} controls />
          </Card>
            </div>
        </div>
    );
}

export default OpenWorld;
