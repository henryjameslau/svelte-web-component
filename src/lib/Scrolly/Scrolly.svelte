<svelte:options customElement="scroll-y"/>

<script>
    import "@onsvisual/svelte-components/css/main.css"; // This is more typically imported in the global +layout.svelte
    import {
      Grid,
      Em,
      Scroller,
      ScrollerSection,
    } from "@onsvisual/svelte-components";
  
    const scrollerColors = ["#ddd", "#777", "#222"];
    let scrollerColor = scrollerColors[0];
  </script>
  
 
  <Scroller
    id="scroller"
    splitscreen
    on:change="{(e) => (scrollerColor = scrollerColors[e.detail.index])}"
  >
    <div slot="background">
      <Grid width="full" height="full">
        <div class="placeholder-block" style:background-color="{scrollerColor}"></div>
      </Grid>
    </div>
    <div slot="foreground">
      <ScrollerSection>
        <p>
          When this first caption is visible, the background will appear
          <Em color="{scrollerColors[0]}">light grey</Em>.
        </p>
      </ScrollerSection>
      <ScrollerSection>
        <p>
          When this second caption is visible, the background will appear
          <Em color="{scrollerColors[1]}">dark grey</Em>.
        </p>
      </ScrollerSection>
      <ScrollerSection>
        <p>
          When this third caption is visible, the background will appear
          <Em color="{scrollerColors[2]}">black</Em>.
        </p>
      </ScrollerSection>
    </div>
  </Scroller>