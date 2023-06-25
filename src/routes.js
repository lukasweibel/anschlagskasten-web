import AnschlagOverview from "./pages/AnschlagOverview.svelte";
import AnschlagForm from "./pages/AnschlagForm.svelte";
import PersonOverview from "./pages/PersonOverview.svelte";

export default {
    '/': AnschlagOverview,
    '/anschlagform': AnschlagForm,
    '/persons': PersonOverview,
    '/anschlagupdate': AnschlagForm
}