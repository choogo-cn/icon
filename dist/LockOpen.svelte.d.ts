import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        color?: string | undefined;
        class?: string | null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type LockOpenProps = typeof __propDef.props;
export type LockOpenEvents = typeof __propDef.events;
export type LockOpenSlots = typeof __propDef.slots;
export default class LockOpen extends SvelteComponentTyped<LockOpenProps, LockOpenEvents, LockOpenSlots> {
}
export {};
