Themes.register("Billiards", {
    folder: "billiards",
    setup: () => {
        document.querySelector("#tiles").classList.remove("content-grid");

        Themes.contentContainer.innerHTML = `
            <div id="pool-table-clip">
            <div id="pool-table">
                <div class="pool-hole" id="pool-hole-left-top"></div>
                <div class="pool-hole" id="pool-hole-center-top"></div>
                <div class="pool-hole" id="pool-hole-right-top"></div>
                <div class="pool-hole" id="pool-hole-left-bottom"></div>
                <div class="pool-hole" id="pool-hole-center-bottom"></div>
                <div class="pool-hole" id="pool-hole-right-bottom"></div>
            </div>
            <div id="pool-table-chalk"></div>
            </div>


            <div id="pool-stick"></div>
        `;
    },
    tileData: {
        "8ball": {
            link: false
        },
        "apple": {
            title: "not really great for playing",
            link: false
        },
        "paris": {
            title: "one of places I like to play",
            link: "https://www.indianacafe.fr/"
        },
        "work": {
            link: false
        },
        "github": {
            tooltip: "",
            link: "https://github.com/nt1m"
        }
    },
    cleanup: () => {
        document.querySelector("#tiles").classList.add("content-grid");
    },
});