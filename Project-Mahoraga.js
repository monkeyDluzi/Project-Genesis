const dragon = document.getElementById("Mahoraga");

const brain = {
    name: "Mahoraga",
    health: 100,

    x: 100,
    y: 100,

    enemyX: 300,
    enemyY: 200,
    enemyHealth: 100,
    enemyAttackDamage: 25,
    enemyDamageTaken: 0
};

// make it visible on screen
dragon.style.position = "absolute";

function updateDragon() {
    dragon.style.left = brain.x + "px";
    dragon.style.top = brain.y + "px";
}

// movement logic
function think() {
    brain.x += 2; // moves right slowly
}

function think() {
    let distance = brain.enemyX - brain.x;

    if (distance > 0) {
        brain.x += 2; // move right
    } else if (distance < 0) {
        brain.x -= 2; // move left
    }
}

// game loop
setInterval(() => {
    think();
    updateDragon();
}, 30);

const Sukuna = document.getElementById("Sukuna"); 
