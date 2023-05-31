<script>
  import { currentAnschlag } from "../stores/store.js";
  import { api } from "../services/api.js";

  let newComment = {
    text: null,
    name: null,
    timestamp: null,
  };

  function save() {
    newComment.timestamp = Date.now();
    if (newComment.name && newComment.text && newComment.timestamp) {
      $currentAnschlag.comments.push({ ...newComment });
      $currentAnschlag = { ...$currentAnschlag };
      api.saveComment($currentAnschlag._id, newComment).then(() => {
        newComment.name = null;
        newComment.text = null;
        newComment.timestamp = null;
      });
    } else {
      alert("Bitte alle Felder ausfüllern");
    }
  }
</script>

{#if $currentAnschlag.comments != null}
  {#each $currentAnschlag.comments as comment}
    <div>{comment.text}{comment.name}</div>
  {/each}
{/if}

<input type="text" placeholder="Text" bind:value={newComment.text} />

<input type="text" placeholder="Name" bind:value={newComment.name} />

<button on:click={save}>Kommentar speichern</button>
