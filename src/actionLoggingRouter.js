import {action} from "@storybook/addon-actions";
import {of} from "rxjs";

// noinspection JSUnusedGlobalSymbols
export class ActionLoggingRouter {

    constructor(activePath) {
        this.activePath = activePath;
    }

    get navigated() {
        return true;
    }

    get routerState() {
        return {};
    }

    get events() {
        return of(undefined)
    }

    serializeUrl(tree) {
        return this._joinCommands(tree)
    }

    createUrlTree(commands, extras = {}) {
        return {commands, extras};
    }

    isActive(tree, excact) {
        if (!this.activePath) {
            return false
        }
        if (excact) {
            return this._joinCommands(tree) === this.activePath
        }
        return this._joinCommands(tree).startsWith(this.activePath);
    }


    navigate(commands, extras) {
        action('[router] navigate')({commands, extras})
        return Promise.resolve(true);
    }

    navigateByUrl(url, extras) {
        action('[router] navigateByUrl')({url, extras})
        return Promise.resolve(true);
    }

    _joinCommands(tree) {
        return tree.commands.join('/');
    }

}
