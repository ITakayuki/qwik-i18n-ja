import { $localize } from "@angular/localize/init";
import { loadTranslations } from "@angular/localize";

declare const window: { $localize: any };
declare const global: { $localize: any };
const _global = typeof window === "undefined" ? global : window;

_global.$localize = $localize;
loadTranslations({
  "4724965986411579086": "Ahoj svet",
  "8399228546444251220": "Počítadlovy Príklad",
  "8283901338703124090": "počítadlo:",
  "2954233255021387859": "pridať",
});
