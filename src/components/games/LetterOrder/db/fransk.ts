/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameContent, Grade } from '../../../../types';

export const FRANSK_LETTERORDER: Partial<Record<Grade, GameContent[]>> = {
  0: [
    { id: 'fr0-lo1', type: 'LetterOrder', question: 'Épelle "Chat"', answer: 'chat', instruction: 'Un petit animal' },
    { id: 'fr0-lo2', type: 'LetterOrder', question: 'Épelle "Chien"', answer: 'chien', instruction: 'Un animal fidèle' },
    { id: 'fr0-lo3', type: 'LetterOrder', question: 'Épelle "Maison"', answer: 'maison', instruction: 'Où on habite' }
  ],
  1: [
    { id: 'fr1-lo1', type: 'LetterOrder', question: 'Épelle "Pomme"', answer: 'pomme', instruction: 'Un fruit' },
    { id: 'fr1-lo2', type: 'LetterOrder', question: 'Épelle "École"', answer: 'école', instruction: 'Lieu d\'apprentissage' },
    { id: 'fr1-lo3', type: 'LetterOrder', question: 'Épelle "Pain"', answer: 'pain', instruction: 'On le mange' }
  ],
  2: [
    { id: 'fr2-lo1', type: 'LetterOrder', question: 'Épelle "Jardin"', answer: 'jardin', instruction: 'Derrière la maison' },
    { id: 'fr2-lo2', type: 'LetterOrder', question: 'Épelle "Météo"', answer: 'météo', instruction: 'Soleil ou pluie' }
  ],
  6: [
    { id: 'fr6-lo1', type: 'LetterOrder', question: 'Épelle "Alba"', answer: 'alba', instruction: 'Le nom de la fille' },
    { id: 'fr6-lo2', type: 'LetterOrder', question: 'Épelle "Chambre"', answer: 'chambre', instruction: 'Où on dort' },
    { id: 'fr6-lo3', type: 'LetterOrder', question: 'Épelle "Famille"', answer: 'famille', instruction: 'Les parents et enfants' },
    { id: 'fr6-lo4', type: 'LetterOrder', question: 'Épelle "Foot"', answer: 'foot', instruction: 'Un sport populaire' },
    { id: 'fr6-lo5', type: 'LetterOrder', question: 'Épelle "Salut"', answer: 'salut', instruction: 'Une salutation' },
    { id: 'fr6-lo6', type: 'LetterOrder', question: 'Épelle "Camping"', answer: 'camping', instruction: 'Dormir dehors' },
    { id: 'fr6-lo7', type: 'LetterOrder', question: 'Épelle "Musique"', answer: 'musique', instruction: 'On l’écoute' }
  ],
  7: [
    { id: 'fr7-lo1', type: 'LetterOrder', question: 'Épelle "France"', answer: 'france', instruction: 'Le pays' },
    { id: 'fr7-lo2', type: 'LetterOrder', question: 'Épelle "Paris"', answer: 'paris', instruction: 'La capitale' },
    { id: 'fr7-lo3', type: 'LetterOrder', question: 'Épelle "Langue"', answer: 'langue', instruction: 'On la parle' },
    { id: 'fr7-lo4', type: 'LetterOrder', question: 'Épelle "Croissant"', answer: 'croissant', instruction: 'Une viennoiserie' },
    { id: 'fr7-lo5', type: 'LetterOrder', question: 'Épelle "Boulanger"', answer: 'boulanger', instruction: 'Il fait le pain' },
    { id: 'fr7-lo6', type: 'LetterOrder', question: 'Épelle "Neige"', answer: 'neige', instruction: 'Elle est blanche' },
    { id: 'fr7-lo7', type: 'LetterOrder', question: 'Épelle "Peinture"', answer: 'peinture', instruction: 'L’art de Monet' }
  ],
  8: [
    { id: 'fr8-lo1', type: 'LetterOrder', question: 'Épelle "Voyage"', answer: 'voyage', instruction: 'Aller ailleurs' },
    { id: 'fr8-lo2', type: 'LetterOrder', question: 'Épelle "Santé"', answer: 'santé', instruction: 'Etre en forme' },
    { id: 'fr8-lo3', type: 'LetterOrder', question: 'Épelle "Nature"', answer: 'nature', instruction: 'Arbres et animaux' },
    { id: 'fr8-lo4', type: 'LetterOrder', question: 'Épelle "Québec"', answer: 'québec', instruction: 'Une province' },
    { id: 'fr8-lo5', type: 'LetterOrder', question: 'Épelle "Suisse"', answer: 'suisse', instruction: 'Un pays neutre' },
    { id: 'fr8-lo6', type: 'LetterOrder', question: 'Épelle "Robot"', answer: 'robot', instruction: 'Machine intelligente' },
    { id: 'fr8-lo7', type: 'LetterOrder', question: 'Épelle "Mode"', answer: 'mode', instruction: 'Coco Chanel' }
  ],
  9: [
    { id: 'fr9-lo1', type: 'LetterOrder', question: 'Épelle "Futur"', answer: 'futur', instruction: 'Ce qui va arriver' },
    { id: 'fr9-lo2', type: 'LetterOrder', question: 'Épelle "Monde"', answer: 'monde', instruction: 'La Terre' },
    { id: 'fr9-lo3', type: 'LetterOrder', question: 'Épelle "Liberté"', answer: 'liberté', instruction: 'Pouvoir choisir' },
    { id: 'fr9-lo4', type: 'LetterOrder', question: 'Épelle "Cinéma"', answer: 'cinéma', instruction: 'Omar Sy' },
    { id: 'fr9-lo5', type: 'LetterOrder', question: 'Épelle "Vitesse"', answer: 'vitesse', instruction: 'Tour de France' },
    { id: 'fr9-lo6', type: 'LetterOrder', question: 'Épelle "Océan"', answer: 'océan', instruction: 'L’île Maurice' },
    { id: 'fr9-lo7', type: 'LetterOrder', question: 'Épelle "Espace"', answer: 'espace', instruction: 'Le vide sidéral' }
  ]
};
