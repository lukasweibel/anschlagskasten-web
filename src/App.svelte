<script>
  import Router from "svelte-spa-router";
  import routes from "./routes";
  import { api } from "./services/api.js";
  import { onMount } from "svelte";

  onMount(async () => {
    api.getAnschlaege();
  });
</script>

<head>
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
    crossorigin="anonymous"
  ></script>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossorigin="anonymous"
  />
</head>

<div id="container">
  <nav class="navbar navbar-expand-lg navbar-light">
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" href="#/"
          ><img src="cevilogo.png" alt="background image" height="60px" /></a
        >
        <a class="nav-item nav-link" href="#/anschlagform">Anschlag erstellen</a
        >
        <a class="nav-item nav-link" href="#/persons">Personen</a>
      </div>
    </div>
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

  .navbar {
    flex: 0 0 auto; /* Let the navbar size itself based on content */
    min-height: 60px;
    border-bottom: black solid 2px;
    background-color: rgb(166, 40, 52);
  }

  a {
    color: black;
    font-size: 36px;
    margin-left: 10px;
    margin-right: 10px;
  }

  #content {
    flex: 1 1 auto; /* Allow the content to grow and shrink as needed */
    overflow-y: auto; /* Enable vertical scrolling when necessary */
  }
</style>
