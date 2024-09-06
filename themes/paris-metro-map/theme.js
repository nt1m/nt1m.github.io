Themes.register("Paris Métro Map (WIP)", {
    folder: "paris-metro-map",
    setup: () => {
        document.querySelector("#tiles").classList.remove("content-grid");
        Themes.contentContainer.innerHTML = `
            <div id="airport">✈️</div>
            <div class="seine" id="seine-right"></div>
            <div class="seine" id="seine-central"></div>
            <div class="seine" id="seine-left-down"></div>
            <div class="seine" id="seine-left-up"></div>
            <div class="seine" id="seine-up"></div>
            <div class="line" id="rer-b"></div>
            <div id="soup">🍜</div>
            <div id="banner"></div>
        `;
    },
    tileData: {
        "8ball": {
            tooltip: "Gaité",
            link: "https://maps.apple.com/?address=Paris,%20France&auid=7313354165042995324&ll=48.838515,2.322485&lsp=9902&q=Ga%C3%AEt%C3%A9%20-%20Jos%C3%A9phine%20Baker"
        },
        "apple": {
            tooltip: "Iéna",
            link: "https://maps.apple.com/?address=Paris,%20France&auid=152163004925724681&ll=48.864765,2.294053&lsp=9902&q=I%C3%A9na"
        },
        "paris": {
            tooltip: "Bir-Hakeim",
            link: "https://maps.apple.com/?address=Paris,%20France&auid=13981537480266826012&ll=48.853854,2.289404&lsp=9902&q=Bir-Hakeim"
        },
        "work": {
            tooltip: "La Défense",
            link: "https://maps.apple.com/?address=92800%20Puteaux,%20France&auid=3412868260732209956&ll=48.891712,2.238299&lsp=9902&q=Gare%20de%20la%20D%C3%A9fense"
        },
        "github": {
            title: "I heard you could swim in there",
            link: false
        }
    },
    cleanup: () => {
        document.querySelector("#tiles").classList.add("content-grid");
    },
});