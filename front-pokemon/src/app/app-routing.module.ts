import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { TeamComponent } from './components/team/team.component';
import { TrainerComponent } from './components/trainer/trainer.component';

const routes: Routes = [
{
  path: 'pokemon',
  component: PokemonListComponent

},
{
  path: 'team',
  component: TeamComponent
},
{
  path: 'trainer',
  component: TrainerComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
