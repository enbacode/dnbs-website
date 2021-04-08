<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/8EOm4zPHfsY?autoplay=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
        <iframe
            frameborder="0"
            scrolling="no"
            id="chatframe"
            class="style-scope ytd-live-chat-frame"
            src="/live_chat?continuation=0ofMyANxGlhDaWtxSndvWVZVTnJkSFkzTlhOd09VdEZXRlYyUmpkMmFtZDRObHAzRWdzNFJVOXROSHBRU0daeldSb1Q2cWpkdVFFTkNnczRSVTl0TkhwUVNHWnpXU0FCMAGCAQIIBIgBAaABi4Pcxeru7wKyAQA%253D"
        ></iframe>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "Home",
    components: {
        HelloWorld,
    },
};
</script>
