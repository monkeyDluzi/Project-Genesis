const brain = {
    // Identity
    name: "Project-Mahoraga",
    health: 100,

    // Self info 
    x: 0,
    y: 0,

    // Enemy info 
    enemyX: 0,
    enemyY: 0,
    enemyHealth: 100,
    enemyAttackDamage: 25,
    enemyDamageTaken: 0
};

const dragon = document.getElementById("Project-Mahoraga");

dragon.style.position = "absolute";
dragon.style.left = "100px";
dragon.style.top = "100px";
