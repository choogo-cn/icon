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
export type BulbProps = typeof __propDef.props;
export type BulbEvents = typeof __propDef.events;
export type BulbSlots = typeof __propDef.slots;
export default class Bulb extends SvelteComponentTyped<BulbProps, BulbEvents, BulbSlots> {
}
export {};
