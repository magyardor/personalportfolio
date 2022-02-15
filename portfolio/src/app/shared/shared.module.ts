import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { MaterialModule } from "./material.module";
import { CustomIconComponent } from "./_components/custom-icon/custom-icon.component";
import { LanguageSelectorComponent } from "./_components/language-selector/language-selector.component";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
  ],
  exports: [
    MaterialModule,
    CustomIconComponent,
    LanguageSelectorComponent,
    TranslateModule
  ],
  declarations: [
    CustomIconComponent,
    LanguageSelectorComponent
  ],
})

export class SharedModule { }
