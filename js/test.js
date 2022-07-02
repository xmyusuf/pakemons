var elWrapper = document.querySelector('.wrapper');
var elSelect = document.querySelector('.js-select');

function domgaChiqarator(array, node) {
  for (element of array) {
    var elInner = document.createElement('div');
    var elImg = document.createElement('img');
    var elId = document.createElement('p');
    var elName = document.createElement('p');
    var elType = document.createElement('p');
    var elHeight = document.createElement('p');
    var elWeight = document.createElement('p');

    elInner.classList = "inner";
    elImg.classList = "img";
    elImg.src = element.img;
    elImg.alt = "Pokemon images";
    elId.classList = "id"
    elId.textContent = `ID: ${element.id}`;
    elName.classList = "name"
    elName.textContent = `Name: ${element.name}`;
    elType.textContent = `Type: ${element.type}`;
    elHeight.textContent = `Height: ${element.height}`;
    elWeight.textContent = `Weight: ${element.weight}`;

    elInner.appendChild(elImg);
    elInner.appendChild(elId);
    elInner.appendChild(elName);
    elInner.appendChild(elType);
    elInner.appendChild(elHeight);
    elInner.appendChild(elWeight);
    node.appendChild(elInner);

  }
}

domgaChiqarator(pokemons, elWrapper);

let result = [];

elSelect.addEventListener('change', function () {
  result = [];
  elWrapper.innerHTML = "";
  let selectVal = elSelect.value;

  pokemons.forEach((el) => {
    if (el.type.includes(selectVal)) {
      result.push(el);
    }
  })

  domgaChiqarator(result, elWrapper);
})

const optionList = new Set();

pokemons.forEach(pokemon => {
  pokemon.type.forEach(properties => {
    optionList.add(properties);
  })
})

optionList.forEach(property => {
  let newOption = document.createElement('option');
  newOption.textContent = property;
  elSelect.appendChild(newOption);
})