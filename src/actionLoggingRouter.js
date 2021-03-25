import {action} from "@storybook/addon-actions";
import {of} from "rxjs";
import {UrlTree} from "@angular/router";

// noinspection JSUnusedGlobalSymbols
export class ActionLoggingRouter {

    constructor(activePath) {
        this.activePath = activePath;
        new UrlTree()
    }

    get navigated() {
        return true;
    }

    get routerState() {
        return {};
    }

    get events() {
        return of()
    }

    serializeUrl(tree) {
        return tree.commands.join('/')
    }

    createUrlTree(commands, extras = {}) {
        return {commands, extras};
    }

    isActive(tree, excact) {
        if (!this.activePath) {
            return false
        }
        if (excact) {
            return tree.commands.join('/') === this.activePath
        }
        return tree.commands.join('/').startsWith(this.activePath);
    }

    navigate(commands, extras) {
        action('[router] navigate')({commands, extras})
        return Promise.resolve();
    }

    navigateByUrl(url, extras) {
        action('[router] navigateByUrl')({url, extras})
        return Promise.resolve();
    }

}
