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
  </nav>

  <div id="content">
    <Router {routes} />
  </div>
</div>

<style>
  * {
    box-sizing: border-box;
  }

  #container {
    border: solid black 2px;
    height: 100%;
    display: flex;
    flex-direction: column;
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
