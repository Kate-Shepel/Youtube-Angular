import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginGuardService } from "./auth/services/login-guard.service";
import { NotFound404Component } from "./core/pages/not-found404/not-found404.component";
import { MainPageComponent } from "./youtube/pages/main-page/main-page.component";

const routes: Routes = [
  { path: "", component: MainPageComponent, canActivate: [LoginGuardService] },
  { path: "auth", loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule) },
  {
    path: "youtube",
    loadChildren: () => import("./youtube/youtube.module").then((m) => m.YoutubeModule),
    canActivate: [LoginGuardService]
  },
  { path: "**", component: NotFound404Component, canActivate: [LoginGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
