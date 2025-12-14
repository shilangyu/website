<script lang="ts">
  import Avatar from '$lib/assets/avatar.svg';
  import SimpleIcon from '$lib/components/SimpleIcon.svelte';
  import TextButton from '$lib/components/TextButton.svelte';
  import { external, routes } from '$lib/routes';
  import { siGithub, siGmail, siReddit, siTelegram, siYcombinator } from 'simple-icons';
</script>

<svelte:head>
  <title>shilangyu</title>
</svelte:head>

<h1>Marcin Wojnarowski</h1>

<div class="intro">
  <a href={external.avatarRepository} rel="external">
    <img src={Avatar} class="avatar" alt="shilangyu's avatar" />
  </a>

  <div class="socials">
    <TextButton href={external.git} external>
      <span class="social">
        <SimpleIcon data={siGithub} size="1em" />
        shilangyu
      </span>
    </TextButton>
    <TextButton href={external.reddit} external>
      <span class="social">
        <SimpleIcon data={siReddit} size="1em" />
        k4kshi
      </span>
    </TextButton>
    <TextButton href={external.hackerNews} external>
      <span class="social">
        <SimpleIcon data={siYcombinator} size="1em" />
        shilangyu
      </span>
    </TextButton>
    <TextButton href={external.telegram} external>
      <span class="social">
        <SimpleIcon data={siTelegram} size="1em" />
        shilangyu
      </span>
    </TextButton>
    <TextButton href={external.email} external>
      <span class="social">
        <SimpleIcon data={siGmail} size="1em" />
        xmarcinmarcin
      </span>
    </TextButton>
  </div>
</div>

<p>
  My name is <strong title="/ˈmar.t͡ɕin/">Marcin</strong> and I enjoy computer science and mathematics.
  My current interests are around programming languages, compilers, and more recently formal methods.
  I am always open to hearing about collaboration opportunities.
</p>

<p>
  I am from Warsaw, Poland. It is where I completed my bachelor's at University of Technology.
  Currently I live in Lausanne, Switzerland where I am doing my master's at EPFL in computer science
  theory.
</p>

<p>
  Feel free to explore my <a href={routes.blog.self()}>blog</a> and
  <a href={routes.projects}>projects</a>.
</p>

<style>
  .intro {
    display: flex;
    gap: 12px;
  }

  .avatar {
    width: 130px;
    height: 130px;
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
