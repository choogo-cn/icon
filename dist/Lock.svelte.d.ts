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
export type LockProps = typeof __propDef.props;
export type LockEvents = typeof __propDef.events;
export type LockSlots = typeof __propDef.slots;
export default class Lock extends SvelteComponentTyped<LockProps, LockEvents, LockSlots> {
}
export {};
