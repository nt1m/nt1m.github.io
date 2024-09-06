        // function drawNoise(canvas, gap = 1, colorFunction) {
        //     let xScale = 0.0015;
        //     let yScale = 0.002;

        //     canvas.width = canvas.getBoundingClientRect().width * 2;
        //     canvas.height = canvas.getBoundingClientRect().height * 2;

        //     const ctx = canvas.getContext("2d");
        //     for (let x = gap / 2; x < canvas.width; x += gap) {
        //         for (let y = gap / 2; y < canvas.height; y += gap) {
        //             let noiseValue = noise(x * xScale, y * yScale);
        //             // console.log(noiseValue)
        //             ctx.fillStyle = colorFunction(noiseValue);
        //             ctx.fillRect(x, y, 1, 1);
        //         }
        //     }
        // }
        // drawNoise(document.querySelector("#sand"), 1, (noiseValue) => {
        //     return `hsla(30, 20%, ${noiseValue * 12}%, 0.1)`
        // });

        // drawNoise(document.querySelector("#sky"), 1, (noiseValue) => {
        //     return `hsla(0, 0%, ${noiseValue * 20 + 30}%, 0.1)`
        // });

        // const contentTiles = [...document.querySelectorAll("main.content-grid > .contents")];
        // for (let tile of contentTiles) {
        //     if (tile.id)
        //         tile.style.viewTransitionName = tile.id;
        // }