<script>
  import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide";
</script>

<section>
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
      speed: 2500
    }}
    on:mounted={(e) => console.log(e.detail.splide.length)}
  >
    <SplideTrack>
      <SplideSlide>
        <figure>
          <img
            src="https://placehold.co/600x400"
            alt="Image 1"
            class="w-full"
          />
        </figure>
      </SplideSlide>
      <SplideSlide>
        <figure>
          <img
            src="https://placehold.co/600x400/666/fff"
            alt="Image 2"
            class="w-full"
          />
        </figure>
      </SplideSlide>
      <SplideSlide>
        <figure>
          <img
            src="https://placehold.co/600x400"
            alt="Image 2"
            class="w-full"
          />
        </figure>
      </SplideSlide>
    </SplideTrack>
  </Splide>
</section>

<style lang="scss">
  :global(.splide__slide) {
    figure {
      img {
        transform: scale(0.7);
        transition: all 2s ease-in-out;
      }
    }
  }
  :global(.splide__slide.is-active) {
    figure {
      // @apply bg-red-800;
      img {
        transform: scale(1);
        transition: transform 2s ease-in-out;
      }
    }
  }
</style>
