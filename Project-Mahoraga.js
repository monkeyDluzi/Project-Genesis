const dragon = document.getElementById("Mahoraga");
const Sukuna = document.getElementById("Sukuna"); 

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
    brain.memory = {
    wins: 0,
    losses: 0
};
};

// make it visible on screen
dragon.style.position = "absolute";

function updateDragon() {
    dragon.style.left = brain.x + "px";
    dragon.style.top = brain.y + "px";
}

// movement logic
function think() {
    seeEnemy();

    // 🛑 SURVIVAL FIRST
    if (brain.health < LOW_HEALTH) {
        runAway();
        return;
    }

    // otherwise continue fighting logic
    chaseEnemy();
}

    return bestEnemy;
}    

    if (distance > 0) {
        brain.x += 2; // move right
    } else if (distance < 0) {
        brain.x -= 2; // move left
    }
}

function seeEnemy() {
    let target = chooseTarget();

    brain.enemyX = target.x;
    brain.enemyHealth = target.health;
}

function runAway() {
    let distance = brain.enemyX - brain.x;

    if (distance > 0) {
        brain.x -= 3; // run left
    } else {
        brain.x += 3; // run right
    }
}

function chaseEnemy() {
    let distance = brain.enemyX - brain.x;

    if (distance > 0) {
        brain.x += 2;
    } else {
        brain.x -= 2;
    }
}

function onWin() {
    brain.memory.wins++;
}


// game loop
setInterval(() => {
    think();
    updateDragon();
}, 30);




