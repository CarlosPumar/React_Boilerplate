import { BASE_URL } from '../../utils/constants';

const getAll = async () => {
  const request = await fetch(BASE_URL, { method: 'GET' });
  return request.data;
};

const post = async (newObject) => {
  const request = await fetch(BASE_URL, {
    method: 'POST',
    body: JSON.stringify(newObject),
  });
  return request.data;
};

const put = async (newObject) => {
  const url = `${BASE_URL}/${newObject.id}`;

  const request = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(newObject),
  });
  return request.data;
};

const remove = async (id) => {
  const url = `${BASE_URL}/${id}`;

  const request = await fetch(url, { method: 'DELETE' });
  return request.data;
};

export default { getAll, post, put, remove };
