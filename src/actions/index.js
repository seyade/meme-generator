import { username, password } from './secrets';

export const RECEIVE_MEMES = 'RECEIVE_MEMES';
export const NEW_MEME = 'NEW_MEME';

export const receiveMemes = json => {
  const { memes } = json.data;

  return {
    type: RECEIVE_MEMES,
    memes,
  };
};

const fetchMemesJson = () =>
  fetch(`https://api.imgflip.com/get_memes`)
    .then(response => response.json())
    .catch(error => console.log('FETCH_MEMES_JSON ERROR: ', error));

export const fetchMemes = () => dispatch =>
  fetchMemesJson()
    .then(json => dispatch(receiveMemes(json)))
    .catch(error => console.log('FETCH_MEMES ERROR: ', error));

export const newMeme = meme => {
  console.log('MY_MEME!!!!!!', meme);

  return {
    type: NEW_MEME,
    meme,
  };
};

export const postMemeJson = params => {
  params['username'] = username;
  params['password'] = password;

  const bodyParams = Object.keys(params)
    .map(key => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    })
    .join('&');

  console.log('BODY_PARAMS!!!!!!', bodyParams);

  return fetch(`https://api.imgflip.com/caption_image`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: bodyParams,
  })
    .then(response => response.json())
    .catch(error => console.log('POST_MEME_JSON ERROR: ', error));
};

export const createMeme = newMemeObject => dispatch => {
  return postMemeJson(newMemeObject)
    .then(memeObject => dispatch(newMeme(memeObject)))
    .catch(error => console.log('CREATE_MEME ERROR: ', error));
};
