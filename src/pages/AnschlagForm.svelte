<script>
  import { api } from "../services/api.js";

  let anschlag = {
    title: null,
    introducing: null,
    name: null,
    date: null,
    endPlace: null,
    finalWord: null,
    startTime: null,
    startPlace: null,
    endTime: null,
    endPlace: null,
    itemsToBring: null,
  };

  function save() {
    api.saveAnschlag(anschlag).then(() => {
      window.location.href = "#/";
    });
  }
</script>

<h1>Formular</h1>

<input type="text" placeholder="Stufe" bind:value={anschlag.title} />
<input type="text" placeholder="Ceviname" bind:value={anschlag.name} />
<input type="date" bind:value={anschlag.date} />
<input type="text" placeholder="Begrüssung" bind:value={anschlag.introducing} />
<input
  type="text"
  placeholder="Besammeln, Ort"
  bind:value={anschlag.startPlace}
/>
<input
  type="text"
  placeholder="Besammeln, Zeit"
  bind:value={anschlag.startTime}
/>
<input type="text" placeholder="Schluss, Ort" bind:value={anschlag.endPlace} />
<input type="text" placeholder="Schluss, Zeit" bind:value={anschlag.endTime} />
<input
  type="text"
  placeholder="Mitbringen"
  bind:value={anschlag.itemsToBring}
/>
<input type="text" placeholder="Schlusswort" bind:value={anschlag.finalWord} />

<button on:click|once={save}>Anschlag speichern!</button>
