<script>
  import { api } from "../services/api.js";

  let anschlag = {
    title: "Hallo",
    introducing: "test",
    date: null,
  };

  function save() {
    api.saveAnschlag(anschlag);
  }
</script>

<h1>Formular</h1>

<form class="content" on:submit|once={save}>
  <label>Nome</label>
  <input type="text" bind:value={anschlag.title} />
  <label>E-mail</label>
  <input type="text" bind:value={anschlag.introducing} />
  <label>Date</label>
  <input type="date" bind:value={anschlag.date} />
  <button type="submit">Speichern</button>
</form>

{JSON.stringify(anschlag, 0, 2)}
