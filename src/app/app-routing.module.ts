import { RecommendationDetailsComponent } from './pages/recommendation-details/recommendation-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { LayoutComponent } from 'src/app/pages/layout/layout.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { RecommendationsListComponent } from 'src/app/pages/recommendations-list/recommendations-list.component';
import { RegisterComponent } from 'src/app/pages/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registre-se', component: RegisterComponent },
  { path: '', component: LayoutComponent, canActivate: [ AuthGuard ], children: [
    { path: '', component: RecommendationsListComponent },
    { path: 'recomendacao/:id', component: RecommendationDetailsComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
