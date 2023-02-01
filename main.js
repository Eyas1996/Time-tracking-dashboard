// Fetch the Data from the JOSN File

async function fetchData() {
  let response = await fetch('./data.json');
  let data = await response.json();
  console.log(data);

  // Save All wanted Data form the json File into an Object
  let myData = new Object({});

  for (let i = 0; i < data.length; i++) {
    myData.title = data[i].title
    myData.dailyC = data[i].timeframes.daily.current;
    myData.dailyP = data[i].timeframes.daily.previous;
    myData.weeklyC = data[i].timeframes.weekly.current;
    myData.weeklyP = data[i].timeframes.weekly.previous;
    myData.monthlyC = data[i].timeframes.monthly.current;
    myData.monthlyP = data[i].timeframes.monthly.previous;

    // create Wanted Elements
    let mainCard = document.querySelector(".main-card");

    let card = document.createElement("div");

    // Remove Whitespace
    card.classList.add(["card"], [myData.title.replaceAll(" ", "-").toLowerCase()]);
    // .image 
    let imgholder = document.createElement("div");
    imgholder.classList.add("image");
    // Img 
    let img = document.createElement("img");
    img.src = `./images/icon-${myData.title.replaceAll(" ", "-").toLowerCase()}.svg`;
    img.alt = `${myData.title.replaceAll(" ", "-").toLowerCase()}`;

    // content in Card
    let content = document.createElement("div");
    content.classList.add("content");

    // activity in Content 
    let activity = document.createElement("div");
    activity.classList.add("activity");
    let pElement = document.createElement("p");
    pElement.textContent = `${myData.title.replaceAll(" ", "-")}`
    let ellipsis = document.createElement("img");
    ellipsis.src = "./images/icon-ellipsis.svg";

    // time Section
    let time = document.createElement("div");
    time.classList.add("time");
    let hours = document.createElement("h2");
    let span = document.createElement("span");
    hours.textContent = `${myData.weeklyC}hrs`;
    span.textContent = `Last Week - ${myData.weeklyP}hrs`;

    // Append All Elements
    mainCard.appendChild(card);
    card.appendChild(imgholder);
    imgholder.appendChild(img);
    card.appendChild(content);
    content.appendChild(activity);
    activity.appendChild(pElement);
    activity.appendChild(ellipsis);
    content.appendChild(time);
    time.appendChild(hours);
    time.appendChild(span);


    // Access Btns
    let daily = document.getElementById("daily");
    let weekly = document.getElementById("weekly");
    let monthly = document.getElementById("monthly");

    // Btns On Click 
    daily.addEventListener("click", function () {
      hours.textContent = `${data[i].timeframes.daily.current}hrs`;
      span.textContent = `Previous - ${data[i].timeframes.daily.previous}hrs`;
    });
    weekly.addEventListener("click", function () {
      hours.textContent = `${data[i].timeframes.weekly.current}hrs`;
      span.textContent = `Last Week - ${data[i].timeframes.weekly.previous}hrs`;
    });
    monthly.addEventListener("click", function () {
      hours.textContent = `${data[i].timeframes.monthly.current}hrs`;
      span.textContent = `Previous - ${data[i].timeframes.monthly.previous}hrs`;
    });

  }
}
fetchData();


  // function displayDay() {
  //   let current = `${data[i].timeframes.daily.current}hrs`;;
  //   let previous = `Previous - ${data[i].timeframes.daily.previous}hrs`;
  //   hours.textContent = `${current}`;
  //   span.textContent = `${previous}`;
  // }
  // function displayWeek() {
  //   let current = `${data[i].timeframes.weekly.current}hrs`;
  //   let previous = `Last Week - ${data[i].timeframes.weekly.previous}hrs`;
  //   hours.textContent = `${current}`;
  //   span.textContent = `${previous}`;
  // }
  // function displayMonth() {
  //   let current = `${data[i].timeframes.monthly.current}hrs`;
  //   let previous = `Previous - ${data[i].timeframes.monthly.previous}hrs`
  //   hours.textContent = `${current}`;
  //   span.textContent = `${previous}`;
  // }



  // daily.addEventListener("click", displayDay);
  // weekly.addEventListener("click", displayWeek);
  // monthly.addEventListener("click", displayMonth);