import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
    <div class="container">
        <h1 class="text-center">{{pageTitle}}</h1>
        <pm-products></pm-products>
    </div>
    `
})
export class AppComponent {
    pageTitle: string = "Acme Product Management";
}
