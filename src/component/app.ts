import { Component } from '@angular/core';

import { HeaderComponent } from './header';
import { FooterComponent } from './footer';

@Component({
    selector: 'app',
    template: require('template/app.html'),
    directives: [HeaderComponent, FooterComponent]
})
export class AppComponent {
}