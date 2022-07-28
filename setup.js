const canvas = document.getElementById('canvas1');
const ctx1 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
canvas2.width = 600;
canvas2.height = 600;

const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');
canvas3.width = 600;
canvas3.height = 600;

const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas4.getContext('2d');
canvas4.width = 600;
canvas4.height = 600;

const canvas5 = document.getElementById('canvas5');
const ctx5 = canvas5.getContext('2d');
canvas5.width = 600;
canvas5.height = 600;

// global variables
const grid = 10; // size
let keys = []; // keybord key
let score = 0; // Score
let highScore = 0; //High Score saved
let collisionsCount = 0; // count colissions
let frame = 0; // for a special event in every quantity of frames
let gameSpeed = 1; // speed of the game

const particlesArray = []; // particles and special effects
const maxParticles = 300; // how many we creat the particles
const ripplesArray = []; // help with the particles objects
const carsArray = []; // random cars
const logsArray = []; // random danger

const cars = new Image();
cars.src = 'cars1.png';
let numberOfCars = 3;

const bus = new Image();
bus.src = 'cars2.png';
let numberOfBus = 2;

const collisions = new Image();
collisions.src = 'chicken_stroke.png';

const carPositionRight = [{x:0,y:0},{x:0,y:80}, {x:0,y:160}];
const carPositionleft = [{x:160,y:0},{x:160,y:80}, {x:160,y:160}];

const busPositionRight = [{x:0,y:0}];
const busPositionleft = [{x:0,y:95}];

const chichenSprite = new Image();
chichenSprite.src = 'ChickenSheet2.png';

const audio = new Audio("highway.mp3") ;
const audioChicken = new Audio("chickens.wav") ;
