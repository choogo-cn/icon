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
export type DatabaseStarProps = typeof __propDef.props;
export type DatabaseStarEvents = typeof __propDef.events;
export type DatabaseStarSlots = typeof __propDef.slots;
export default class DatabaseStar extends SvelteComponentTyped<DatabaseStarProps, DatabaseStarEvents, DatabaseStarSlots> {
}
export {};
