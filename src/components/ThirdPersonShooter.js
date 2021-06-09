import React from 'react'
import './Page.css';
import ReactAudioPlayer from 'react-audio-player';
import {
Card,  CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import maxPayne from '../../src/images/max payne.jpg';
import gow2 from '../../src/images/god of war.jpg';
import lou from '../../src/images/the last of us.jpg';
import gow from '../../src/images/gears of war.jpg';

import maxPayne1 from '../../src/mp3/max-payne-2-main-theme.mp3';
import gow3 from '../../src/mp3/god of war ost.mp3';
import lou1 from '../../src/mp3/the-last-of-us-theme-song.mp3';
import gow1 from '../../src/mp3/gears-of-war.mp3';



function TPS() {

    return (

        <div className="card-group text" >
            <div className="col-sm-12">
            <Card>
    <CardImg variant="top" src={gow} />
    <CardBody>
      <CardTitle tag="h1">Gears of War</CardTitle>
      <CardText tag="h6">
      Gears of War is a 2006 third-person shooter video game, the first installment of the Gears of War series. It was developed by Epic Games and published by
      Microsoft Game Studios, initially as an exclusive title for the Xbox 360 in November 2006, before a Microsoft Windows version of the game, developed in
      conjunction with People Can Fly, was released in 2007. The game's main story, which can be played in single or co-operative play, focuses on a squad of troops
      who assist in completing a desperate, last-ditch attempt to end a war against a genocidal subterranean enemy, the Locust, and save the remaining human inhabitants
      of their planet Sera. The game's multiplayer mode allows up to eight players to control characters from one of the two factions in a variety of online game modes.
      Gameplay features players using cover and strategic fire in order to win battles.

      </CardText>
      <CardText tag="h6">
      The game was a commercial success, selling over three million copies within ten weeks of its launch. It became the fastest selling video game of 2006, the
       second-most played game over Xbox Live during 2007, and the 6th best selling Xbox 360 game. Considered one of the seventh generation of video gaming's most
       significant titles, the game received universal acclaim for its gameplay and detailed visuals, with it winning over 30 "Game of the Year" awards in 2006.
      </CardText>

    </CardBody>
 <ReactAudioPlayer src={gow1} controls />
  </Card>
            </div>

            <div className="col-sm-12">
            <Card>
            <CardImg variant="top" src={lou} />
            <CardBody>
              <CardTitle tag="h1">The Last of Us</CardTitle>
              <CardText tag="h6">
              The Last of Us is a 2013 action-adventure game developed by Naughty Dog and published by Sony Computer Entertainment. Players control Joel, a smuggler tasked with
              escorting a teenage girl, Ellie, across a post-apocalyptic United States. The Last of Us is played from a third-person perspective. Players use firearms and improvised
              weapons, and can use stealth to defend against hostile humans and cannibalistic creatures infected by a mutated fungus in the genus Cordyceps. In the online multiplayer
              mode, up to eight players engage in cooperative and competitive gameplay.
              <CardText tag="h6">
              Development of The Last of Us began in 2009, soon after the release of Naughty Dog's previous game, Uncharted 2: Among Thieves. For the first time in the
              company's history, Naughty Dog split into two teams; while one team developed Uncharted 3: Drake's Deception, the other half developed The Last of Us.
              The relationship between Joel and Ellie became the focus, with all other elements developed around it. Actors Troy Baker and Ashley Johnson portrayed Joel
              and Ellie respectively through voice and motion capture, and assisted creative director Neil Druckmann with the development of the characters and story.
              The original score was composed and performed by Gustavo Santaolalla.
                      </CardText>
              </CardText>
            </CardBody>
             <ReactAudioPlayer src={lou1} controls />
          </Card>
            </div>

            <div className="col-sm-12">
            <Card>
            <CardImg variant="top" src={gow2} />
            <CardBody>
              <CardTitle tag="h1">God of War</CardTitle>
              <CardText tag="h6">
              God of War is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment (SIE). Released worldwide on April 20,
                      2018, for the PlayStation 4 (PS4), it is the eighth installment in the God of War series, the eighth chronologically, and the sequel to 2010's God of War III.
                      Unlike previous games, which were loosely based on Greek mythology, this installment is rooted in Norse mythology, with the majority of it set in ancient
                      Scandinavia in the realm of Midgard. For the first time in the series, there are two protagonists: Kratos, the former Greek God of War who remains the only
                      playable character, and his young son Atreus. Following the death of Kratos' second wife and Atreus' mother, they journey to fulfill her request that her ashes
                      be spread at the highest peak of the nine realms. Kratos keeps his troubled past a secret from Atreus, who is unaware of his divine nature. Along their journey,
                      they encounter monsters and gods of the Norse world.
              </CardText>
              <CardText tag="h6">
              God of War received universal acclaim for its story, world design, art direction, music, graphics, combat system, and characters, in particular the dynamic
  between Kratos and Atreus. Many reviewers felt it had successfully revitalized the series without losing the core identity of its predecessors. It received
  a number of perfect review scores, tying it with the original God of War (2005) as the highest-rated game in the series, as well as one of the highest-rated
  PlayStation 4 games on the review aggregator Metacritic. Among other awards and nominations, God of War was awarded Game of the Year by numerous media outlets
  and award shows. The game performed well commercially, selling over five million copies within a month of its release and over 10 million by May 2019, making
  it one of the best-selling PlayStation 4 games as well as the best-selling game in the series. A novelization was released in August 2018, followed by a prequel
  comic series published from November 2018 to February 2019. An untitled sequel is currently in development, scheduled to be released in 2021 for the PlayStation 5.
              </CardText>
            </CardBody>
             <ReactAudioPlayer src={gow3} controls />
          </Card>
            </div>

            <div className="col-sm-12">
            <Card>
            <CardImg variant="top" src={maxPayne} />
            <CardBody>
              <CardTitle tag="h1">Max Payne 2: The Fall of Max Payne</CardTitle>
              <CardText tag="h6">
              Max Payne 2: The Fall of Max Payne is a third-person shooter video game developed by Remedy Entertainment and published by Rockstar Games in October 2003.
                    It is the sequel to Max Payne (2001) and the second game in the Max Payne series. Max Payne 2 continues the story of the titular character, a detective for
                    the New York City Police Department (NYPD) and former vigilante, as he is reunited with contract killer Mona Sax and must work with her to resolve a conspiracy
                    full of death and betrayal.
              </CardText>
              <CardText tag="h6">
              Max Payne 2 received highly positive reviews from critics, with praise focused on its action and story, while criticism targeted its short length. Despite the
                    positive reception, the game sold poorly, leading Rockstar Games' parent company Take-Two Interactive to cite Max Payne 2's sales as a cause for the company's
                    reforecast finances of 2004. Max Payne 2 received several industry awards, including Outstanding Art Direction at the Golden Satellite Awards 2004, and Editors'
                    Choice Awards from GamePro, IGN, and GameSpy. A sequel, Max Payne 3, was released in 2012.
              </CardText>
            </CardBody>
             <ReactAudioPlayer src={maxPayne1} controls />
          </Card>
            </div>
        </div>
    );
}

export default TPS;
