import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => (
  <div>
    <p>{$localize`ようこそブログへ!`}</p>
    <Link
      href={$localize`/__/blog/${"hello-world"}/`}
    >{$localize`ハローワールド`}</Link>
  </div>
));
