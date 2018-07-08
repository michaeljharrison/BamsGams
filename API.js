import ERROR_CODES from './ErrorCodes';
import {
  sampleGameDataGood,
  sampleGameDataBad
} from './sampleData/sampleGameData.js';

/**
 * Function for fetching a list of games in the users library.
 * @param {int} userId - ID of the user to fetch information for.
 */
export const getUserLibrary = userId => {
  return new Promise((resolve, reject) => {
    // @TODO -> Implement API
    const response = sampleGameDataGood;

    // Send a request to the back end to get user information
    if (response.errorCode === ERROR_CODES.SUCCESS) {
      resolve(response.userLibrary);
    } else {
      reject(response.errorCode);
    }
  });
};

/**
 * Function for fetching the count of games in a users library.
 * @param {int} userId - ID of the user to fetch information for.
 */
export const getUserLibraryCount = userId => {
  return new Promise((resolve, reject) => {
    // @TODO -> Implement API
    const response = sampleGameDataGood;

    // Send a request to the back end to get user information
    if (response.errorCode === ERROR_CODES.SUCCESS) {
      resolve(response.userLibrary.length);
    } else {
      reject(response.errorCode);
    }
  });
};

/**
 * Function for fetching basic information for a title.
 * @param {int} gameId - ID of the game to fetch information for.
 */
export const getBasicGameInformation = gameId => {
  return new Promise((resolve, reject) => {
    // @TODO -> Implement API
    const response = sampleGameDataGood.userLibrary[0];

    // Send a request to the back end to get user information
    // @TODO -> Error handling
    if (true) {
      resolve(response);
    } else {
      reject(response.errorCode);
    }
  });
};
