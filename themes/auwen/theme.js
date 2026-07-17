Themes.register("Auwen", {
    folder: "auwen",
    setup: () => {
        document.querySelector("#tiles").classList.remove("content-grid");

        Themes.contentContainer.innerHTML = `
            <div id="scale"></div>
            <div id="auwen-time"></div>
        `;
    },
    tileData: {
        "heart": {
            tooltip: "my daw",
            link: "https://www.soniare.net/auwen"
        },
        "work": {
            tooltip: "my music",
            link: "https://ntim.bandcamp.com"
        },
        "github": {
            tooltip: "my code i guess",
            link: "https://github.com/nt1m"
        }
    },
    cleanup: () => {
        document.querySelector("#tiles").classList.add("content-grid");
    },
});