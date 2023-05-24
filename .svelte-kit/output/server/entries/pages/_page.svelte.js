import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../chunks/index.js";
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "#ccc" } = $$props;
  let { class: cls = void 0 } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.class === void 0 && $$bindings.class && cls !== void 0)
    $$bindings.class(cls);
  return `<svg${add_attribute("stroke", color, 0)}${add_attribute("class", cls, 0)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">${slots.default ? slots.default({}) : ``}</svg>`;
});
const Pen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Root, "Root").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 6l7 7l-4 4"></path><path d="M5.828 18.172a2.828 2.828 0 0 0 4 0l10.586 -10.586a2 2 0 0 0 0 -2.829l-1.171 -1.171a2 2 0 0 0 -2.829 0l-10.586 10.586a2.828 2.828 0 0 0 0 4z"></path><path d="M4 20l1.768 -1.768"></path>`;
    }
  })}`;
});
const Pencil = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Root, "Root").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path><path d="M13.5 6.5l4 4"></path>`;
    }
  })}`;
});
const ArrowsShuffle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Root, "Root").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 4l3 3l-3 3"></path><path d="M18 20l3 -3l-3 -3"></path><path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5"></path><path d="M21 7h-5a4.978 4.978 0 0 0 -3 1m-4 8a4.984 4.984 0 0 1 -3 1h-3"></path>`;
    }
  })}`;
});
const PlayerPause = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Root, "Root").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path><path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path>`;
    }
  })}`;
});
const PlayerPlay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Root, "Root").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 4v16l13 -8z"></path>`;
    }
  })}`;
});
const PlayerSkipBack = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Root, "Root").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 5v14l-12 -7z"></path><path d="M4 5l0 14"></path>`;
    }
  })}`;
});
const PlayerSkipForward = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Root, "Root").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 5v14l12 -7z"></path><path d="M20 5l0 14"></path>`;
    }
  })}`;
});
const Playlist = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Root, "Root").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M17 17v-13h4"></path><path d="M13 5h-10"></path><path d="M3 9l10 0"></path><path d="M9 13h-6"></path>`;
    }
  })}`;
});
const Repeat = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Root, "Root").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"></path><path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"></path>`;
    }
  })}`;
});
const RepeatOnce = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Root, "Root").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"></path><path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"></path><path d="M11 11l1 -1v4"></path>`;
    }
  })}`;
});
const Alarm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Root, "Root").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M12 10l0 3l2 0"></path><path d="M7 4l-2.75 2"></path><path d="M17 4l2.75 2"></path>`;
    }
  })}`;
});
const Bulb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Root, "Root").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"></path><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"></path><path d="M9.7 17l4.6 0"></path>`;
    }
  })}`;
});
const Crown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Root, "Root").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z"></path>`;
    }
  })}`;
});
const Eraser = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Root, "Root").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M19 20h-10.5l-4.21 -4.3a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9.2 9.3"></path><path d="M18 13.3l-6.3 -6.3"></path>`;
    }
  })}`;
});
const ChevronRight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Root, "Root").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 6l6 6l-6 6"></path>`;
    }
  })}`;
});
const DatabaseStar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Root, "Root").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3"></path><path d="M4 6v6c0 1.43 2.67 2.627 6.243 2.927"></path><path d="M20 10.5v-4.5"></path><path d="M4 12v6c0 1.546 3.12 2.82 7.128 2.982"></path><path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z"></path>`;
    }
  })}`;
});
const Lock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Root, "Root").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"></path><path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path><path d="M8 11v-4a4 4 0 1 1 8 0v4"></path>`;
    }
  })}`;
});
const LockOpen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Root, "Root").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 11m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"></path><path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M8 11v-5a4 4 0 0 1 8 0"></path>`;
    }
  })}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".grid.svelte-oghrid{display:grid;gap:0.5rem;grid-template-columns:repeat(3, 1fr);align-items:center;justify-items:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="grid svelte-oghrid">${validate_component(Pen, "Pen").$$render($$result, { color: "red" }, {}, {})}
  ${validate_component(Pencil, "Pencil").$$render($$result, { color: "red" }, {}, {})}
  ${validate_component(ArrowsShuffle, "ArrowsShuffle").$$render($$result, { color: "red" }, {}, {})}
  ${validate_component(Repeat, "Repeat").$$render($$result, { color: "red" }, {}, {})}
  ${validate_component(RepeatOnce, "RepeatOnce").$$render($$result, { color: "red" }, {}, {})}
  ${validate_component(PlayerPause, "PlayerPause").$$render($$result, { color: "red" }, {}, {})}
  ${validate_component(PlayerPlay, "PlayerPlay").$$render($$result, { color: "red" }, {}, {})}
  ${validate_component(PlayerSkipBack, "PlayerSkipBack").$$render($$result, { color: "red" }, {}, {})}
  ${validate_component(PlayerSkipForward, "PlayerSkipForward").$$render($$result, { color: "red" }, {}, {})}
  ${validate_component(Playlist, "Playlist").$$render($$result, { color: "red" }, {}, {})}
  ${validate_component(Alarm, "Alarm").$$render($$result, { color: "red" }, {}, {})}
  ${validate_component(Bulb, "Blub").$$render($$result, { color: "red" }, {}, {})}
  ${validate_component(ChevronRight, "ChevronRight").$$render($$result, { color: "red" }, {}, {})}
  ${validate_component(Crown, "Crown").$$render($$result, { color: "red" }, {}, {})}
  ${validate_component(DatabaseStar, "DatabaseStar").$$render($$result, { color: "red" }, {}, {})}
  ${validate_component(Eraser, "Eraser").$$render($$result, { color: "red" }, {}, {})}
  ${validate_component(Lock, "Lock").$$render($$result, { color: "red" }, {}, {})}
  ${validate_component(LockOpen, "LockOpen").$$render($$result, { color: "red" }, {}, {})}
</section>`;
});
export {
  Page as default
};
