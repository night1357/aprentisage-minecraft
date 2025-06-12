document.addEventListener('DOMContentLoaded', function() {
    // Petit script pour des interactions futures
    // Par exemple, on pourrait ajouter une animation au scroll ou une fonctionnalité de menu mobile ici.

    console.log("Le site Minecraft Pro-Training est prêt !");

    // Exemple simple : si on clique sur un module, afficher un message
    const moduleItems = document.querySelectorAll('.module-item');
    moduleItems.forEach(item => {
        item.addEventListener('click', () => {
            alert("Bientôt, cette section vous guidera en détail !");
        });
    });
});
