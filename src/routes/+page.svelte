<script lang="ts">
  import Avatar from '$lib/assets/avatar.svg';
  import SimpleIcon from '$lib/components/SimpleIcon.svelte';
  import TextButton from '$lib/components/TextButton.svelte';
  import { external } from '$lib/routes';
  import { siGithub, siReddit, siTelegram, siYcombinator } from 'simple-icons';
</script>

<h1>Marcin Wojnarowski</h1>

<div class="intro">
  <a href={external.avatarRepository} rel="external">
    <img src={Avatar} class="avatar" alt="shilangyu's avatar" />
  </a>

  <div class="socials">
    <TextButton href={external.git} external>
      <span class="social">
        <SimpleIcon data={siGithub} size={16} />
        shilangyu
      </span>
    </TextButton>
    <TextButton href={external.reddit} external>
      <span class="social">
        <SimpleIcon data={siReddit} size={16} />
        k4kshi
      </span>
    </TextButton>
    <TextButton href={external.hackerNews} external>
      <span class="social">
        <SimpleIcon data={siYcombinator} size={16} />
        shilangyu
      </span>
    </TextButton>
    <TextButton href={external.telegram} external>
      <span class="social">
        <SimpleIcon data={siTelegram} size={16} />
        shilangyu
      </span>
    </TextButton>
  </div>
</div>

<p>
  My name is <b title="/ˈmar.t͡ɕin/">Marcin</b> and I enjoy computer science and mathematics. My current
  interests are around programming languages and compilers.
</p>

<style>
  .avatar {
    width: 100px;
    height: 100px;
  }

  .intro {
    display: flex;
    gap: 12px;
  }

  .social {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .socials {
    display: flex;
    flex-direction: column;
  }
</style>
