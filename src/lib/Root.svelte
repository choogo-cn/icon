<script lang="ts">
  import type {HTMLAttributes, AriaAttributes, DOMAttributes} from 'svelte/elements'
  export let color: string | undefined = undefined
  export let width = 24
  export let height = width
  export let target: HTMLElement | SVGElement | null = null
  export let onClick: DOMAttributes<EventTarget>['on:click'] | null = null
  export let onKeydown: DOMAttributes<EventTarget>['on:keydown'] | null = null

  let cls: HTMLAttributes<SVGAElement>['class'] = undefined

  export {cls as class}
</script>


{#if onClick}
<svg
  bind:this={target}
  style:stroke={color}
  class={cls}
  width={width}
  height={height}
  viewBox="0 0 24 24"
  stroke-width="2"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
  on:click={onClick}
  on:keydown={onKeydown}
  role="button"
  aria-pressed="false"
  tabindex="0"
  {...$$restProps}
><slot/></svg>
{:else}
<svg
  bind:this={target}
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
{/if}
