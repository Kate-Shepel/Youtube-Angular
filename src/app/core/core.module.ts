import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { HeaderComponent } from "./components/header/header.component";
import { LoginInfoComponent } from "./components/login-info/login-info.component";
import { SearchInputComponent } from "./components/search-input/search-input.component";
import { SearchItemComponent } from "./components/search-item/search-item.component";
import { SortingOptionsComponent } from "./components/sorting-options/sorting-options.component";
import { CoreComponent } from "./core.component";
import { ColorBottomBorderDirective } from "./directives/color-bottom-border.directive";
import { SortingPipe } from "./pipes/sorting.pipe";

const routes: Routes = [
  { path: "", component: CoreComponent },
];

@NgModule({
  declarations: [
    CoreComponent,
    HeaderComponent,
    SearchInputComponent,
    SearchItemComponent,
    SortingOptionsComponent,
    LoginInfoComponent,
    SortingPipe,
    ColorBottomBorderDirective,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    SearchInputComponent,
    SearchItemComponent,
    SortingOptionsComponent,
    SortingPipe,
    ColorBottomBorderDirective,
  ]
})
export class CoreModule { }
