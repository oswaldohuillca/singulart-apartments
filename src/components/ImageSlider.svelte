<script lang="ts">
  import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide";
  const images = [
    {
      src: "/rooms/room-1.avif",
      title: "Sala / comedor"
    },
    {
      src: "/rooms/room-2.avif",
      title: "Sala / comedor"
    },
    {
      src: "/rooms/room-3.avif",
      title: "Sala / comedor"
    },
    {
      src: "/rooms/room-4.avif",
      title: "Sala / comedor"
    },
    {
      src: "/rooms/room-5.avif",
      title: "Sala / comedor"
    }
  ]
</script>

<section class="py-32 relative">

  <slot />

  <Splide
    aria-label="My Favorite Images"
    hasTrack={false}
    options={{
      type: "loop",
      padding: "20%",
      // gap: "5rem",
      updateOnMove: true,
      perMove: 1,
      perPage: 1,
      omitEnd: true,
      waitForTransition: true,
      dragMinThreshold: 10,
      // easing: "cubic-bezier(0, 0.14, 1, 0.65)",
      speed: 2500,
      autoplay: true,
      pagination:false
    }}
    on:mounted={(e) => console.log(e.detail.splide.length)}
  >
    <SplideTrack>
      {#each images as { src, title }, i}
        <SplideSlide>
          <figure>
            <img
              src={src}
              alt={title}
              class="w-full"
              width="1374"
              height="828"
            />

            <figcaption>
              <h3>{title}</h3>
            </figcaption>
          </figure>
        </SplideSlide>
      {/each}
    </SplideTrack>

    <div class="splide__arrows">
      <button class="splide__arrow splide__arrow--prev">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <g fill="none">
            <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
            <path fill="currentColor" d="m14.707 5.636l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l3.95-3.95H4a1 1 0 1 1 0-2h13.243l-3.95-3.95a1 1 0 1 1 1.414-1.414" />
          </g>
        </svg>
      </button>
      <button class="splide__arrow splide__arrow--next">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <g fill="none">
            <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
            <path fill="currentColor" d="m14.707 5.636l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l3.95-3.95H4a1 1 0 1 1 0-2h13.243l-3.95-3.95a1 1 0 1 1 1.414-1.414" />
          </g>
        </svg>
      </button>
    </div>
    
  </Splide>
</section>

<style lang="scss">
  :global(.splide__slide) {
    figure {
      transform: scale(0.7);
      transition: transform 2s ease-in-out;
      @apply relative rounded-3xl overflow-hidden;

      img {
        @apply rounded-3xl;
      }

      figcaption {
        @apply absolute top-0 left-0 w-full h-full flex items-end bg-slate-950/80 p-6;
        transition: background 2s ease-in-out;
        &:after {
          content: '';
          background: linear-gradient(0deg, rgba(0,0,0,.9) 0%, rgba(0,0,0,0.7) 15%, rgba(0,212,255,0) 100%);
          transition: opacity 2s ease-in-out;
          @apply h-full w-full top-0 left-0 absolute opacity-0;
        }
        h3{
          transition: opacity 2s ease-in-out;
          @apply font-bold text-3xl text-white relative z-10 opacity-0;
        }
      }
    }
  }
  
  :global(.splide__slide.is-active) {
    figure {
      transform: scale(1);
      figcaption {
        background-color: transparent;
        &:after {
          @apply opacity-100;
        }

        h3 {
          @apply opacity-100;
        }
      }
      
    }
  }

  :global(.splide__arrow){
    @apply w-auto h-auto p-8 bg-white/30 backdrop-blur-md text-3xl pointer-events-auto text-white ;
  }
</style>
