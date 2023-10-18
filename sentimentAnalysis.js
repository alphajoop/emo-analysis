/**
 * Fonction pour analyser le sentiment du texte.
 * @param {string} text - Le texte à analyser.
 * @returns {string} - Le résultat de l'analyse de sentiment.
 */
export function analyzeSentiment(text) {
  // Liste des mots considérés comme positifs et négatifs
  const positiveWords = ['heureux', 'content', 'satisfait', 'positif'];
  const negativeWords = ['triste', 'fâché', 'déçu', 'négatif'];

  // Compter le nombre de mots positifs et négatifs
  const wordCounts = new Map();
  wordCounts.set('positive', 0);
  wordCounts.set('negative', 0);

  // Diviser le texte en mots et les convertir en minuscules pour la comparaison
  const words = text.toLowerCase().split(' ');

  // Parcourir chaque mot et compter les occurrences de mots positifs et négatifs
  for (const word of words) {
    if (positiveWords.includes(word)) {
      wordCounts.set('positive', wordCounts.get('positive') + 1);
    } else if (negativeWords.includes(word)) {
      wordCounts.set('negative', wordCounts.get('negative') + 1);
    }
  }

  // Récupérer le nombre de mots positifs et négatifs
  const positiveCount = wordCounts.get('positive');
  const negativeCount = wordCounts.get('negative');

  // Déterminer le sentiment en fonction du nombre de mots positifs et négatifs
  if (positiveCount > negativeCount) {
    return 'Sentiment positif';
  } else if (negativeCount > positiveCount) {
    return 'Sentiment négatif';
  } else {
    return 'Sentiment neutre';
  }
}
