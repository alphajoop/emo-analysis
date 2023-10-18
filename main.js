import { analyzeSentiment } from './sentimentAnalysis.js'; // Import de la fonction d'analyse de sentiment depuis un autre fichier

// Fonction pour déclencher l'analyse de sentiment depuis l'interface utilisateur
function performSentimentAnalysis() {
  const text = document.getElementById('inputText').value; // Récupération du texte à analyser depuis l'élément textarea
  const resultElement = document.getElementById('result'); // Récupération de l'élément où afficher le résultat

  if (text.trim() === '') {
    // Vérification si le texte est vide ou ne contient que des espaces
    resultElement.textContent = 'Veuillez entrer du texte.';
    return; // Arrêt de la fonction si le texte est vide
  }

  // Appel de la fonction d'analyse de sentiment avec le texte en paramètre
  const sentimentResult = analyzeSentiment(text);

  // Affichage du résultat de l'analyse de sentiment
  resultElement.textContent =
    "Résultat de l'analyse de sentiment : " + sentimentResult;
}

// Détection du clic sur le bouton et déclenchement de l'analyse de sentiment
const analyzeButton = document.querySelector('button'); // Sélection du bouton à partir de l'élément HTML
analyzeButton.addEventListener('click', performSentimentAnalysis); // Ajout d'un écouteur d'événement pour le clic sur le bouton
