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
        card.classList = "card card-compact"
        card.innerHTML = `
        <figure>
    <img
      src=${video.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
        `;
        videoContainer.append(card)
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
