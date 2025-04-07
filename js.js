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

const planetData = {
	mercury: {
		position: '1',
		planetClass: { class: 'Terrestrial', type: 'Rocky' },
		circumference: '9,525 miles',
		rotation: '59 Earth Days',
		orbitalPeriod: '88 Days',
		moonCount: '0',
		sunDistance: { closest: '29 million miles', furthest: '43 million miles' },
		earthDistance: 'avg: 61.788 million miles',
		namedAfter: 'The Roman Messenger God: Mercury',
		surfaceTemp: 'avg: 332F',
		tilt: '~0.01 deg',
	},

	venus: {
		position: '2',
		planetClass: { class: 'Terrestrial', type: 'Rocky' },
		circumference: '23,628 miles',
		rotation: '243 Earth Days',
		orbitalPeriod: '225 Days',
		moonCount: '0',
		sunDistance: { closest: '66 million miles', furthest: '68 million miles' },
		earthDistance: 'avg: 25,724,767 miles',
		namedAfter: 'The Roman Goddess of Love',
		surfaceTemp: 'avg: 864F',
		tilt: '23 degrees',
	},
	earth: {
		position: '3',
		planetClass: { class: 'Terrestrial', type: 'Rocky' },
		circumference: '24,901 miles',
		rotation: '24 Hours',
		orbitalPeriod: '365 Days',
		moonCount: '1',
		sunDistance: { closest: '91 million miles', furthest: '94 million miles miles' },
		earthDistance: 'avg: 0 miles',
		namedAfter: 'Old English and Germanic: Meaning The Ground',
		surfaceTemp: 'avg: 59F',
		tilt: '23 degrees',
	},

	mars: {
		position: '4',
		planetClass: { class: 'Terrestrial', type: 'Rocky' },
		circumference: '13,300 miles',
		rotation: '24 Hours',
		orbitalPeriod: '687 Days',
		moonCount: '2',
		sunDistance: { closest: '128 million miles', furthest: '150 million miles' },
		earthDistance: 'avg: 516.7 million miles',
		namedAfter: 'The Roman God of War',
		surfaceTemp: 'avg: -80F',
		tilt: '25 degrees',
	},

	jupiter: {
		position: '5',
		planetClass: { class: 'Giant', type: 'Gas Giant' },
		circumference: '278,985 miles',
		rotation: '10 hours',
		orbitalPeriod: '12 Years',
		moonCount: '95',
		sunDistance: { closest: '4.6 million miles', furthest: '508 million miles' },
		earthDistance: 'avg: 390,674,710 miles',
		namedAfter: 'The Roman God of the Sky and Thunder',
		surfaceTemp: '-234F',
		tilt: '3 degrees',
	},

	saturn: {
		position: '6',
		planetClass: { class: 'Giant', type: 'Gas Giant' },
		circumference: '278,985 miles',
		rotation: '10 Hours',
		orbitalPeriod: '29 Years',
		moonCount: '274',
		sunDistance: { closest: '8.4 million Miles', furthest: '9.4 million miles' },
		earthDistance: 'avg: 976.92 million miles ',
		namedAfter: 'The Roman God of Agriculture and Wealth',
		surfaceTemp: '-288F',
		tilt: '26 degrees',
	},

	uranus: {
		position: '7',
		planetClass: { class: 'Giant', type: 'Ice Giant' },
		circumference: '132,630 miles ',
		rotation: '17 Hours',
		orbitalPeriod: '84 years',
		moonCount: '28',
		sunDistance: { closest: '1.7 billion miles', furthest: '1.8 billion miles' },
		earthDistance: 'avg: 1.8891 billion miles',
		namedAfter: 'The Greek God of the Sky',
		surfaceTemp: '-357F',
		tilt: '97 degrees',
	},
	neptune: {
		position: '8',
		planetClass: { class: 'Giant', type: 'Ice Giant' },
		circumference: '132,630',
		rotation: '16 Hours',
		orbitalPeriod: '165 Years',
		moonCount: '16',
		sunDistance: { closest: '2.77 billion miles', furthest: '2.83 billion miles' },
		earthDistance: 'avg: 2.8665 billion miles',
		namedAfter: 'The Roman God of the Sea',
		surfaceTemp: '-357F',
		tilt: '28 degrees',
	},
	pluto: {
		position: '9',
		planetClass: { class: 'Dwarf Planet', type: 'Dwarf' },
		circumference: '4,627 miles',
		rotation: '7 Days',
		orbitalPeriod: '248 Years',
		moonCount: '5',
		sunDistance: { closest: '2.76 billion miles', furthest: '4.58 billion miles' },
		earthDistance: 'avg: 3.299 billion miles',
		namedAfter: 'The Roman god of the Underworld',
		surfaceTemp: '-387F',
		tilt: '23 degrees',
	},
	moon: {
		position: 'Earth Satellite',
		planetClass: { class: 'Satellite', type: 'Moon' },
		circumference: '7,590 miles',
		rotation: '27 Days',
		orbitalPeriod: '27 Days',
		moonCount: '0',
		earthDistance: { closest: '225,623 miles', furthest: '252,088 miles' },
		namedAfter: 'Old English Word: mona',
		surfaceTemp: '42F (extreme variation)',
		tilt: '6 degrees',
	},
	sun: {
		position: '0',
		planetClass: { class: 'Star', type: 'Yellow Dwarf' },
		circumference: '2,715,396 miles',
		rotation: '27 Earth Days',
		orbitalPeriod: '250 Million Years',
		moonCount: 'Millions of Orbital Objects',
		sunDistance: { closest: '0', furthest: '0' },
		earthDistance: 'avg: 92 million miles',
		namedAfter: 'Derived from the Lain word Sol',
		surfaceTemp: '5,800 kelvin',
		tilt: '7 degrees',
	},
};

const { mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto, moon, sun } =
	planetData;

console.log(earth);
