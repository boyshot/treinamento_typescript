
////// <reference path="player.ts" />
///// <reference path="game.ts" />

import { Game } from "./game";
import { Player } from "./player";
import * as Helpers  from "./utility";



let newGame: Game;

// adiciona um evento click no botão de iniciar o jogo
document.getElementById('startGame')!.addEventListener('click', () => {
  const player: Player = new Player();
  player.name = Helpers.getValue('playername');

  const problemCount: number = Number(Helpers.getValue('problemCount'));
  const factor: number = Number(Helpers.getValue('factor'));

  newGame = new Game(player, problemCount, factor);
  newGame.displayGame();
});

// adiciona um evento Click para calcular a pontuação no botão de pontos.
document.getElementById('calculate')!.addEventListener('click', () => {
  newGame.calculateScore();
});



/*
/// <reference path="player.ts" />

function startGame() {
    

    let playerName: string = Utility.getInputValue('playername');
    logPlayer(playerName);

    var messageElement: HTMLElement | null;

    messageElement = document.getElementById('messages');
    messageElement!.innerHTML = 'Bem vindo ao TypeScript';

    logPlayer(playerName);

    postScore(100, playerName);*/

/*
    let meuResult: Result ={
        playerName: 'Paulo Rocha',
        score: 5,
        problemCount: 5,
        factor: 7
    }

    let player: Person = {
        name:'Paulo',
        formatName: () => 'Par'
    }*/
/*
    const firstPLayer: Player = new Player();
    firstPLayer.name = 'Paulo';
    console.log(firstPLayer.formatName());


}

function logPlayer(playerName: string) {
    console.log(`Novo jogador iniciado para o jogo: ${playerName}`);
}

function postScore(score: number, playerName: string): void{
    const scoreElement: HTMLElement | null =
      document.getElementById('postedScores');

    scoreElement!.innerHTML = `${score} = ${playerName}`;
}

const logMessage = (erro: string): void  => console.log(erro);

document.getElementById('startGame')?.addEventListener('click', startGame);*/