const Themes = {
    map: new Map(),
    currentTheme: null,
    contentContainer: document.querySelector("#theme-content-container"),
    themeStylesheet: document.querySelector("#theme-stylesheet"),
    themeDropdownList: document.querySelector("#theme-dropdown-list"),

    register(name, definition) {
        this.map.set(name, definition);
        if (!this.currentTheme) {
            this.select(name);
        }
    },
    async select(name) {
        if (this.currentTheme == name)
            return;
    
        const currentTheme = this.map.get(this.currentTheme);

        if (currentTheme?.cleanup) {
            currentTheme.cleanup();
            this.contentContainer.textContent = "";
        }

        this.currentTheme = name;

        const theme = this.map.get(name);
        const folder = theme.folder ?? name;

        await new Promise((resolve, reject) => {
            const onLoad = () => {
                cleanup();
                resolve();
            };

            const onError = () => {
                cleanup();
                reject(new Error(`Failed to load theme stylesheet: ${folder}`));
            };

            const cleanup = () => {
                this.themeStylesheet.removeEventListener("load", onLoad);
                this.themeStylesheet.removeEventListener("error", onError);
            };

            this.themeStylesheet.addEventListener("load", onLoad, { once: true });
            this.themeStylesheet.addEventListener("error", onError, { once: true });

            this.themeStylesheet.href = `./themes/${folder}/theme.css`;
        });

        theme.setup();

        for (const tile of document.querySelectorAll('[id^="tile-"]')) {
            const key = tile.id.replace("tile-", "");
            const anchor = tile.querySelector("a");
            const tileData = theme.tileData?.[key];

            if (anchor) {
                if (tileData?.link) {
                    anchor.href = tileData.link;
                } else {
                    anchor.removeAttribute("href");
                }
            }

            tile.dataset.tooltip = tileData?.tooltip ?? "";
            tile.title = tileData?.title ?? "";
        }

        this.themeDropdownList.querySelector(
            `input[value="${CSS.escape(name)}"]`
        ).checked = true;
    },
    init() {
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
                        this.select(theme).catch(console.error);
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
    }
};

addEventListener("DOMContentLoaded", () => {
    Themes.init();
});