import { Component } from "@angular/core";

@Component({
    template: `
<br>
<br>
<div class="text-center">
    <img style="height: 150px;" [src]="fullImage">
    <br>
    <h1 class="text-center">Under Construction</h1>
</div>
<br>
<br>
`
})
export class SettingComponent {
    fullImage: string;
    constructor() {
        this.fullImage = './assets/img/construction.jpg';
    }
}
