<script lang="ts">
  import type {ComponentProps} from 'svelte'
  import Root from './Root.svelte'
  export let target: HTMLElement | SVGElement | null = null
  interface $$Props extends ComponentProps<Root> {}
</script>

<Root {...$$props} bind:target={target}>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z"/>
</Root>
