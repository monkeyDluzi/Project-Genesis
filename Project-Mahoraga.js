const dragon = document.getElementById("Mahoraga");
const sukuna = document.getElementById("Sukuna");
const ATTACK_RANGE = 50;
const DAMAGE = 10;
const LOW_HEALTH = 30;

const brain = {
    name: "Mahoraga",
    health: 100,

    x: 100,
    y: 100,

    enemyX: 300,
    enemyY: 200,
    enemyHealth: 100,
    enemyAttackDamage: 25,
    enemyDamageTaken: 0,

    memory: {
        wins: 0,
        losses: 0
    }
};

dragon.style.position = "absolute";

function updateDragon() {
    dragon.style.left = brain.x + "px";
    dragon.style.top = brain.y + "px";
}

function think() {
    seeEnemy();

    if (brain.health < LOW_HEALTH) {
        runAway();
        return;
    }

    chaseEnemy();


function seeEnemy() {
    brain.enemyX = parseInt(sukuna.style.left || 0);
    brain.enemyY = parseInt(sukuna.style.top || 0);
}


function runAway() {
    let distance = brain.enemyX - brain.x;

    if (distance > 0) {
        brain.x -= 3;
    } else {
        brain.x += 3;
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

function getDistance() {
    return Math.abs(brain.enemyX - brain.x);
}

function attack() {
    if (getDistance() < ATTACK_RANGE) {
        brain.enemyHealth -= DAMAGE;
    }
}

function enemyAttack() {
    brain.health -= brain.enemyAttackDamage;
}

function think() {
    seeEnemy();

    if (brain.health <= 0) {
        onLose();
        return;
    }

    if (brain.enemyHealth <= 0) {
        onWin();
        return;
    }

    if (brain.health < LOW_HEALTH) {
        runAway();
        return;
    }

    chaseEnemy();

    attack();
}    

setInterval(() => {
    think();
    updateDragon();
}, 30);





