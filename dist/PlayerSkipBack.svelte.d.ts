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
export type PlayerSkipBackProps = typeof __propDef.props;
export type PlayerSkipBackEvents = typeof __propDef.events;
export type PlayerSkipBackSlots = typeof __propDef.slots;
export default class PlayerSkipBack extends SvelteComponentTyped<PlayerSkipBackProps, PlayerSkipBackEvents, PlayerSkipBackSlots> {
}
export {};
