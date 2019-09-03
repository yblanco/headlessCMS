import server from './index';

const { instance, getData } = server;

const getInfo = () => instance.get().then(getData);

export default getInfo;
