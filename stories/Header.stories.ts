// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, StoryFn} from '@storybook/angular';
import Header from './header.component';

export default {
    title: 'Example/Header',
    component: Header,
    argTypes: {
        exact: {
            name: 'exact',
            description:'exact match options of the routerLinkActive directive',
            control: {type :'boolean'}
        }
    }
} as Meta;

const Template: StoryFn<Header> = (args: Header) => ({
    props: args,
});

export const WithoutActive = Template.bind({});

export const WithActive = Template.bind({});
WithActive.parameters = {
    angularRouter: {active: '/location/1'}
};

export const WithActivePartialMatch = Template.bind({});
WithActivePartialMatch.parameters = {
    angularRouter: {active: '/location'}
};
