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
export type ArrowsShuffleProps = typeof __propDef.props;
export type ArrowsShuffleEvents = typeof __propDef.events;
export type ArrowsShuffleSlots = typeof __propDef.slots;
export default class ArrowsShuffle extends SvelteComponentTyped<ArrowsShuffleProps, ArrowsShuffleEvents, ArrowsShuffleSlots> {
}
export {};
