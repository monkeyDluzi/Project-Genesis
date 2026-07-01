const dragon = document.getElementById("Project-Mahoraga");

const brain = {
    name: "Project-Mahoraga",
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

// game loop
setInterval(() => {
    think();
    updateDragon();
}, 30);
