<script lang="ts">
  import type { SimpleIcon } from 'simple-icons';

  interface Props {
    data: SimpleIcon;
    size?: string | number;
  }

  let { data, size = 24 }: Props = $props();
</script>

<svg
  role="img"
  viewBox="0 0 24 24"
  width={size}
  height={size}
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
>
  <title>{data.title}</title>
  <path d={data.path}></path>
</svg>
