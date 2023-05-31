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

  html,
  body {
    height: 100%;
    margin: 0;
  }

  #container {
    border: solid black 2px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  #navbar {
    flex: 0 0 auto; /* Let the navbar size itself based on content */
    min-height: 60px;
    border-bottom: black solid 2px;
  }

  #content {
    flex: 1 1 auto; /* Allow the content to grow and shrink as needed */
    overflow-y: auto; /* Enable vertical scrolling when necessary */
  }
</style>
