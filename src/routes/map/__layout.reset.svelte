<script>
</script>

<nav>
  <div class="grid grid-cols-5 text-xs md:text-base bg-pct px-2 py-2 ">
    <div>
      <a
        href="/"
        class=" px-3 py-2 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75"
      >
        RD24</a
      >
    </div>
    <div>
      <a
        href="/roadbook"
        class=" px-3 py-2 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75"
      >
        Roadbook
      </a>
    </div>
    <div>
      <a
        href="/parcours"
        class=" px-3 py-2 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75"
      >
        Parcours
      </a>
    </div>
    <div>
      <a
        href="/map"
        class=" px-3 py-2 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75"
      >
        Carte
      </a>
    </div>
  </div>
</nav>
<div class="px-2 py-2">
  <div class="flex mb-2 text-gray-500 font-bold">
    <slot />
  </div>
</div>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
