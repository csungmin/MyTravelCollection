const blockData=[
    {imageSrc: 'images/newyork2.png', city:'New York',modalId:'info-1', location: 'United States, Oct 2022, Grand Central Terminal'},
    {imageSrc: 'images/chicago2.png', city: 'Chicago', modalId: 'info-2', location: 'United States, Apr 2022, Navy Pier'},
    {imageSrc: 'images/boston2.png', city:'Boston', modalId:'info-3', location:'United States, Jul 2019, Boston Common'},
    {imageSrc: 'images/detroit.png', city:'Detroit', modalId:'info-4', location:'United States, Apr 2023, Delle Isle Park'},
    {imageSrc: 'images/destin2.png', city:'Destin', modalId:'info-5', location:'United States, May 2023, Destin East Jetty'},

    {imageSrc: 'images/las vegas.png', city:'Las Vegas', modalId:'info-6', location:'United States, Dec 2017, Paris Las Vegas'},
    {imageSrc: 'images/tusayan.png', city:'Tusayan', modalId:'info-7', location:'United States, Dec 2017, Grand Canyon National Park'},
    {imageSrc: 'images/san francisco.png', city:'San Francisco', modalId:'info-8', location:'United States, Mar 2024, Golden Gate Bridge'},
    {imageSrc: 'images/los angeles.png', city:'Los Angeles', modalId:'info-9', location:'United States, Mar 2024, The Hollywood Sign'},
    {imageSrc: 'images/toronto.png', city:'Toronto', modalId:'info-10', location:'Canada, Feb 2024, Nathan Phillips Square (Toronto Sign)'},

    {imageSrc: 'images/niagara falls.png',city:'Niagara Falls', modalId:'info-11', location:'Canada, Jul 2019, Niagara Falls'},
    {imageSrc: 'images/quebec city.png', city:'Quebec City', modalId:'info-12', location:'Canada, Mar 2023, Le Château Frontenac'},
    {imageSrc: 'images/montreal.png', city:'Montreal', modalId:'info-13', location:'Canada, Mar 2023, Amphitrite'},
    {imageSrc: 'images/Madrid.png', city:'Madrid', modalId:'info-14', location:'Spain, Dec 2019, Plaza Mayor'},
    {imageSrc: 'images/amsterdam.png', city:'Amsterdam', modalId:'info-15', location:'Netherlands, Jan 2019, Royal Palace Amsterdam (Koninklijk Paleis Amsterdam)'},

    {imageSrc: 'images/salzburg.png', city:'Salzburg', modalId:'info-16', location:'Austria, Dec 2018, Mirabell Palace'},
    {imageSrc: 'images/hallstatt.png', city:'Hallstatt', modalId:'info-17', location:'Austria, Dec 2018, Hallstatt Skywalk'},
    {imageSrc: 'images/brussels.png', city:'Brussels', modalId:'info-18', location:'Belgium, Jan 2019, Manneken Pis'},
    {imageSrc: 'images/barcelona.png', city:'Barcelona', modalId:'info-19', location:'Spain, Jan 2020, Park Güell'},
    {imageSrc: 'images/oslo.png', city:'Oslo', modalId:'info-20', location:'Norway, Jul 2017, The Vigeland Park'},

    {imageSrc: 'images/copenhagen.png', city:'Copenhagen', modalId:'info-21', location:'Denmark, Jul 2017, Copenhagen City Hall'},
    {imageSrc: 'images/helsinki.png', city:'Helsinki', modalId:'info-22', location:'Finland, Jul 2017, Senate Square'},
    {imageSrc: 'images/lisbon.png', city:'Lisbon', modalId:'info-23', location:'Portugal, Dec 2019, Miradouro da Senhora do Monte'},
    {imageSrc: 'images/moscow.png', city:'Moscow', modalId:'info-24', location:'Russia, Jul 2017, St. Basil’s Cathedral'},
    {imageSrc: 'images/seoul.png', city:'Seoul', modalId:'info-25', location:'South Korea, Nov 2021, Lotte World'},

    {imageSrc: 'images/incheon.png', city:'Incheon', modalId:'info-26', location:'South Korea, Feb 2021, Songdo Central Park'},
    {imageSrc: 'images/jeju.png', city:'Jeju', modalId:'info-27', location:'South Korea, Jun 2021, Gwakji Beach '},

];

const containerEl = document.querySelector("#blocks_container");
const popUpDisplay = document.getElementById("pop-up-data");

function createBlocks() {
  containerEl.innerHTML = "";

  blockData.forEach((data, i) => {
    let blockEl = `
        <div class="block block-c" data-modal="${data.modalId}" data-location="${data.location}" data-city="${data.city}">
          <div class="block-pics">
            <img src="${data.imageSrc}" alt="${data.city}">
          </div>
          <div class="block-text">
            <span>${data.city}</span>
          </div>
        </div>
    `;

    containerEl.insertAdjacentHTML('beforeend', blockEl);
  });
}

createBlocks();

const blockList = document.querySelectorAll(".block-c");

blockList.forEach((block) => {
  block.addEventListener("click", (event) => {
    const city = block.dataset.city;
    const location = block.dataset.location;
    const imageSrc = block.querySelector('img').src;
    activatePopUp(city,location, imageSrc);
  });
});

const activatePopUp = function (city,location, imageSrc) {
  const popUp = document.getElementById("pop-up-wrapper");
  popUp.style.display = "block";

  popUpDisplay.innerHTML = `
  <h2>${city}</h2>
  <p>${location}</p>
  <img src="${imageSrc}" alt="Location Image" class="popup-image">
  `;
};

