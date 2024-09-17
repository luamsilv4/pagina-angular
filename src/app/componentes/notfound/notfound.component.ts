import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar'; // Importar o módulo para a progress bar
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatProgressBarModule], // Adicione MatProgressBarModule aqui
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit, OnDestroy {
  countdown: number = 15; // Tempo inicial para o contador
  progress: number = 100; // Valor inicial da barra de progresso
  private countdownSubscription: Subscription = new Subscription();

  constructor(private router: Router) {}

  ngOnInit() {
    this.countdownSubscription = interval(1000).subscribe(() => {
      this.countdown--;
      this.progress = (this.countdown / 15) * 100; // Atualiza o valor da barra de progresso
      if (this.countdown <= 0) {
        this.router.navigate(['/']); // Redireciona para a página inicial quando o contador chega a zero
      }
    });
  }

  ngOnDestroy() {
    this.countdownSubscription.unsubscribe();
  }
}
