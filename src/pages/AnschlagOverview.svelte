<script>
  import { anschlaegeArray } from "../stores/anschlagStore.js";
  import { api } from "../services/api.js";

  let anschlaege = [];

  anschlaegeArray.subscribe((value) => {
    anschlaege = value;
  });

  function choose(params) {
    alert(params);
  }
</script>

<div id="content">
  <div id="sidebar" class="col-3 col-s-12">
    {#each anschlaege as anschlag}
      <div class="sidebarElement" on:click={() => choose(anschlag._id)}>
        {anschlag.title}
      </div>
    {/each}
  </div>
  <div id="details" class="col-9 col-s-12">
    <h1>Content</h1>
  </div>
</div>

<style>
  * {
    box-sizing: border-box;
  }

  #content {
    display: flex;
    height: 100%;
  }

  #sidebar {
    border-right: solid black 2px;
    overflow-y: scroll;
    flex-direction: column;
    flex: 1;
  }

  #details {
  }

  @media only screen and (max-width: 768px) {
    /* For tablets: */
    .col-s-1 {
      width: 8.33%;
    }
    .col-s-2 {
      width: 16.66%;
    }
    .col-s-3 {
      width: 25%;
    }
    .col-s-4 {
      width: 33.33%;
    }
    .col-s-5 {
      width: 41.66%;
    }
    .col-s-6 {
      width: 50%;
    }
    .col-s-7 {
      width: 58.33%;
    }
    .col-s-8 {
      width: 66.66%;
    }
    .col-s-9 {
      width: 75%;
    }
    .col-s-10 {
      width: 83.33%;
    }
    .col-s-11 {
      width: 91.66%;
    }
    .col-s-12 {
      width: 100%;
    }

    #sidebar {
      border-bottom: solid black 2px;
      border-right: none;
      overflow-y: scroll;
    }
    #content {
      display: block;
    }
  }

  @media only screen and (min-width: 768px) {
    /* For desktop: */
    .col-1 {
      width: 8.33%;
    }
    .col-2 {
      width: 16.66%;
    }
    .col-3 {
      width: 25%;
    }
    .col-4 {
      width: 33.33%;
    }
    .col-5 {
      width: 41.66%;
    }
    .col-6 {
      width: 50%;
    }
    .col-7 {
      width: 58.33%;
    }
    .col-8 {
      width: 66.66%;
    }
    .col-9 {
      width: 75%;
    }
    .col-10 {
      width: 83.33%;
    }
    .col-11 {
      width: 91.66%;
    }
    .col-12 {
      width: 100%;
    }

    #sidebar {
      border-right: solid black 2px;
      overflow-y: scroll;
    }
  }
</style>
