import {moduleMetadata} from "@storybook/angular";
import {Router} from "@angular/router";
import {ActionLoggingRouter} from "./actionLoggingRouter";
import {RouterTestingModule} from "@angular/router/testing";
import {ADDON_ID} from "./constants";
import {makeDecorator} from "@storybook/preview-api";


export const withAngularRouter = makeDecorator({
    name: 'withAngularRouter',
    parameterName: ADDON_ID,
    wrapper: (storyFn, context, {parameters}) => {
        return moduleMetadata({
            imports: [RouterTestingModule],
            providers: [
                {provide: Router, useValue: new ActionLoggingRouter(parameters?.active)}
            ]
        })(storyFn)
    }
})
