<script lang="ts">
  import type {ComponentProps} from 'svelte'
  import Root from './Root.svelte'
  interface $$Props extends ComponentProps<Root> {}
  export let target: HTMLElement | SVGElement | null = null
</script>

<Root {...$$props} bind:target={target}>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M12 10l0 3l2 0"/><path d="M7 4l-2.75 2"/><path d="M17 4l2.75 2"/>
</Root>
