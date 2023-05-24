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
export type PlaylistProps = typeof __propDef.props;
export type PlaylistEvents = typeof __propDef.events;
export type PlaylistSlots = typeof __propDef.slots;
export default class Playlist extends SvelteComponentTyped<PlaylistProps, PlaylistEvents, PlaylistSlots> {
}
export {};
