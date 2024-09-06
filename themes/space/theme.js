Themes.register("Night Sky", {
    folder: "space",
    setup: () => {
        function randomStars() {
            const starContainer = document.createElement("div");
            let numStars = 200;
            let xScale = 0.15;
            let yScale = 0.2;
    
            for (let i = 0; i < numStars; i++) {
                starContainer.append((() => {
                    const star = document.createElement("star");
                    star.style.setProperty("--star-luminance", Math.random() * 40 + "%");
                    star.style.setProperty("--star-size", (Math.random() * 3 + 1) + "px");
                    star.style.setProperty("--star-delay", Math.random() * 2 + "s");
                    star.style.setProperty("--star-duration", Math.random() * 60 + 20 + "s");
                    star.style.top = Math.random() * document.body.clientHeight + "px"
                    star.style.left = Math.random() * document.body.clientWidth + "px";
                    return star;
                })());
            }
            Themes.contentContainer.append(starContainer);
        }
        randomStars();

        const pillarGrid = document.createElement("div");
        pillarGrid.className = "content-grid";

        for (let content of document.querySelectorAll("#tiles > .contents")) {
            let pillar = document.createElement("div");
            pillar.className = "pillar";
            pillar.innerHTML = `
            <div class="platform"></div>
            <div class="front-shadow"></div>
            <div class="back-shadow"></div>`

            pillar.style.gridArea = content.style.gridArea;

            pillarGrid.append(pillar);
        }
        Themes.contentContainer.append(pillarGrid);
    },
    tileData: {
        "8ball": {
            tooltip: "play a game?",
            link: "https://calendly.com/ntim/"
        },
        "apple": {
            tooltip: "where I work",
            link: "https://maps.apple.com/?address=Apple%20Inc.,%201%20Apple%20Park%20Way,%20Cupertino,%20CA%2095014,%20United%20States&auid=559098170073364042&ll=37.334859,-122.009040&lsp=9902&q=Apple%20Park"
        },
        "paris": {
            tooltip: "grew up here",
            title: "yes, in the tower itself",
            link: false
        },
        "work": {
            tooltip: "LinkedIn",
            title: "only quality content",
            link: "https://www.linkedin.com/in/n-tim/"
        },
        "heart": {
            tooltip: "my name in 🇻🇳",
            link: "https://translate.google.com/?sl=vi&tl=en&text=Tim&op=translate"
        },
        "github": {
            tooltip: "Github",
            title: "check out my contribution graph",
            link: "https://github.com/nt1m"
        }
    },
    cleanup: () => {

    },
});