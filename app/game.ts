import { Scoreboard } from "./scoreboard";
import { getValue } from './utility';
import { Result } from "./result";
import { Player } from "./player";

export class Game {
    private scoreBoard = new Scoreboard();
  
    constructor(public player: Player, 
                public problemCount: number, 
                public factor: number) {
  
    }
  
    displayGame(): void {
    
      let gameForm: string = '';
      for (let i = 1; i <= this.problemCount; i++) {
        gameForm += '<div class="form-group">';
        gameForm += '<label for="answer' + i + '" class="col-sm-2 control-label">';
        gameForm += String(this.factor) + ' x ' + i + ' = </label>';
        gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer' + i + '" size="5" /></div>';
        gameForm += '</div>';
      }
  
      const gameElement: HTMLElement = document.getElementById('game')!;
      gameElement.innerHTML = gameForm;
  
      document.getElementById('calculate')!.removeAttribute('disabled');
    }
  
     calculateScore(): void {
  
      let score: number = 0;
  
      //loop através dos textbox de respostas, e calcula o número de acertos.
      for (let i = 1; i <= this.problemCount; i++) {
        const answer: number = Number(getValue('answer' + i));
        //incrementa os pontos, se a resposta for correta
        if (i * this.factor === answer) {
          score++;
        }
      }
  
      //cria um novo objeto de Resultados, para passar para o quadro de pontos
      const result: Result = {
        playerName: this.player.name,
        score: score,
        problemCount: this.problemCount,
        factor: this.factor
      };
  
      //adiciona o resultado e atualiza o quadro de pontos
      this.scoreBoard.addResult(result);
      this.scoreBoard.updateScoreboard();
  
      //desabilita o botão de calcular a pontuação
      document.getElementById('calculate')!.setAttribute('disabled', 'true');
    }
  
  }