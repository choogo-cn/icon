<script lang="ts">
  import type {HTMLAttributes, AriaAttributes} from 'svelte/elements'
  export let color: string | undefined = undefined
  export let width = 24
  export let height = width

  let cls: HTMLAttributes<SVGAElement>['class'] = undefined

  export {cls as class}
</script>

<svg
  style:stroke={color}
  class={cls}
  width={width}
  height={height}
  viewBox="0 0 24 24"
  stroke-width="2"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
  {...$$restProps}
><slot/></svg>
