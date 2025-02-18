import { component$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const state = useStore({
    count: 0,
  });
  return (
    <>
      <h1>{$localize`カウンターサンプル`}</h1>
      <div>{$localize`count: ${state.count}`}</div>
      <button
        onClick$={async () => state.count++}
      >{$localize`インクリメント`}</button>
    </>
  );
});

export const head: DocumentHead = () => {
  return {
    title: $localize`Counter Example`,
    meta: [
      {
        name: "description",
        content: "Qwik site description",
      },
    ],
  };
};
