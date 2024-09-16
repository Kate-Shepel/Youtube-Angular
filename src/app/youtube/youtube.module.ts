import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthModule } from "../auth/auth.module";
import { LoginGuardService } from "../auth/services/login-guard.service";
import { CoreModule } from "../core/core.module";
import { CreatedCardComponent } from "./components/created-card/created-card.component";
import { SearchResultListComponent } from "./components/search-result-list/search-result-list.component";
import { DetailedInfoPageComponent } from "./pages/detailed-info-page/detailed-info-page.component";
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { YoutubeComponent } from "./youtube.component";

const routes: Routes = [
  {
    path: "",
    component: YoutubeComponent,
  },
  {
    path: "detailed",
    component: DetailedInfoPageComponent,
    canActivate: [LoginGuardService]
  },
];

@NgModule({
  declarations: [
    YoutubeComponent,
    MainPageComponent,
    SearchResultListComponent,
    DetailedInfoPageComponent,
    CreatedCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreModule,
    AuthModule,
    HttpClientModule,
  ],
})
export class YoutubeModule { }
