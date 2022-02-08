import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./material.module";
import { CustomIconComponent } from "./_components/custom-icon/custom-icon.component";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    CustomIconComponent,
  ],
  declarations: [
    CustomIconComponent
  ],
})

export class SharedModule { }
