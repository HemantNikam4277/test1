import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const setAxiosHeaders = (token) => {
  // if (token) {
  //   axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  // } else {
  //   delete axios.defaults.headers.common['Authorization'];
  // }
};

async function login(identifier, password) {
  const { data } = await axios.post('/auth/local', {
    identifier,
    password,
  });
  return data;
}

async function getCards() {
  const { data } = await axios.get('/nft-cards');
  return data;
}

async function getListingCards() {
  const { data } = await axios.get('/nft-cards/listing');
  return data;
}

async function getUserCards(token) {
  const { data } = await axios.get('/nft-cards/user', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return data;
}

async function listForSale(token, tokenId, price) {
  const { data } = await axios.post(
    '/nft-cards/listing',
    {
      tokenId,
      price,
    },
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  );
  return data;
}

async function unListing(token, tokenId) {
  const { data } = await axios.put(
    '/nft-cards/listing',
    {
      tokenId,
    },
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  );
  return data;
}

async function getUri(uri) {
  const { data } = await axios.get(uri);
  return data;
}

async function updateWallet(wallet, token) {
  const { data } = await axios.put(
    '/nft-cards/wallet',
    {
      wallet,
    },
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  );
  return data;
}

export default {
  setAxiosHeaders,
  login,
  getCards,
  getListingCards,
  listForSale,
  unListing,
  getUri,
  updateWallet,
  getUserCards,
};
