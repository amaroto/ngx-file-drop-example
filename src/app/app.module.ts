import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { FileDropModule } from 'ngx-file-drop';

import {AppComponent} from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FileDropModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
