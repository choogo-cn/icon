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
export type PlayerSkipForwardProps = typeof __propDef.props;
export type PlayerSkipForwardEvents = typeof __propDef.events;
export type PlayerSkipForwardSlots = typeof __propDef.slots;
export default class PlayerSkipForward extends SvelteComponentTyped<PlayerSkipForwardProps, PlayerSkipForwardEvents, PlayerSkipForwardSlots> {
}
export {};
