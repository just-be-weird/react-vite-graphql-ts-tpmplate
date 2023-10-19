const API_BASE = 'https://rickandmortyapi.com/api';
/**
 * API Docs
 * @see https://rickandmortyapi.com/documentation/#episode
 */
export const GET_ALL_EPISODES = `${API_BASE}/episode`;

/**
 * Get a single character by adding the `id` as a parameter: /character/2
 * @see https://rickandmortyapi.com/documentation/#get-a-single-character
 */
export const getCharacter = (id: number) => `${API_BASE}/character/${id}`;

export const dummyCharacter = {
  __typename: 'Character',
  id: '1',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  name: 'Rick Sanchez',
};
