function blog() {
    let blog = `
        <h2 class="h2">Latest Blog Post</h2>

        <div class="blog-card-group">`
            for (let i = 0; i < details.length; i++) {
                blog = blog + `
                <div class="blog-card">
                    <div class="blog-card-banner">
                        <img src="${details[i].image}" width="250" class="blog-banner-img">
                    </div>

                    <div class="blog-content-wrapper">

                        <button class="blog-topic text-tiny">${details[i].category}</button>

                        <h3>
                            <a href='blog-show.html' class="h3">
                                ${details[i].title}
                            </a>
                        </h3>

                        <p class="blog-text">
                            ${details[i].description.substring(0, 200)+'...'}
                        </p>

                        <div class="wrapper-flex">

                            <div class="profile-wrapper">
                                <img src="./assets/img/author.png" alt="${details[i].author}" width="50">
                            </div>

                            <div class="wrapper">
                                <a href="#" class="h4">${details[i].author}</a>

                                <p class="text-sm">
                                    <time datetime="2022-01-17">Jan 17, 2022</time>
                                    <span class="separator"></span>
                                    <ion-icon name="time-outline"></ion-icon>
                                    <time datetime="PT3M">3 min</time>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>`;
            };
            blog = blog+`
        </div>

        <button class="btn load-more">Load More</button>
    `
    document.getElementById("blog").innerHTML = blog;
}

getData();

blog();

function getData(){
    let Data = localStorage.getItem("details");
    if (Data) {
        details = JSON.parse(Data);
    } else {
        setData();
    };
};

document.getElementById("showBlog").onclick = function() {myFunction()};

function myFunction() {
    document.getElementById("showBlog").innerHTML = "YOU CLICKED ME!";
}