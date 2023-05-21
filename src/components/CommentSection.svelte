<script>
  import { comment } from "svelte/internal";
  import { currentAnschlag } from "../stores/store.js";
  import { api } from "../services/api.js";

  let anschlag = {
    _id: null,
    title: null,
    comments: [
      {
        name: null,
        text: null,
        timestamp: null,
      },
    ],
  };

  let newComment = {
    text: null,
    name: null,
  };

  currentAnschlag.subscribe((value) => {
    anschlag = value || anschlag;
  });

  function save() {
    anschlag.comments.push(newComment);
    api.saveComment(anschlag);
    console.log(anschlag);
    anschlag = { ...anschlag };
  }
</script>

{#if anschlag.comments != null}
  {#each anschlag.comments as comment}
    <div>{comment.text}{comment.name}</div>
  {/each}
{/if}

<input type="text" placeholder="Text" bind:value={newComment.text} />

<button on:click={save}>Kommentar speichern</button>

{JSON.stringify(newComment, null, 2)}

{JSON.stringify(anschlag, null, 2)}
