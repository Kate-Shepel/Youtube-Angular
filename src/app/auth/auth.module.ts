import { DragDropModule } from "@angular/cdk/drag-drop";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { CommonModule } from "@angular/common";
import { HttpClientJsonpModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { en_US, NZ_I18N } from "ng-zorro-antd/i18n";

import { AuthComponent } from "./auth.component";
import { CreatedCardMsgComponent } from "./components/created-card-msg/created-card-msg.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { DemoNgZorroAntdModule } from "./ng-zorro-antd.module";
import { AdminPageComponent } from "./pages/admin-page/admin-page.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { RegistrationPageComponent } from "./pages/registration-page/registration-page.component";
import {
  LoginGuardService as LoginGuard,
} from "./services/login-guard.service";

const routes: Routes = [
  { path: "", redirectTo: "/auth/login", pathMatch: "full" },
  { path: "login", component: LoginPageComponent },
  { path: "admin", component: AdminPageComponent, canActivate: [LoginGuard] },
  { path: "registration", component: RegistrationPageComponent },
];

@NgModule({
  declarations: [
    AuthComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    LoginFormComponent,
    AdminPageComponent,
    CreatedCardMsgComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule,
    DemoNgZorroAntdModule,
    ScrollingModule,
    DragDropModule,
  ],
  exports: [LoginFormComponent],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
})

export class AuthModule { }
