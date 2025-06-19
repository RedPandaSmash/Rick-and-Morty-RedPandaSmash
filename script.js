async function render(fi, si) {
  let response = await fetch(
    `https://rickandmortyapi.com/api/character/${fi},${si}`
  );
  let data = await response.json();
  console.log(data);
  // Your code goes here
}

render(20, 35);

// DOM create variables from ids of images in html
let image1 = document.getElementById("firstImage");
let image2 = document.getElementById("secondImage");
render(image1, image2);
