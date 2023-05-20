<script>
  import { currentAnschlag } from "../stores/store.js";

  let anschlag = {
    title: "test",
  };

  currentAnschlag.subscribe((value) => {
    anschlag = value;
  });
</script>

<h1>Test</h1>
{#if anschlag}
  {anschlag.title}
{/if}
