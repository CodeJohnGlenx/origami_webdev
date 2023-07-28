const carousel_data = [
    // 0
    {
        imageId: "1HgDweBD7jlA6jtvaldgRg97attqohzFx",
        description: "Somethin about description",
    },
    // 1
    {
        imageId: "1YuC_3tsPPkLp_UZmcLdwkk-2ux4orXFI",
        description: "Somethin about description",
    },
    // 2
    {
        imageId: "1xmIV4cIznhQ_s2ncmy8Fc2EUfmesprZ1",
        description: "Somethin about description",
    },
    // 3
    {
        imageId: "17TyHXOuF2p5ePSJbffTpNHKPFBkDVo5D",
        description: "Somethin about description",
    },
    // 4
    {
        imageId: "1FHdyVCSby_quJi3Y7yf3uHLmCx9lRAyo",
        description: "Somethin about description",
    },
    // 5
    {
        imageId: "1fvFJcu0lyzx_mgeMABPd687R0VFxUqiG",
        description: "Somethin about description",
    },
    // 6
    {
        imageId: "1Oj1AXn7lm2bUiTMWJF-D4ROTDDzrTlnU",
        description: "Somethin about description",
    },
    // 7
    {
        imageId: "1y6Hg2ARraUOWOgoqhZ5-QdspS0A9GtUO",
        description: "Somethin about description",
    },
    // 8
    {
        imageId: "1gZ-3siP5LFy3PcNvVfWz4CDRPSdQ24qU",
        description: "Somethin about description",
    },
    // 9
    {
        imageId: "1aKpF4NupmUvayHFrEo_kq13cE8vmr1v5",
        description: "Somethin about description",
    },
    // 10
    {
        imageId: "1fr5pPZDWfXMndyyEboTV5pWFhXTRDuP2",
        description: "Somethin about description",
    },
    // 11
    {
        imageId: "1TXFBa2j9P1u9sLTP6lwBJl3W_Gp3X-By",
        description: "Somethin about description",
    },
    // 12
    {
        imageId: "1fBouizAgxD66N7JvhK-EhMYoPRjSXEL9",
        description: "Somethin about description",
    },
    // 13
    {
        imageId: "1MUbohHUb67ivavaBj7cN02h0yY6th8bm",
        description: "Somethin about description",
    },
    // 14
    {
        imageId: "1eThOrTYeF7ev9c3zQJ6OZ5H33bOQzOZJ",
        description: "Somethin about description",
    },
    // 15
    {
        imageId: "1gybZmJzzrB6eMJEzci77Mf75mhAdR7N9",
        description: "Somethin about description",
    },
    // 16
    {
        imageId: "1lTEQKwxe-alwJ4QjFBrMNgCSKEXuI841",
        description: "Somethin about description",
    },
    // 17
    {
        imageId: "1KnstER64FpEJaEy78c1DtGLkswDrAAGI",
        description: "Somethin about description",
    },
    // 18
    {
        imageId: "1xeqXZWPAxyM8NPmXgqDn-tiNQ9Gggx8v",
        description: "Somethin about description",
    },
    // 19
    {
        imageId: "1QXFMN5KahLxh4cJgYeZTnZ_d5s5ba5KK",
        description: "Somethin about description",
    },
    // 20
    {
        imageId: "13Um4T0UPiaJLgPz9z01XuPsGjk3qQnr8",
        description: "Somethin about description",
    },
    // 21
    {
        imageId: "1VMYnLfArLi3KXJJEodweFpNJArmXJ-7h",
        description: "Somethin about description",
    },
    // 22
    {
        imageId: "1wCSepu-5ck1XtLua8vRicUkLcPTSNCMg",
        description: "Somethin about description",
    },
    // 23
    {
        imageId: "1XqppOPGA-aIAJKYBaYEjgMmimH2nWwaW",
        description: "Somethin about description",
    },
    // 24
    {
        imageId: "19fv0wxlT4IX2QTjNML0L01qtTnJTFwzm",
        description: "Somethin about description",
    },
    // 25
    {
        imageId: "14eTckChqvANiQFFquWfpMTMnDpaQcXjT",
        description: "Somethin about description",
    },
    // 26
    {
        imageId: "1KKeXUZhKm1udP19r_mU4Hm6YFWBTeUDl",
        description: "Somethin about description",
    },
    // 27
    {
        imageId: "1vU73NvF9Qr05C5sfMRsoqrmxRHoLawel",
        description: "Somethin about description",
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
        carouselP.textContent = `${data.description} ${itemNo + 1}`

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
    a.setAttribute('href', "files/origami_notes.pdf")
    a.setAttribute('download', "origami_notes.pdf")
    a.click();
    event.preventDefault();
}