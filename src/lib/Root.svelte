<script lang="ts">
  import type {HTMLAttributes} from 'svelte/elements'
  export let color: string | undefined = undefined
  export let onClick: (() => void) | undefined = undefined
  export let width = 24
  export let height = width
  export let ref: HTMLOrSVGElement | undefined = undefined

  let cls: HTMLAttributes<SVGAElement>['class'] = undefined
  export {cls as class}
</script>

<svg
  bind:this={ref}
  on:click={onClick}
  on:keydown={onClick}
  role="button"
  tabindex={0}
  style:stroke={color}
  class={cls}
  width={width}
  height={height}
  viewBox="0 0 24 24"
  stroke-width="2"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
><slot/></svg>
