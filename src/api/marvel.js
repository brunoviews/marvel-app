import md5 from 'crypto-js/md5';


const publicKey = fbaf0388f751865f2c0944151ed0598c;
const privateKey = ac31b101d792b18200a31ad079fbdcac84edef19;
const baseURL = 'https://gateway.marvel.com/v1/public/';

const getAuthParams = () => {
    const ts = new Date().getTime();
    const hash = md5(ts + privateKey + publicKey).toString();
    return { ts, apikey: publicKey, hash };
};

export const fetchCharacters = async (nameStartsWith = '') => {
    const { ts, apikey, hash } = getAuthParams();
    const params = new URLSearchParams({
        ts,
        apikey,
        hash,
        ...(nameStartsWith && { nameStartsWith }),
        limit: 20
    });

    const response = await fetch(`${baseURL}/characters?${params}`);
    if (!response.ok) throw new Error('Error fetching characters');
    const data = await response.json();
    return data.data.results;
};