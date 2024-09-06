const Themes = {
    map: new Map(),
    currentTheme: null,
    contentContainer: null,
    themeStylesheet: null,

    register(name, definition) {
        this.map.set(name, definition);
    },
    select(name) {
        if (this.currentTheme && this.map.get(this.currentTheme).cleanup) {
            this.map.get(this.currentTheme).cleanup();
            this.contentContainer.textContent = "";
        }
        this.currentTheme = name;
        let folder = this.map.get(this.currentTheme).folder ?? name;
        this.themeStylesheet.href = `./themes/${folder}/theme.css`;
        this.map.get(this.currentTheme).setup();
        for (const tile of [...document.querySelectorAll("[id^=tile]")]) {
            const key = tile.id.replace("tile-", "");
            const a = tile.querySelector("a");
            const tileData = this.map.get(this.currentTheme).tileData[key];

            if (tileData && tileData.link)
                a.href = tileData.link;
            else
                a.removeAttribute("href");

            tile.dataset.tooltip = tileData && tileData.tooltip ? tileData.tooltip : "";
            tile.title = tileData && tileData.title ? tileData.title : "";
        }
        this.themeDropdownList.querySelector(`input[value="${name}"]`).checked = true;
    },
    init() {
        this.contentContainer = document.querySelector("#theme-content-container");
        this.themeStylesheet = document.querySelector("#theme-stylesheet");
        this.themeDropdownList = document.querySelector("#theme-dropdown-list");
        const selectedTheme = [...this.map.keys()][0];
        for (let theme of this.map.keys()) {
            const li = document.createElement("li");
            const label = document.createElement("label");

            const input = document.createElement("input");
            input.name = "theme";
            input.value = theme;
            input.type = "radio";
            input.addEventListener("click", () => {
                if (this.currentTheme != theme) {
                    if (document.startViewTransition)
                        document.startViewTransition(() => this.select(theme));
                    else
                        this.select(theme);
                }
            });

            label.append(input, theme);
            li.append(label);
            this.themeDropdownList.append(li);
        }
        addEventListener("click", (e) => {
            const dropdown = document.querySelector("#theme-dropdown");
            if (e.target == document.querySelector("#theme-selector > button")) {
                if (dropdown.open) {
                    dropdown.close();
                } else {
                    dropdown.show();
                }
            } else {
                dropdown.close();
            }
        });
        this.select(selectedTheme);
    }
};

addEventListener("DOMContentLoaded", () => {
    Themes.init();
})