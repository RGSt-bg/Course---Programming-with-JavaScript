import { Component } from "@angular/core";

@Component({
    selector: 'app-nav',
    template: `
    <div style="border: 3px solid green">
        <div id="nav-wrapper">Hello, Nav Component</div>
        <div>{{title}}</div>
    </div>`,
    styles: ['#nav-wrapper {background-color: pink;}']
})
export class NavComponent {
    title = 'Hello, title';
}
