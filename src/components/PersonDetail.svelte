<script>
  import { allAnschlaege } from "../stores/personstore.js";

  let anschlaege = [];

  allAnschlaege.subscribe((value) => {
    anschlaege = value;
  });
</script>

<h1>Anschlaege</h1>

{#each actualAnschlaege as anschlag}
  <h1>{anschlag.title}</h1>
{/each}
