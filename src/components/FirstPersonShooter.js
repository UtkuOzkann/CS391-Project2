import React from 'react'
import './Page.css';
import ReactAudioPlayer from 'react-audio-player';
import {
Card,  CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import farcry from '../../src/images/farcry.jpg';
import bioshock from '../../src/images/Bioshock-infnite.jpg';
import csgo from '../../src/images/csgo.jpg';
import wolf from '../../src/images/wolfenstein.jpg';

import farcry1 from '../../src/mp3/far-cry-3.mp3';
import bioshock1 from '../../src/mp3/bioshock-infinite-ost-will-the-circle-be-unbroken-full.mp3';
import csgo1 from '../../src/mp3/cs-go-lets-go.mp3';
import wolf1 from '../../src/mp3/wolfenstein-main-theme.mp3';


function FPS() {

    return (
        <div className="card-group text" >
            <div className="col-sm-12">
            <Card>
    <CardImg variant="top" src={wolf} />
    <CardBody>
      <CardTitle tag="h1">Wolfenstein: The New Order</CardTitle>
      <CardText tag="h6">
      Wolfenstein: The New Order is a 2014 action-adventure first-person shooter video game developed by MachineGames and published by Bethesda Softworks.
                       It was released on 20 May 2014 for Microsoft Windows, PlayStation 3, PlayStation 4, Xbox 360, and Xbox One.
                       The game is the seventh main entry in the Wolfenstein series and the successor to 2009's Wolfenstein, set in an alternate history 1960s Europe where the Nazis won the Second World War.
                       The story follows war veteran William "B.J." Blazkowicz and his efforts to stop the Nazis from ruling over the world.

      </CardText>
      <CardText tag="h6">
      The game is played from a first-person perspective and most of its levels are navigated on foot.
      The story is arranged in chapters, which players complete in order to progress.
      A morality choice in the prologue alters the game's storyline; some characters and small plot points are replaced throughout the two timelines.
      The game features a variety of weapons, most of which can be dual wielded. A cover system is present.
      </CardText>
    </CardBody>
 <ReactAudioPlayer src={wolf1} controls />
  </Card>
            </div>

            <div className="col-sm-12">
            <Card>
            <CardImg variant="top" src={csgo} />
            <CardBody>
              <CardTitle tag="h1">Counter-Strike: Global Offensive</CardTitle>
              <CardText tag="h6">
              Counter-Strike: Global Offensive (CS:GO) is a multiplayer first-person shooter developed by Valve and Hidden Path Entertainment.
              It is the fourth game in the Counter-Strike series. Developed for over two years, Global Offensive was released for Windows, macOS, Xbox 360,
              and PlayStation 3 in August 2012, and for Linux in 2014. Valve still regularly updates the game, both with smaller balancing patches and larger content additions.
              <CardText tag="h6">
              The game pits two teams, Terrorists and Counter-Terrorists, against each other in different objective-based game modes.
              The most common game modes involve the Terrorists planting a bomb while Counter-Terrorists attempt to stop them, or Counter-Terrorists attempting to rescue
              hostages that the Terrorists have captured. There are eight official game modes, all of which have distinct characteristics specific to that mode.
              The game also has matchmaking support that allows players to play on dedicated Valve servers, in addition to community-hosted servers with custom maps and game
              modes. A battle-royale game-mode, "Danger Zone", was introduced in December 2018.
                      </CardText>
              </CardText>
            </CardBody>
             <ReactAudioPlayer src={csgo1} controls />
          </Card>
            </div>

            <div className="col-sm-12">
            <Card>
            <CardImg variant="top" src={bioshock} />
            <CardBody>
              <CardTitle tag="h1">Bioshock Infinite</CardTitle>
              <CardText tag="h6">
              BioShock Infinite is a first-person shooter video game developed by Irrational Games and published by 2K Games. It was released worldwide for the Microsoft
              Windows, PlayStation 3, Xbox 360, and OS X platforms in 2013, and a Linux port was released in 2015. Infinite is the third installment in the BioShock series,
              and though it is not immediately part of the storyline of previous BioShock games, it features similar gameplay concepts and themes. Irrational Games and creative
               director Ken Levine based the game's setting on historical events at the turn of the 20th century, such as the 1893 World's Columbian Exposition, and based the
               story on the concept of American exceptionalism, while also incorporating influences from more recent events at the time such as the 2011 Occupy movement.
              </CardText>
              <CardText tag="h6">
              The game is set in the year 1912 and follows its protagonist, former Pinkerton agent Booker DeWitt, who is sent to the airborne city of Columbia to find a young
 woman, Elizabeth, who has been held captive there for most of her life. Though Booker rescues Elizabeth, the two become involved with the city's warring factions:
 the nativist and elite Founders that rule Columbia and strive to keep its privileges for White Americans, and the Vox Populi, underground rebels representing the
 underclass of the city. During this conflict, Booker learns that Elizabeth possesses strange powers to manipulate "Tears" in the space-time continuum that ravage
 Columbia, and soon discovers her to be central to the city's dark secrets.
                    </CardText>
            </CardBody>
             <ReactAudioPlayer src={bioshock1} controls />
          </Card>
            </div>

            <div className="col-sm-12">
            <Card>
            <CardImg variant="top" src={farcry} />
            <CardBody>
              <CardTitle tag="h1">Far Cry 3</CardTitle>
              <CardText tag="h6">
              Far Cry 3 is a 2012 first-person shooter developed by Ubisoft Montreal and published by Ubisoft. It is the third main installment in the Far Cry series.
              The game takes place on the fictional Rook Islands, a tropical archipelago which can be freely explored by players. Gameplay focuses on combat and exploration.
              Players can use a variety of weapons to defeat human enemies and hostile wildlife, and the game features elements found in role-playing games such as skill trees
              and experience. After a vacation goes awry, protagonist Jason Brody must save his friends, who have been kidnapped by pirates, and escape from the island and
              its unhinged inhabitants.
              </CardText>
            </CardBody>
             <ReactAudioPlayer src={farcry1} controls />
          </Card>
            </div>
        </div>
    );
}

export default FPS;
