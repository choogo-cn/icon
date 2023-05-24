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
export type RepeatOnceProps = typeof __propDef.props;
export type RepeatOnceEvents = typeof __propDef.events;
export type RepeatOnceSlots = typeof __propDef.slots;
export default class RepeatOnce extends SvelteComponentTyped<RepeatOnceProps, RepeatOnceEvents, RepeatOnceSlots> {
}
export {};
