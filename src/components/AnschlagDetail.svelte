<script>
  import { currentAnschlag } from "../stores/store.js";
</script>

<h1>Test</h1>
{#if $currentAnschlag}
  {$currentAnschlag.title}
{/if}
