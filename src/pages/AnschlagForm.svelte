<script>
  import { api } from "../services/api.js";
  import { common } from "../services/common.js";
  import { currentAnschlag } from "../stores/anschlagstore.js";
  import { stufen } from "../stores/configstore.js";
  import { accessToken } from "../stores/userstore.js";
  import { onMount } from "svelte";

  let anschlag = {
    _id: null,
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
    updateToken: null,
    createDate: null,
  };

  let newAnschlag;

  onMount(async () => {
    const currentUrl = window.location.hash;

    if (currentUrl === "#/anschlagupdate" && $currentAnschlag) {
      newAnschlag = false;
      anschlag = $currentAnschlag;
      anschlag.updateToken = common.getCookie(anschlag._id);
    } else if (currentUrl === "#/anschlagform") {
      anschlag.updateToken = Math.floor(Math.random() * 1000);
      newAnschlag = true;
    } else {
      newAnschlag = true;
    }
  });

  function save() {
    if (newAnschlag) {
      let currentDate = new Date();

      let year = currentDate.getFullYear();
      let month = String(currentDate.getMonth() + 1).padStart(2, "0");
      let day = String(currentDate.getDate()).padStart(2, "0");

      anschlag.createDate = `${year}-${month}-${day}`;
      api.saveAnschlag(anschlag, $accessToken).then(() => {
        window.location.href = "#/";
      });
    } else {
      api
        .updateAnschlag(anschlag)
        .then(() => {
          window.location.href = "#/";
        })
        .catch(() => {
          alert("Falscher Update Pin");
        });
    }
  }
</script>

<div class="contentWrapper">
  {#if newAnschlag}
    <h1>Anschlag erstellen</h1>
  {:else}
    <h1>Anschlag editieren</h1>
  {/if}

  <table>
    <tr>
      <td>Edit Pin:</td>
      <td
        ><input
          type="text"
          placeholder="Edit Pin"
          bind:value={anschlag.updateToken}
        /></td
      >
    </tr>
    <tr>
      <td>Stufe:</td>
      <td
        ><select bind:value={anschlag.title}>
          {#each $stufen as stufe}
            <option value={stufe.name}>
              {stufe.name}
            </option>
          {/each}
        </select></td
      ></tr
    >
    <tr>
      <td>Ceviname:</td><td
        ><input
          type="text"
          placeholder="Ceviname"
          bind:value={anschlag.name}
        /></td
      ></tr
    >
    <tr
      ><td>Datum:</td><td><input type="date" bind:value={anschlag.date} /></td
      ></tr
    ><tr
      ><td>Begrüssung:</td><td
        ><input
          type="text"
          placeholder="Begrüssung"
          bind:value={anschlag.introducing}
        /></td
      ></tr
    >
    <tr
      ><td>Besammeln, Ort</td><td
        ><input
          type="text"
          placeholder="Besammeln, Ort"
          bind:value={anschlag.startPlace}
        /></td
      ></tr
    >
    <tr
      ><td>Besammeln, Zeit</td><td
        ><input
          type="text"
          placeholder="Besammeln, Zeit"
          bind:value={anschlag.startTime}
        /></td
      ></tr
    >
    <tr
      ><td>Schluss, Ort</td><td
        ><input
          type="text"
          placeholder="Schluss, Ort"
          bind:value={anschlag.endPlace}
        /></td
      ></tr
    >
    <tr
      ><td>Schluss, Zeit</td><td
        ><input
          type="text"
          placeholder="Schluss, Zeit"
          bind:value={anschlag.endTime}
        /></td
      ></tr
    >
    <tr
      ><td>Mitbringen</td><td
        ><input
          type="text"
          placeholder="Mitbringen"
          bind:value={anschlag.itemsToBring}
        /></td
      ></tr
    >
    <tr
      ><td>Schlusswort</td><td
        ><input
          type="text"
          placeholder="Schlusswort"
          bind:value={anschlag.finalWord}
        /></td
      ></tr
    >
    <tr
      ><td /><td
        ><button on:click={save} id="submitButton">Anschlag speichern!</button
        ></td
      ></tr
    >
  </table>
</div>

<style>
  @media only screen and (max-width: 768px) {
    td:first-child {
      display: none;
    }
  }
</style>
