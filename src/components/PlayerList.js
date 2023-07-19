import React from 'react';
import Player from './Player';
import players from '../players';

const PlayersList = () => {
    
return (
    <div>

        <h1 style={{fontSize : '55px', fontFamily : 'cursive', fontWeight : '800', textAlign : 'left', color : 'green'}}>FIFA PLAYERS</h1>
        
        <ul style={{listStyleType: 'square', color: 'darkblue', margin: '25'}}>
            {players.map((players, index) => (
                <li key={index}>
                    <Player name={players.name} team={players.team} nationality={players.nationality} jerseyNumber={players.jerseyNumber} age={players.age} imageUrl={players.imageUrl} />
                </li>
))}
        </ul>

    </div>
);
}

export default PlayersList;