// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import Header from './header.component';

export default {
    title: 'Example/Header',
    component: Header,
    argTypes: {
        exact: {
            name: 'exact',
            defaultValue: false,
            description:'exact match options of the routerLinkActive directive',
            control: {type :'boolean'}
        }
    }
} as Meta;

const Template: Story<Header> = (args: Header) => ({
    component: Header,
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
