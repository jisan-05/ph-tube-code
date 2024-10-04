// 1- Fetch, Load and Show Categories on html

//create loadCatagories
const loadCatagories = () => {
    //Fetch the Data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((res) => res.json())
        .then((data) => displayCategories(data.categories))
        .catch((error) => console.log(error));
};

const loadVideo = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then((res) => res.json())
        .then((data) => displayVideo(data.videos))
        .catch((error) => console.log(error));
};
// display video
const displayVideo = (videos) => {
    const videoContainer = document.getElementById("videos");
    videos.forEach((video) => {
        console.log(video);
        const card = document.createElement("div");
        card.classList = "card card-compact";
        card.innerHTML = `
        <figure class="h-[200px] ">
    <img
      src=${video.thumbnail}
      alt="Shoes" class="h-full w-full object-cover" />
  </figure>
  <div class="px-0 py-2">
    <div>
        <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture} />
    </div>
    <div>
        <h2 class="font-bold">${video.title}</h2>
        <div class="flex items-center">
            <p>${video.authors[0].profile_name}</p>
            ${video.authors[0].verified === true
            ? `<img class="w-5 h-5 " src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png">`:''
            }
        </div>
        <p> </p>
    </div>
    
  </div>
        `;
        videoContainer.append(card);
    });
};

//create DisplayCategories
displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories");

    categories.forEach((item) => {
        console.log(item);
        // create a button
        const button = document.createElement("button");
        button.classList = "btn";
        button.innerText = item.category;

        // add button
        categoryContainer.append(button);
    });
};

loadCatagories();
loadVideo();
