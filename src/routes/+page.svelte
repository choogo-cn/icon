<script lang="ts">
  import {
    Pen, Pencil, ArrowsShuffle, Repeat,
    RepeatOnce, PlayerPause, PlayerPlay,
    PlayerSkipBack, PlayerSkipForward, Playlist,
    Alarm, Blub, ChevronRight, Crown, DatabaseStar, Eraser,
    Lock, LockOpen
  } from '$lib'
</script>

<section class="grid">
  <Pen color="red"/>
  <Pencil color="red"/>
  <ArrowsShuffle color="red"/>
  <Repeat color="red"/>
  <RepeatOnce color="red"/>
  <PlayerPause color="red"/>
  <PlayerPlay color="red"/>
  <PlayerSkipBack color="red"/>
  <PlayerSkipForward color="red"/>
  <Playlist color="red"/>
  <Alarm color="red"/>
  <Blub color="red"/>
  <ChevronRight color="red"/>
  <Crown color="red"/>
  <DatabaseStar color="red"/>
  <Eraser color="red"/>
  <Lock color="red"/>
  <LockOpen color="red"/>
</section>

<style lang="scss">
  .grid {
    display: grid;
    gap: .5rem;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
  }
</style>
