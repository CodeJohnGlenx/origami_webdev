const carousel_data = [
    // 0
    {
        imageId: "1HgDweBD7jlA6jtvaldgRg97attqohzFx",
        description: "Prepare a square paper.",
    },
    // 2
    {
        imageId: "1xmIV4cIznhQ_s2ncmy8Fc2EUfmesprZ1",
        description: "Fold the paper in half two times.",
    },
    // 4
    {
        imageId: "1FHdyVCSby_quJi3Y7yf3uHLmCx9lRAyo",
        description: "Fold down the upper rectangle unto the middle section at the back of the paper.",
    },
    // 5
    {
        imageId: "1fvFJcu0lyzx_mgeMABPd687R0VFxUqiG",
        description: "Make sure that the folded rectangle was in the upper side of the origami. Fold both the upper left and upper right edge diagonally, they should align vertically.",
    },
    // 6
    {
        imageId: "1Oj1AXn7lm2bUiTMWJF-D4ROTDDzrTlnU",
        description: "Flip the paper to see the other side of the paper.",
    },
    // 8
    {
        imageId: "1gZ-3siP5LFy3PcNvVfWz4CDRPSdQ24qU",
        description: "Fold the left and right edges to meet at the middle.",
    },
    // 10
    {
        imageId: "1fr5pPZDWfXMndyyEboTV5pWFhXTRDuP2",
        description: "Fold the lower left and lower right to meet and align vertically.",
    },
    // 13
    {
        imageId: "1MUbohHUb67ivavaBj7cN02h0yY6th8bm",
        description: "Rotate the paper from top to left. Then bring the right side of the origami to the left side.",
    },
    // 15
    {
        imageId: "1gybZmJzzrB6eMJEzci77Mf75mhAdR7N9",
        description: "Insert the right side inside the left pocket.",
    },
    // 16
    {
        imageId: "1lTEQKwxe-alwJ4QjFBrMNgCSKEXuI841",
        description: "Flatten the pocket.",
    },
    // 17
    {
        imageId: "1KnstER64FpEJaEy78c1DtGLkswDrAAGI",
        description: "Flatten the right side of the paper.",
    },
    // 20
    {
        imageId: "13Um4T0UPiaJLgPz9z01XuPsGjk3qQnr8",
        description: "Fold the upper right edge diagonally. Do this with the lower right edge of the paper.",
    },
    // 23
    {
        imageId: "1XqppOPGA-aIAJKYBaYEjgMmimH2nWwaW",
        description: "Fold the Upper right and lower right to the left a little.",
    },
    // 25
    {
        imageId: "14eTckChqvANiQFFquWfpMTMnDpaQcXjT",
        description: "This is the completed origami heart.",
    },
    // 26
    {
        imageId: "1KKeXUZhKm1udP19r_mU4Hm6YFWBTeUDl",
        description: "",
    },
    // 27
    {
        imageId: "1vU73NvF9Qr05C5sfMRsoqrmxRHoLawel",
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
    a.setAttribute('href', "files/origami_heart.pdf")
    a.setAttribute('download', "origami_heart.pdf")
    a.click();
    event.preventDefault();
}