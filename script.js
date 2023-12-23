window.onscroll = function () {
    scrollFunction();
  };
  
  function scrollFunction() {
    const scroll = document.body.scrollTop || document.documentElement.scrollTop;
    const GAP = 115;
  
    const nav = document.querySelector("nav");
    const home = document.getElementById("home");
  
    if (scroll > GAP) {
      nav.style.margin = "1rem 38%";
      nav.style.border = "1px solid rgb(172,194,209)";
      nav.style.borderRadius = "0.5rem";
    } else {
      nav.style.borderBottom = "1px solid rgb(172,194,209)";
      nav.style.borderTop = 0;
      nav.style.borderLeft = 0;
      nav.style.borderRight = 0;
      nav.style.margin = 0;
      nav.style.borderRadius = 0;
    }
  
    const homeHeight = home.offsetHeight;
    //   console.log(scroll);
    //   console.log(homeHeight);
  
    const percentage = 1 - scroll / homeHeight;
    console.log(percentage);
  
    home.style.opacity = percentage;
    home.style.padding = `${percentage * 5}rem`;
    home.style.fontSize = `${percentage * 8}rem`;
  }
  

  //randomize quote//
  function randomQuote() {
    const quote = document.getElementById("random-quote");
    const quotes = [
      `"Sorry, I think.`,
      `"You corrupt priest."`,
      `"I'll take you there in fifty years."`,
      `"But they're worth looking for."`,
      `"I'll stop by once in a while.`,
    ];
  
  
    setInterval(() => {
      const random = Math.floor(Math.random() * quotes.length);
      quote.innerText = quotes[random];
    }, 1000);
  }
  randomQuote();

  //auto slide image//
    var i = 0;
    var images = [];
    var time = 2000;
      images[0] = '/images/frieren 1.png';
      images[1] = '/images/frieren 2.png';
      images[2] = '/images/frieren 3.jpeg';
      images[3] = '/images/frieren 4.jpeg';
      images[4] = '/images/frieren 5.png';
      images[5] = '/images/frieren 6.jpeg';
  function changeImg(){
    document.slide.src = images[i];
      if(i < images.length - 1){
            i++;
          } else {
            i = 0;
          }
      setTimeout("changeImg()",time);
        }
  window.onload = changeImg;


//gallery 
  function addImage(url) {
    var grid = document.getElementById("image-grid");
    var newImage = document.createElement("img");
    newImage.className = "grid-item";
    newImage.src = url;
    grid.appendChild(newImage);
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    var imageUrls = [
      "/images/frieren 1.png",
      "/images/frieren 2.png",
      "/images/frieren 3.jpeg",
      "/images/frieren 4.jpeg",
      "/images/frieren 5.png",
      "/images/frieren 6.jpeg",
    ];
  
    imageUrls.forEach(function (url) {
      addImage(url);
    });
  
    var form = document.getElementById("add-image");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var input = document.getElementById("img-source");
      var imageUrl = input.value.trim();
  
      if (imageUrl !== "") {
        addImage(imageUrl);
        input.value = "";
      }
    });
  });
  
  RandomQuote();
  window.onscroll = function () {
    scrollFunction();
  };
  
  function changeImage() {
    var imageUrls = [
      "/images/frieren 1.png",
      "/images/frieren 2.png",
      "/images/ena-3.png",
      "/images/frieren 4.jpeg",
      "/images/frieren 5.png",
      "/images/frieren 6.jpeg",
    ];
  
    const homeImage = document.getElementById("home-image");
  
    setInterval(() => {
      const randomIndex = Math.floor(Math.random() * imageUrls.length);
      const imageUrl = imageUrls[randomIndex];
  
      homeImage.src = imageUrl;
    }, 3000);
  }
