import { NgModule } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";
import {LayoutModule} from "@angular/cdk/layout";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {MatTreeModule} from "@angular/material/tree";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatNativeDateModule, MatRippleModule} from "@angular/material/core";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatChipsModule} from "@angular/material/chips";
import {MatTabsModule} from "@angular/material/tabs";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatBadgeModule} from "@angular/material/badge";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {OverlayModule} from "@angular/cdk/overlay";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {A11yModule} from "@angular/cdk/a11y";

const materialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  LayoutModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatDialogModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatRadioModule,
  MatSelectModule,
  MatTableModule,
  MatTreeModule,
  MatSidenavModule,
  MatPaginatorModule,
  MatSortModule,
  MatNativeDateModule,
  MatTooltipModule,
  MatChipsModule,
  MatTabsModule,
  MatRippleModule,
  MatSlideToggleModule,
  MatGridListModule,
  MatExpansionModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatBadgeModule,
  MatAutocompleteModule,
  OverlayModule,
  ReactiveFormsModule,
  FormsModule,
  A11yModule,
];

@NgModule({
  exports: [materialComponents],
  imports: [materialComponents,]
})
export class MaterialModule { }
