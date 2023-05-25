<script lang="ts">
  import type {ComponentProps} from 'svelte'
  import Root from './Root.svelte'
  interface $$Props extends ComponentProps<Root> {}
</script>

<Root {...$$props}>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M12 5l0 14"></path>
  <path d="M5 12l14 0"></path>
</Root>
