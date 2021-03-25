import {moduleMetadata} from "@storybook/angular";
import {Router} from "@angular/router";
import {ActionLoggingRouter} from "./actionLoggingRouter";
import {RouterTestingModule} from "@angular/router/testing";
import {ADDON_ID} from "./constants";

export const withAngularRouter = (storyFn, context) => {
    const storyArgs = context.args[ADDON_ID]
    const options = context?.parameters?.options
    if (options && options[ADDON_ID]?.disable === true) {
        return storyFn()
    }

    return moduleMetadata({
        imports: [RouterTestingModule],
        providers: [
            {provide: Router, useValue: new ActionLoggingRouter(storyArgs?.active)}
        ]
    })(storyFn)
}
