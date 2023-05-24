<script lang="ts">
  import type {HTMLAttributes} from 'svelte/elements'
  export let color = '#ccc'
  let cls: HTMLAttributes<SVGAElement>['class'] = undefined
  export {cls as class}
  export let onClick: (() => void) | undefined = undefined
  export let width = 24
  export let height = width
</script>

<svg
  on:click={onClick}
  stroke={color}
  class={cls}
  width={width}
  height={height}
  viewBox="0 0 24 24"
  stroke-width="2"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
><slot/></svg>
