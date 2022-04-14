import { Subscription } from 'expo-modules-core';
import { URLListener } from './Linking.types';
declare const _default: {
    addEventListener(type: 'url', listener: URLListener): Subscription;
    /**
     * @deprecated `removeEventListener(...)` has been deprecated. Please use `remove()` on the subscription returned by `addEventListener(...)` instead.
     */
    removeEventListener(type: 'url', listener: URLListener): void;
    canOpenURL(url: string): Promise<boolean>;
    getInitialURL(): Promise<string>;
    openURL(url: string): Promise<void>;
};
export default _default;
//# sourceMappingURL=ExpoLinking.web.d.ts.map