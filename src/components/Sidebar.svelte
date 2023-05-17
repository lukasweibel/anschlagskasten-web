<script>
  let anschlaege = [
    {
      id: 0,
      name: "Superbike",
    },
    {
      id: 1,
      name: "Ultrabike",
    },
  ];

  function choose(params) {
    alert();
  }
</script>

<h1>Sidebar</h1>

{#each anschlaege as anschlag}
  <p on:click={choose}>{anschlag.name}</p>
{/each}

<style>
  h1 {
    margin: 0;
  }
</style>
