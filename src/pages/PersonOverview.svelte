<script>
  import { personsArray } from "../stores/store.js";
  import { api } from "../services/api.js";

  api.getPersons();

  let persons = [];

  personsArray.subscribe((value) => {
    persons = value;
  });

  function choose(params) {
    //currentAnschlag.set(anschlaege.find((item) => item._id === params));
  }
</script>

<h1>Personen</h1>

{#each persons as person}
  <p>{person.firstname}</p>
{/each}
