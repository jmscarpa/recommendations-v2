import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastsComponent } from './components/toasts/toasts.component';
import { RegisterComponent } from './pages/register/register.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { RecommendationsListComponent } from './pages/recommendations-list/recommendations-list.component';
import { EmptyStateComponent } from './componentes/empty-state/empty-state.component';
import { RecommendationDetailsComponent } from './pages/recommendation-details/recommendation-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToastsComponent,
    RegisterComponent,
    LayoutComponent,
    RecommendationsListComponent,
    EmptyStateComponent,
    RecommendationDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
