import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefasListComponent } from './components/tarefas-list/tarefas-list.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    TarefasListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    TarefasListComponent,
    HomeComponent
  ]
   
})
export class HomeModule { }
