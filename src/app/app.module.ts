import { CommonModule, registerLocaleData } from "@angular/common";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import en from "@angular/common/locales/en";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreModule } from "@ngrx/store";
import { en_US, NZ_I18N } from "ng-zorro-antd/i18n";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from "./core/core.module";
import { NotFound404Component } from "./core/pages/not-found404/not-found404.component";
import { CreatedCardsModule } from "./created-cards/created-cards.module";
import { ItemEffects } from "./store/effects/item.effects";
import { ApiInterceptor } from "./youtube/interceptors/api.interceptor";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    NotFound404Component,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([ItemEffects]),
    StoreRouterConnectingModule.forRoot(),
    CreatedCardsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
    { provide: NZ_I18N, useValue: en_US },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
