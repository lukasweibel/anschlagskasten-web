<script>
  import { activeAnschlaege } from "../stores/store.js";
  import { personsArray } from "../stores/personstore.js";
  import { api } from "../services/api.js";
  import PersonDetail from "../components/PersonDetail.svelte";

  api.getPersons();

  let stufen = [];

  let anschlaege = [];

  let actualAnschlaege = [];

  personsArray.subscribe((value) => {
    stufen = value;
  });

  activeAnschlaege.subscribe((value) => {
    anschlaege = value;
  });

  function choose(params) {
    actualAnschlaege = [...[]];
    for (let param of params) {
      let anschlag = anschlaege.find((item) => item._id === param.anschlagId);
      actualAnschlaege = [...[], anschlag];
      console.log(actualAnschlaege);
    }
  }
</script>

<h1>Personen</h1>

{#each stufen as stufe}
  <h1>{stufe._id}</h1>
  {#each stufe.people as person}
    <p on:click={() => choose(person.programs)}>{person.vulgo}</p>
  {/each}
{/each}

<PersonDetail />
