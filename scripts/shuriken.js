const carousel_data = [
    // 0
    {
        imageId: "1I5yN-EhUTQcDTGMWattTmGdxoVZyiSHP",
        description: "Prepare a square paper.",
    },
    // 1
    {
        imageId: "1lmm29MjJqoOOuqZXc2q7-dgD3FG3S00f",
        description: "Fold it in half lengthwise.",
    },
    // 2
    {
        imageId: "1MPAAnfbGq8kDPjAwp9s9MDcEARgJUedf",
        description: "Cut the paper in the created crease.",
    },
    // 3
    {
        imageId: "16n-m9bGFvFWaoHT3rjL85LqpWU5JbnEW",
        description: "Fold the left paper from left to right.",
    },
    // 4
    {
        imageId: "1Oqx5usaAxV5cSmPdEqfomFIOPqJAv3tl",
        description: "Flip the right paper.",
    },
    // 5
    {
        imageId: "1m9Zb-YTPfyynQlLh95s3krDFg5ozboKT",
        description: "Fold the right paper from right to left.",
    },
    // 8
    {
        imageId: "1TX3eY1l_lYLc2kzz3V-PZ2tulF-NxBJl",
        description: "For the left paper, fold the upper right edge diagonally. Fold the lower left edge diagonally.",
    },
    // 10
    {
        imageId: "1Fy8UGBufOzMxTI4kKuT_ndsD5_wEARPM",
        description: "For the right paper, fold the upper left edge diagonally. Fold the lower right edge diagonally.",
    },
    // 12
    {
        imageId: "13BLla-bz1yaqWwWt1gc_pOhcBr7Nx3oJ",
        description: "For the left paper, Fold the upper part downward where the center of it be vertically aligned to the right side of the paper.",
    },
    // 14
    {
        imageId: "1ihuC_uE3l7S1N3t9UsmM5YIzFYs2Y9Im",
        description: "For the left paper, Fold the lower part upward where the center of it be vertically aligned to the left side of the paper.",
    },
    // 16
    {
        imageId: "1xRQt0aI8L7AelQegFlax6lbxKX0fdLEW",
        description: "For the right paper, Fold the upper part downward where the center of it be vertically aligned to the left side of the paper.",
    },
    // 19
    {
        imageId: "1H-qvUa8oZr3e91h7g6j7EBYh0uw8tTAZ",
        description: "For the right paper, Fold the lower part upward where the center of it be vertically aligned to the right side of the paper.",
    },
    // 22
    {
        imageId: "1l5Nny8qeu2qS7XaMAARRYLH31N5bm4mm",
        description: "Flip the left paper.",
    },
    // 24
    {
        imageId: "1BENB7d_fnA5vHn_L1lgqIMY8I1TtwKNm",
        description: "Put the right part on top of the left paper.",
    },
    // 26
    {
        imageId: "12jPgYNRr9r1JipMiLiQHFndLDnbT--jk",
        description: "Fold the upper right side downward.",
    },
    // 28
    {
        imageId: "1ZjGVfG3zTSIXDNQo5d2XNJvS6Usx3UW2",
        description: "Insert the upper right side inside the pocket of lower right side.",
    },
    // 29
    {
        imageId: "1SZq315AYCzcvBuXfFc17DByB6wRoMLrq",
        description: "Fold the lower left side upward.",
    },
    // 30
    {
        imageId: "15RYGyxdE1jQJr52o-AGVwhx7dMLb6IqC",
        description: "Insert the lower left side inside the pocket or upper left side.",
    },
    // 31
    {
        imageId: "1r9Am8r2tH0UcJijwqbVXCLXDtj6o4eB0",
        description: "Flatten the paper.",
    },
    // 32
    {
        imageId: "1mQwfbSy5ksTIZZ1KmrJF5jpgrJoJxCIU",
        description: "Flip the paper.",
    },
    // 33
    {
        imageId: "1B8McDpKtQwGoIb0b3awgdITzluAwAQ8L",
        description: "Do the same procedure here but in a different pocket. Fold the upper right side unto the left before inserting inside the pocket of upper left side.",
    },
    // 35
    {
        imageId: "18yfylQAI3Zk-gyViT-NZEdi95wt0iEkI",
        description: "Do the same procedure here but in a different pocket. Fold the lower left side unto right before inserting in the pocket of lower right side.",
    },
    // 36
    {
        imageId: "1PcFmQXCDe0DaBhwYuAGwivyXg2w5qnbe",
        description: "This is the completed origami of shuriken.",
    },
    // 37
    {
        imageId: "12VKtLNZWb8uEV_NuHClr3TUfTRubEz-O",
        description: "",
    },
    // 38
    {
        imageId: "1eW8zpE2psI7gyzZpRWtVP2_WK1a0qM3M",
        description: "",
    },
]

window.onload = () => {
    // carousel container
    const carousel = document.querySelector(".carousel-inner");
    const carouselIndicators = document.querySelector(".carousel-indicators");
    let itemNo = 0;

    for (const data of carousel_data) {
        // carousel item
        const carouselItem = document.createElement("div");
        carouselItem.setAttribute("class", "carousel-item");
        if (itemNo === 0) {
            carouselItem.classList.add("active")
        }

        // carousel image
        const carouselImage = document.createElement("img");
        carouselImage.setAttribute('src', `https://drive.google.com/uc?export=view&id=${data.imageId}`);
        carouselImage.setAttribute("class", "d-block w-100 carousel-img");
        carouselImage.setAttribute("alt", `https://drive.google.com/uc?export=view&id=${data.imageId}`)
        carouselImage.setAttribute("loading", 'lazy');

        // carousel caption
        const carouselCaption = document.createElement('div');
        carouselCaption.setAttribute('class', "carousel-caption d-none d-md-block");

        const carouselH5 = document.createElement('h5');
        carouselH5.textContent = `Fold ${itemNo + 1}`;

        const carouselP = document.createElement('p');
        carouselP.textContent = `${data.description}`

        carouselCaption.appendChild(carouselH5)
        carouselCaption.appendChild(carouselP);
        carouselItem.appendChild(carouselImage);
        carouselItem.appendChild(carouselCaption);
        carousel.appendChild(carouselItem);


        // carousel indicators
        // <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        const indicatorButton = document.createElement('button');
        indicatorButton.setAttribute('type', 'button');
        indicatorButton.setAttribute('data-bs-target', "#carouselExampleCaptions");
        indicatorButton.setAttribute('data-bs-slide-to', `${itemNo}`);
        indicatorButton.setAttribute('class', 'active');
        indicatorButton.setAttribute('aria-current', 'true');
        indicatorButton.setAttribute('aria-label', `Slide ${itemNo}`);

        carouselIndicators.appendChild(indicatorButton);

        itemNo += 1;
    }

    console.log(carousel);
}


// add event lister on submit 
const form = document.querySelector("form");
form.addEventListener('submit', downloadPdf); 

// download origami pdf 
function downloadPdf(event) {
    const a = document.createElement('a');
    a.setAttribute('href', "files/origami_shuriken.pdf")
    a.setAttribute('download', "origami_shuriken.pdf")
    a.click();
    event.preventDefault();
}