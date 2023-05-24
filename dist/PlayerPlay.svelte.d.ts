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
export type PlayerPlayProps = typeof __propDef.props;
export type PlayerPlayEvents = typeof __propDef.events;
export type PlayerPlaySlots = typeof __propDef.slots;
export default class PlayerPlay extends SvelteComponentTyped<PlayerPlayProps, PlayerPlayEvents, PlayerPlaySlots> {
}
export {};
