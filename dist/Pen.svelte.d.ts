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
export type PenProps = typeof __propDef.props;
export type PenEvents = typeof __propDef.events;
export type PenSlots = typeof __propDef.slots;
export default class Pen extends SvelteComponentTyped<PenProps, PenEvents, PenSlots> {
}
export {};
