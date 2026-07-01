const dragon = document.getElementById("Project-Mahoraga");

const brain = {
    name: "Project-Mahoraga",
    health: 100,

    x: 100,
    y: 100,

    enemyX: 0,
    enemyY: 0,
    enemyHealth: 100,
    enemyAttackDamage: 25,
    enemyDamageTaken: 0
};

dragon.style.position = "absolute";
dragon.style.left = brain.x + "px";
dragon.style.top = brain.y + "px";
