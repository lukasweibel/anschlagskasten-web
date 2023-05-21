<script>
  import { comment } from "svelte/internal";
  import { currentAnschlag } from "../stores/store.js";
  import { api } from "../services/api.js";

  let anschlag = {
    _id: null,
    title: null,
    comments: [],
  };

  let newComment = {
    text: null,
    name: null,
    timestamp: null,
  };

  currentAnschlag.subscribe((value) => {
    anschlag = value || anschlag;
  });

  function save() {
    newComment.timestamp = Date.now();
    if (newComment.name && newComment.text && newComment.timestamp) {
      anschlag.comments.push({ ...newComment });
      anschlag = { ...anschlag };
      api.saveComment(anschlag._id, newComment).then(() => {
        newComment.name = null;
        newComment.text = null;
        newComment.timestamp = null;
      });
    } else {
      alert("Bitte alle Felder ausfüllern");
    }
  }
</script>

{#if anschlag.comments != null}
  {#each anschlag.comments as comment}
    <div>{comment.text}{comment.name}</div>
  {/each}
{/if}

<input type="text" placeholder="Text" bind:value={newComment.text} />

<input type="text" placeholder="Name" bind:value={newComment.name} />

<button on:click={save}>Kommentar speichern</button>
