import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

//Components

//Modules
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

//Service

//Pipie

@NgModule({
    declarations: [
        // AppDropdownComponent,
        // AppActionButtonComponent,
        // AppPaginatorComponent,
        // CountUpDirective,
        // DateFormatPipe,
        // AppDialogComponent,
        // RouterOutletComponent
    ],
    imports: [
        // SharedPrimeNgModule, 
        CommonModule, 
        // TranslateModule, 
        FormsModule
    ],
    exports: [
        // AppDropdownComponent,
        // AppActionButtonComponent,
        // AppPaginatorComponent,
        // SharedPrimeNgModule,
        // CountUpDirective,
        // DateFormatPipe,
        // AppDialogComponent,
        // RouterOutletComponent
    ],
    providers: [
    //   ExcelService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class SharedModule { }
