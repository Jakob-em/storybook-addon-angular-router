import {ActionLoggingRouter} from "./actionLoggingRouter";
import {action} from "@storybook/addon-actions";

jest.mock('@storybook/addon-actions', () => ({
    action: jest.fn()
}));

describe('ActionLoggingRouter', () => {

    let router;
    const actionCallback = jest.fn()

    beforeAll(() => {
        action.mockReturnValue(actionCallback)
    })

    beforeEach(() => {
        router = new ActionLoggingRouter('path/nested');
    })

    it('should be created', () => {
        expect(router).toBeTruthy()
    });

    it('should return object as router state', () => {
        expect(router.routerState).toBeTruthy()
    });

    it('should return navigated', () => {
        expect(router.navigated).toBe(true)
    });

    it('should return events', () => {
        expect(router.events).toBeTruthy()
    });

    it('should return concatenated url', () => {
        expect(router.serializeUrl({commands: ['first', 'second']}))
            .toEqual('first/second')
    });

    it('should return activePath as url', () => {
        expect(router.url).toEqual('path/nested');
    });

    it('should return parameters as tree', () => {
        expect(router.createUrlTree(['first', 'second'], {option: true}))
            .toStrictEqual({
                commands: ['first', 'second'],
                extras: {option: true}
            })
    });

    describe('isActive', () => {
        it('should be active when exact and routes match', () => {
            expect(router.isActive(
                {commands: ['path', 'nested']},
                true
            )).toBe(true)
        });

        it('should be active when exact and routes match with options', () => {
            expect(router.isActive(
                {commands: ['path', 'nested']},
                {paths: 'exact', queryParams: 'exact', fragment: 'ignored', matrixParams: 'ignored'}
            )).toBe(true)
        });


        it('should be active when not exact and routes match', () => {
            expect(router.isActive(
                {commands: ['path', 'nested']},
                false
            )).toBe(true)
        });

        it('should not be active when exact and routes do not match', () => {
            expect(router.isActive(
                {commands: ['path', 'not']},
                true
            )).toBe(false)
        });

        it('should not be active when not exact and routes do not match', () => {
            expect(router.isActive(
                {commands: ['path', 'not']},
                false
            )).toBe(false)
        });

        it('should be active when not exact and routes match partly', () => {
            expect(router.isActive(
                {commands: ['path', 'nested', 'deep']},
                false
            )).toBe(true)
        });

        it('should be active when not exact and routes match partly with options', () => {
            expect(router.isActive(
                {commands: ['path', 'nested', 'deep']},
                {paths: 'subset', queryParams: 'exact', fragment: 'ignored', matrixParams: 'ignored'}
            )).toBe(true)
        });

        it('should not be active when exact and routes match partly', () => {
            expect(router.isActive(
                {commands: ['path', 'nested', 'deep']},
                true
            )).toBe(false)
        });
    })

    it('should call action on navigate', function () {
        const commands = ['first', 'second'];
        const extras = {option: true};

        expect(router.navigate(commands, extras))
            .resolves.toBe(true)

        expect(action).toBeCalledWith('[router] navigate');
        expect(actionCallback).toBeCalledWith({commands, extras});
    });

    it('should call action on navigateByUrl', function () {
        const url = {path: 'a/b/c'};
        const extras = {option: true};

        expect(router.navigateByUrl(url, extras))
            .resolves.toBe(true)

        expect(action).toBeCalledWith('[router] navigateByUrl');
        expect(actionCallback).toBeCalledWith({url, extras});
    });

})
