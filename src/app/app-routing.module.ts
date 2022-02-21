import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from './navbar/navbar.component';
import { MessageComponent } from './pages/message/message.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ReferencesComponent } from './pages/references/references.component';
import { SchoolComponent } from './pages/school/school.component';
import { WorkComponent } from './pages/work/work.component';

const routes: Routes = [
  {
    path: 'navbar',
    component: NavbarComponent,
  },
    /* children: [ */
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'school',
        component: SchoolComponent
      },
      {
        path: 'work',
        component: WorkComponent
      },
      {
        path: 'references',
        component: ReferencesComponent
      },
      {
        path: 'message',
        component: MessageComponent
      },
      { path: '**',
        redirectTo: 'profile',
        pathMatch: 'full'
      },
   /*  ] */

 /*  } */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TranslateModule.forRoot(),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
