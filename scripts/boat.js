const carousel_data = [
    // 2
    {
        imageId: "14E8mowmCtm8mRX-mgGy78cEb0F0WScnI",
        description: "Prepare a rectangle paper.",
    },
    // 3
    {
        imageId: "1xvY1H_SotwMIXklTMVVOgW1ERvdiHPCy",
        description: "Fold upper of the paper down to the bottom edge.",
    },
    // 9
    {
        imageId: "1H4LYW4DLMk1v0_shq10lBDwv3tAKtQEl",
        description: "Fold the top left and top right edge diagonally. They should align vertically.",
    },
    // 10
    {
        imageId: "1t_6ZnmctBKx1pSQ9DFkev_B7iBXC5PAV",
        description: "Fold the bottom of the paper upward and flatten it.",
    },
    // 12
    {
        imageId: "1Fxz82pgYH-1dok6h28-BOK7rAdl1YFmW",
        description: "Fold the bottom of the paper upward and flatten it.",
    },
    // 14
    {
        imageId: "1y1axBQHf3UB8TgmUxJ47X1yPjIdw2FPc",
        description: "Pick up the paper. Open the underneath part of the paper.",
    },
    // 16
    {
        imageId: "128rMfS-EWAmZlqRAxY9VIVEq7TctvSfx",
        description: "Bring the Left and right to meet at the center.",
    },
    // 23
    {
        imageId: "1Ojb2rFDnXX90G4TFU5Fk8xvuAvHXznoD",
        description: "Flatten the paper.",
    },
    // 27
    {
        imageId: "1J73dCWPxB3kxTmwnwco4j0qRzwE0Jk98",
        description: "Bring one of the lower right edge to meet the upper left edge of the paper.",
    },
    // 28
    {
        imageId: "1fOU6iCappRoqmWKStZQPnelvmCbxEhIj",
        description: "Flip the paper to show the back side of the paper.",
    },
    // 30
    {
        imageId: "1lUAvoVQL5tPRNuqi9Ly-JsEoIly2ljWI",
        description: "Bring the lower left edge to meet the upper right edge of the paper.",
    },
    // 32
    {
        imageId: "1am_HzDxY9CzUDzA8tWnLMJGZX9Xk-ILj",
        description: "Pick up the paper. Open the underneath part of the paper.",
    },
    // 34
    {
        imageId: "1A4mfaQ3iYLYj7FeiMvVII5kuO2A-F_aW",
        description: "Bring the upper and lower edge to meet at the center",
    },
    // 36
    {
        imageId: "1aXlt7ECoaYv0HFJAd65Jy6fSfXaU_H4U",
        description: "Flatten the paper.",
    },
    // 38
    {
        imageId: "1tsav6dXALnV5PNrBuG5JQVhCZI1U-gLu",
        description: "Pick up the paper. Pull the top left and top right away from the center.",
    },
    // 39
    {
        imageId: "1FI52F_bbBIFLdilect0RLM-DhW82LPQ1",
        description: "This the first version of the completed boat origami.",
    },
    // 43
    {
        imageId: "16pPQV5C64m2azuij52NBRTqXVSVwtE_O",
        description: "You may also flatten the entire origami as shown below to do second version of the completed boat origami.",
    },
    // 44
    {
        imageId: "1js4a-1C68K2zp7-xSyZcTumPu6bAQj27",
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
    a.setAttribute('href', "files/origami_boat.pdf")
    a.setAttribute('download', "origami_boat.pdf")
    a.click();
    event.preventDefault();
}