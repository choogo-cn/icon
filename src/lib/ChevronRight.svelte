<script lang="ts">
  import type {ComponentProps} from 'svelte'
  import Root from './Root.svelte'
  interface $$Props extends ComponentProps<Root> {}
  export let target: HTMLElement | SVGElement | null = null
</script>

<Root {...$$props} bind:target={target}>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6"/>
</Root>
