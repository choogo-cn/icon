<script lang="ts">
  import type {ComponentProps} from 'svelte'
  import Root from './Root.svelte'
  interface $$Props extends ComponentProps<Root> {}
  export let target: HTMLElement | SVGElement | null = null
</script>

<Root {...$$props} bind:target={target}>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M17 17v-13h4"/><path d="M13 5h-10"/><path d="M3 9l10 0"/><path d="M9 13h-6"/>
</Root>
