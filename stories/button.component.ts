import {Component} from '@angular/core';
import {Router} from '@angular/router';

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
    selector: 'storybook-button',
    template: `
        <button
                (click)="navigate()"
                type="button"
                class="storybook-button storybook-button--medium storybook-button--secondary">
            Router Link Button
        </button>`,
    styleUrls: ['./button.css'],
})
export default class ButtonComponent {


    constructor(private router: Router) {
    }

    public navigate() {
        this.router.navigate(['router', 'nested'])
    }

}
