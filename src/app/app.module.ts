import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
/* Importado para los enlaces a rutas */
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { BodyMainComponent } from './body-main/body-main.component';
import { BodyActorComponent } from './body-actor/body-actor.component';
import { BodyDirectorComponent } from './body-director/body-director.component';
import { ErrorComponent } from './error/error.component';

/* Services */
import {ServThemesService} from './serv-themes.service';
import {ServApiService} from './serv-api.service';

/* Module breadcrumb */
import {Ng2BreadcrumbModule} from 'ng2-breadcrumb/ng2-breadcrumb';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
    {path: '', component: BodyMainComponent},
    {path: 'Main', component: BodyMainComponent,
        children:[
            {path: 'Movie', component: MovieComponent}
        ]
    },
    {path: 'Actor', component: BodyActorComponent,
        children:[
            {path: 'Movie', component: MovieComponent}
        ]
    },
    {path: 'Director', component: BodyDirectorComponent,
        children:[
            {path: 'Movie', component: MovieComponent}
        ]
    },
    {path: '**', component: ErrorComponent}
];

export const routing = RouterModule.forRoot(routes);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    BodyMainComponent,
    BodyActorComponent,
    BodyDirectorComponent,
    ErrorComponent,
    MovieComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    Ng2BreadcrumbModule.forRoot()
  ],
  providers: [ServThemesService, ServApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
