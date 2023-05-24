<script lang="ts">
  import type {ComponentProps} from 'svelte'
  import Root from './Root.svelte'
  interface $$Props extends ComponentProps<Root> {}
</script>

<Root {...$$props}>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 5v14l-12 -7z"/><path d="M4 5l0 14"/>
</Root>
