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
export type PlayerPauseProps = typeof __propDef.props;
export type PlayerPauseEvents = typeof __propDef.events;
export type PlayerPauseSlots = typeof __propDef.slots;
export default class PlayerPause extends SvelteComponentTyped<PlayerPauseProps, PlayerPauseEvents, PlayerPauseSlots> {
}
export {};
