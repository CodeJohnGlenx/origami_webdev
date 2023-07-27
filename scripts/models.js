const models_data = [
    {
        'href': 'heart.html',
        'name': 'Heart',
        'difficulty': 'Easy',
        'imgURL': 'https://drive.google.com/uc?export=view&id=1vU73NvF9Qr05C5sfMRsoqrmxRHoLawel',
        'alt': 'Heart Model Image'
    },
    {
        'href': 'boat.html',
        'name': 'Boat',
        'difficulty': 'Easy',
        'imgURL': 'https://drive.google.com/uc?export=view&id=1js4a-1C68K2zp7-xSyZcTumPu6bAQj27',
        'alt': 'Boat Model Image'
    },
    {
        'href': 'shuriken.html',
        'name': 'Shuriken',
        'difficulty': 'Medium',
        'imgURL': 'https://drive.google.com/uc?export=view&id=1eW8zpE2psI7gyzZpRWtVP2_WK1a0qM3M',
        'alt': 'Shuriken Model Image'
    },
];


window.onload = () => {
    const modelsContainer = document.querySelector('.models_container');

    /* create origami models based on models_data */
    for (const data of models_data) {
        modelsContainer.appendChild(createModel(data));
    }
    
}

/* create model element */
function createModel({href, name, difficulty, imgURL, alt}) {
    /* model link */
    const model = document.createElement('a');
    model.setAttribute('class', 'model_link');
    model.setAttribute('href', href);

    /* model container */
    const modelContainer = document.createElement('div');
    model.setAttribute('class', 'model_container');

    /* model image */
    const modelImage = document.createElement('img');
    modelImage.setAttribute('class', 'model_image');
    modelImage.setAttribute('src', imgURL);
    modelImage.setAttribute('alt', alt.toLowerCase());

    /* description */
    const description = document.createElement('div');
    description.setAttribute('class', 'description');

    /* model difficulty */
    const modelDifficulty = document.createElement('span');
    modelDifficulty.classList.add('model_difficulty');
    modelDifficulty.classList.add(difficulty.toLowerCase());
    modelDifficulty.textContent = difficulty;    

    /* model title */
    const modelTitle = document.createElement('span');
    modelTitle.classList.add('model_title');
    modelTitle.textContent = name;

    /* view model */
    const viewModel = document.createElement('span');
    viewModel.classList.add('view_model');
    viewModel.textContent = 'View Model';

    /* appending elements */
    description.appendChild(modelDifficulty);
    description.appendChild(modelTitle);
    description.appendChild(viewModel);

    modelContainer.appendChild(modelImage);
    modelContainer.appendChild(description);

    model.appendChild(modelContainer);

    return model;
}