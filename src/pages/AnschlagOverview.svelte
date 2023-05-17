<script>
  import axios from "axios";

  let anschlaege = [];

  function choose(params) {
    alert(params);
  }

  axios
    .get(
      "https://4ecb53c6.eu-gb.apigw.appdomain.cloud/anschlagskasten-test/anschlaege"
    )
    .then((response) => {
      console.log(response.data.entries);
      anschlaege = response.data.entries;
    })
    .catch((error) => {
      console.error(error);
    });
</script>

<div id="wrapper">
  <div id="sidebar">
    {#each anschlaege as anschlag}
      <div class="sidebarElement" on:click={() => choose(anschlag._id)}>
        {anschlag.title}
      </div>
    {/each}
  </div>
  <div id="details">
    <h1>Content</h1>
  </div>
</div>

<style>
  #wrapper {
    display: flex;
    flex-direction: row;
    height: 100%;
  }

  #sidebar {
    border-right: solid black 2px;
    width: 200px;
    height: 100%;
    overflow-y: scroll;
  }

  #details {
    height: 100%;
  }

  @media (max-width: 480px) {
    #wrapper {
      display: flex;
      flex-direction: column;
    }

    #sidebar {
      border-right: none;
      border-bottom: solid black 2px;
      width: auto;
      height: flex;
      overflow-y: hidden;
      display: flex;
      flex-direction: column;
    }

    #details {
      min-height: 100px;
    }
  }
</style>
