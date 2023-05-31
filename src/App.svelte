<script>
  import Router from "svelte-spa-router";
  import routes from "./routes";
  import { api } from "./services/api.js";

  api.getAnschlaege();
</script>

<div id="container">
  <nav id="navbar">
    <a href="#/">Home</a>
    <a href="#/anschlagform">Anschlag erstellen</a>
    <a href="#/persons">Personen</a>
  </nav>

  <div id="content">
    <Router {routes} />
  </div>
</div>

<style>
  * {
    box-sizing: border-box;
  }

  @media only screen and (min-width: 768px) {
    #container {
      border: solid black 2px;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  }
  @media only screen and (max-width: 768px) {
    #container {
      border: solid black 2px;
      height: auto;
      display: flex;
      flex-direction: column;
    }
  }

  #navbar {
    width: 100%;
    height: 80px;
    border-bottom: black solid 2px;
  }

  #content {
    height: 100%;
  }
</style>
