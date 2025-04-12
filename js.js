const getByClass = (className) => document.getElementsByClassName(className);
const getById = (id) => document.getElementById(id);
const createElement = (element) => document.createElement(element);
const appendChild = (parent, child) => parent.appendChild(child);
const removeChild = (parent, child) => parent.removeChild(child);
const addClass = (element, className = '') => element.classList.add(className);
const removeClass = (element, className) => element.classList.remove(className);
const toggleClass = (element, className) => element.classList.toggle(className);
const select = (selector) => document.querySelector(selector);
const selectAll = (selector) => document.querySelectorAll(selector);
const textContent = (element, text) => (element.textContent = text);

const click = 'click';
const keyup = 'keyup';
const flexActive = 'flex-active';
const flexInactive = 'flex-inactive';

const entrySelectContainer = getById('entry-select-container');
const rocksContainer = getById('rocks-parent');
const gasesContainer = getById('gases-parent');
const staplesContainer = getById('staples-parent');
const parentTogglers = getByClass('parent-toggler');
const tempExit = getById('temp-exit');
const groupName = getById('group-name');

const rockGroup = 'The Rocks';
const giantGroup = 'The Giants';
const staplesGroup = 'Galaxy Staples';
const defaultName = 'Select Planet Type To View';

const [temp, rocks, gases, staples] = parentTogglers;

const groupViewSelect = (toggler, container, name) => {
	toggler.addEventListener(click, () => {
		if (!container.classList.contains(flexActive)) {
			toggleClass(entrySelectContainer, flexInactive);
			toggleClass(container, flexActive);
			textContent(groupName, name);
			toggleClass(temp, flexActive);
		}
	});

	tempExit.addEventListener(click, () => {
		if (container.classList.contains(flexActive)) {
			toggleClass(entrySelectContainer, flexInactive);
			toggleClass(container, flexActive);
			textContent(groupName, defaultName);
			toggleClass(temp, flexActive);
		}
	});
};

groupViewSelect(rocks, rocksContainer, rockGroup);
groupViewSelect(gases, gasesContainer, giantGroup);
groupViewSelect(staples, staplesContainer, staplesGroup);

const planetData = {
	mercury: {
		position: '1',
		type: 'Terrestrial',
		circumference: '9,525 miles',
		rotation: '59 Days',
		orbitalPeriod: '88 Days',
		moonCount: '0',
		sunDistance: '36 Million Miles',
		earthDistance: '61.788 million miles',
		namedAfter: 'The Roman Messenger God',
		surfaceTemp: '332F',
		tilt: '~0.01 deg',
	},

	venus: {
		position: '2',
		type: 'Terrestrial',
		circumference: '23,628 miles',
		rotation: '243 Days',
		orbitalPeriod: '225 Days',
		moonCount: '0',
		sunDistance: '67.2 million Miles',
		earthDistance: '25,724,767 miles',
		namedAfter: 'The Roman Goddess of Love',
		surfaceTemp: '864F',
		tilt: '23 degrees',
	},
	earth: {
		position: '3',
		type: 'Terrestrial',
		circumference: '24,901 miles',
		rotation: '24 Hours',
		orbitalPeriod: '365 Days',
		moonCount: '1',
		sunDistance: '93 million miles',
		earthDistance: '0 miles',
		namedAfter: 'Mother Earth',
		surfaceTemp: '59F',
		tilt: '23 degrees',
	},

	mars: {
		position: '4',
		type: 'Terrestrial',
		circumference: '13,300 miles',
		rotation: '24 Hours',
		orbitalPeriod: '687 Days',
		moonCount: '2',
		sunDistance: '141.6 million miles',
		earthDistance: '516.7 million miles',
		namedAfter: 'The Roman God of War',
		surfaceTemp: '-80F',
		tilt: '25 degrees',
	},

	jupiter: {
		position: '5',
		type: 'Gas Giant',
		circumference: '278,985 miles',
		rotation: '10 hours',
		orbitalPeriod: '12 Years',
		moonCount: '95',
		sunDistance: '483.7 million miles',
		earthDistance: '390,674,710 miles',
		namedAfter: 'The Roman God of the Sky and Thunder',
		surfaceTemp: '-234F',
		tilt: '3 degrees',
	},

	saturn: {
		position: '6',
		type: 'Gas Giant',
		circumference: '278,985 miles',
		rotation: '10 Hours',
		orbitalPeriod: '29 Years',
		moonCount: '274',
		sunDistance: '889.8 million miles',
		earthDistance: 'avg: 976.92 million miles ',
		namedAfter: 'The Roman God of Agriculture and Wealth',
		surfaceTemp: '-288F',
		tilt: '26 degrees',
	},

	uranus: {
		position: '7',
		type: 'Ice Giant',
		circumference: '132,630 miles ',
		rotation: '17 Hours',
		orbitalPeriod: '84 years',
		moonCount: '28',
		sunDistance: '1.8 billion miles',
		earthDistance: '1.8891 billion miles',
		namedAfter: 'The Greek God of the Sky',
		surfaceTemp: '-357F',
		tilt: '97 degrees',
	},
	neptune: {
		position: '8',
		type: 'Ice Giant',
		circumference: '132,630 miles',
		rotation: '16 Hours',
		orbitalPeriod: '165 Years',
		moonCount: '16',
		sunDistance: '2.7782 billion miles',
		earthDistance: 'avg: 2.8665 billion miles',
		namedAfter: 'The Roman God of the Sea',
		surfaceTemp: '-357F',
		tilt: '28 degrees',
	},
	pluto: {
		position: '9',
		type: 'Dwarf Planet',
		circumference: '4,627 miles',
		rotation: '7 Days',
		orbitalPeriod: '248 Years',
		moonCount: '5',
		sunDistance: '3.67 billion Miles',
		earthDistance: '3.299 billion miles',
		namedAfter: 'The Roman god of the Underworld',
		surfaceTemp: '-387F',
		tilt: '23 degrees',
	},
	moon: {
		position: 'At Earth',
		type: 'Moon',
		circumference: '7,590 miles',
		rotation: '27 Days',
		orbitalPeriod: '27 Days',
		moonCount: '0',
		sunDistance: '92 million miles',
		earthDistance: '238,900 miles',
		namedAfter: 'Luna',
		surfaceTemp: '42F (extreme variation)',
		tilt: '6 degrees',
	},
	sun: {
		position: `I Am`,
		type: 'Yellow Dwarf Star',
		circumference: '2,715,396 miles',
		rotation: '27 Days',
		orbitalPeriod: '250 Million Years',
		moonCount: 'Millions of Orbital Objects',
		sunDistance: '0',
		earthDistance: '93 million miles',
		namedAfter: ' SOL',
		surfaceTemp: '5,800 kelvin',
		tilt: '7 degrees',
	},

	milkyWay: {
		position: 'Host Of',
		type: 'Spiral Galaxy',
		circumference: '314,000 Light Years',
		rotation: '700 Million Years',
		orbitalPeriod: '250 Million Years',
		moonCount: 'Billions of Orbital Objects',
		sunDistance: '26,000 Light Years From The Center',
		earthDistance: '26,000 Light Years From Center',
		namedAfter: ' The Milky WAy',
		surfaceTemp: '2.725 kelvin',
		tilt: '60 degrees',
	},
};

const {
	mercury,
	venus,
	earth,
	mars,
	jupiter,
	saturn,
	uranus,
	neptune,
	pluto,
	sun,
	moon,
	milkyWay,
} = planetData;

const toggler = selectAll('.planet-toggler');
const planetContainer = selectAll('.planet-container');

const [
	toggleMercury,
	toggleVenus,
	toggleEarth,
	toggleMars,
	toggleJupiter,
	toggleSaturn,
	toggleUranus,
	toggleNeptune,
	togglePluto,
	toggleSun,
	toggleMoon,
	toggleMilkyWay,
] = toggler;

const [
	contMercury,
	contVenus,
	contEarth,
	contMars,
	contJupiter,
	contSaturn,
	contUranus,
	contNeptune,
	contPluto,
	contSun,
	contMoon,
	contMilkyWay,
] = planetContainer;

const factsWrappers = selectAll('.facts-wrapper');
const factsSpan = selectAll('.facts-span');

console.log(factsSpan);

const planetFacts = (arr, obj) => {
	textContent(arr[0], `Circumference: ${obj.circumference}`);
	textContent(arr[1], `Rotation: ${obj.rotation}`);
	textContent(arr[2], `Orbital Period: ${obj.orbitalPeriod}`);
	textContent(arr[3], `Surface Temp: ${obj.surfaceTemp}`);
	textContent(arr[4], `Moon Count: ${obj.moonCount}`);
	textContent(arr[5], `Axis Tilt: ${obj.tilt}`);
	textContent(arr[6], `Distance From Earth: ${obj.earthDistance}`);
	textContent(arr[7], `Distance From The Sun: ${obj.sunDistance}`);
};

const viewPlanets = (toggler, targetContainer, container2, container3, container4, obj) => {
	const open = 'open-container';
	const nameSpan = select('.name-span');
	const typeSpan = select('.type-span');
	const positionContainer = select('.position-container');
	const positionSpan = select('.position-span');

	toggler.addEventListener(click, () => {
		if (!targetContainer.classList.contains(open)) {
			toggleClass(targetContainer, open);
			toggleClass(container2, flexInactive);
			toggleClass(container3, flexInactive);
			toggleClass(container4, flexInactive);
			toggleClass(nameSpan, flexActive);
			toggleClass(typeSpan, flexActive);
			toggleClass(positionContainer, flexActive);
			for (let show of factsWrappers) {
				toggleClass(show, flexActive);
			}
			planetFacts(factsSpan, obj);
			textContent(toggler, 'Close Window');
			textContent(nameSpan, obj.namedAfter);
			textContent(typeSpan, obj.type);
			temp.style.visibility = 'hidden';
			textContent(positionSpan, obj.position);
		} else {
			toggleClass(targetContainer, open);
			toggleClass(container2, flexInactive);
			toggleClass(container3, flexInactive);
			toggleClass(container4, flexInactive);
			for (let show of factsWrappers) {
				toggleClass(show, flexActive);
			}
			toggleClass(positionContainer, flexActive);

			textContent(toggler, 'View More');
			toggleClass(nameSpan, flexActive);
			toggleClass(typeSpan, flexActive);
			temp.style.visibility = 'visible';
		}
	});
};

//``The Rocks Containers
viewPlanets(toggleMercury, contMercury, contVenus, contEarth, contMars, mercury);
viewPlanets(toggleVenus, contVenus, contMercury, contEarth, contMars, venus);
viewPlanets(toggleEarth, contEarth, contMercury, contVenus, contMars, earth);
viewPlanets(toggleMars, contMars, contMercury, contVenus, contEarth, mars);

//``The Gas Containers
viewPlanets(toggleJupiter, contJupiter, contSaturn, contUranus, contNeptune, jupiter);
viewPlanets(toggleSaturn, contSaturn, contJupiter, contUranus, contNeptune, saturn);
viewPlanets(toggleUranus, contUranus, contJupiter, contSaturn, contNeptune, uranus);
viewPlanets(toggleNeptune, contNeptune, contJupiter, contSaturn, contUranus, neptune);

//``The Staples
viewPlanets(togglePluto, contPluto, contSun, contMoon, contMilkyWay, pluto);
viewPlanets(toggleSun, contSun, contPluto, contMoon, contMilkyWay, sun);
viewPlanets(toggleMoon, contMoon, contPluto, contSun, contMilkyWay, moon);
viewPlanets(toggleMilkyWay, contMilkyWay, contPluto, contSun, contMoon, milkyWay);
