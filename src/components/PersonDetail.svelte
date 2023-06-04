<script>
  import { orderedAnschlaege, currentUser } from "../stores/personstore.js";
  import AnschlagCard from "./AnschlagCard.svelte";

  function isIn(params, test) {
    console.log("vulgo: " + test.vulgo);
    const programIds = $currentUser.programs.map(
      (program) => program.anschlagId
    );
    const isIdInPrograms = programIds.includes(params._id);
    console.log(isIdInPrograms);
    return isIdInPrograms;
  }
</script>

{#if $currentUser != null}
  <h4>
    Anweseinheit von {$currentUser.vulgo} bei der Stufe {$currentUser.stufe}
  </h4>

  {#if $orderedAnschlaege != null}
    {#each $orderedAnschlaege as stufenAnschlaege}
      {#if stufenAnschlaege.title == $currentUser.stufe}
        <h1>{stufenAnschlaege.title}</h1>
        {#each stufenAnschlaege.years as anschlaegePerYear}
          <div>
            <h1>{anschlaegePerYear.year}</h1>
          </div>
          {#each anschlaegePerYear.documents as anschlag}
            <AnschlagCard {anschlag} isIn={isIn(anschlag, $currentUser)} />
          {/each}
        {/each}
      {/if}
    {/each}
  {/if}
{/if}
