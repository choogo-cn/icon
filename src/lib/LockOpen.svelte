<script lang="ts">
  import type {ComponentProps} from 'svelte'
  import Root from './Root.svelte'
  interface $$Props extends ComponentProps<Root> {}
  export let target: HTMLElement | SVGElement | null = null
</script>

<Root {...$$props} bind:target={target}>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 11m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"/><path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M8 11v-5a4 4 0 0 1 8 0"/>
</Root>
