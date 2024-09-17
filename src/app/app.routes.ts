import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { NotfoundComponent } from './componentes/notfound/notfound.component';
import { SobreComponent } from './componentes/sobre/sobre.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },  // Adiciona redirecionamento para /home quando o caminho está vazio
    { path: 'home', component: HomeComponent },  // Adiciona a rota para o componente Home
    { path: 'cadastro', component: CadastroComponent },
    { path: 'notfound', component: NotfoundComponent },
    { path: 'sobre', component: SobreComponent },
    { path: '**', redirectTo: 'notfound', pathMatch: 'full' }  // Roteia todas as rotas não encontradas para a página Not Found
];
