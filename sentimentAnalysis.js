/**
 * Fonction pour analyser le sentiment du texte en utilisant un lexique étendu.
 * @param {string} text - Le texte à analyser.
 * @returns {string} - Le résultat de l'analyse de sentiment.
 */
export function analyzeSentiment(text, sentimentScores) {
  // Diviser le texte en mots et les convertir en minuscules pour la comparaison
  const words = text.toLowerCase().split(' ');

  let totalSentimentScore = 0;

  for (const word of words) {
    if (sentimentScores.hasOwnProperty(word)) {
      totalSentimentScore += sentimentScores[word];
    }
  }

  if (totalSentimentScore > 0) {
    return 'Sentiment positif';
  } else if (totalSentimentScore < 0) {
    return 'Sentiment négatif';
  } else {
    return 'Sentiment neutre';
  }
}

// Lexique de mots et scores de sentiment
const sentimentScores = {
  heureux: 0.8,
  content: 0.7,
  satisfait: 0.6,
  positif: 0.5,
  triste: -0.8,
  fâché: -0.7,
  déçu: -0.6,
  négatif: -0.5,
};

// Exemple d'utilisation
const textToAnalyze =
  "Je suis triste et déçu, mais j'espère que demain sera meilleur.";
const result = analyzeSentiment(textToAnalyze, sentimentScores);
console.log(result); // Résultat de l'analyse de sentiment
