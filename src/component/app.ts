import { Component } from '@angular/core';

import { HeaderComponent } from './header';
import { FooterComponent } from './footer';

@Component({
    selector: 'app',
    styles: [
        require('normalize.css')
    ],
    template: require('template/app.html'),
    directives: [HeaderComponent, FooterComponent]
})
export class AppComponent {
}