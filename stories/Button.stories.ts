// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, StoryFn} from '@storybook/angular';
import Button from './button.component';
import {moduleMetadata} from '@storybook/angular';
import {RouterTestingModule} from '@angular/router/testing';

export default {
    title: 'Example/Navigation Button',
    component: Button,
    parameters: {
        controls: {hideNoControlsWarning: true},
    }
} as Meta;

const Template: StoryFn<Button> = (args: Button) => ({
    props: args,
});

export const Default = Template.bind({});

export const DisabledPlugin = Template.bind({});
DisabledPlugin.parameters = {
    angularRouter: {disable: true}
}
DisabledPlugin.decorators = [
    moduleMetadata({imports: [RouterTestingModule]})
]
