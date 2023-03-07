export const getJSON = async function (url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok)
      throw new Error(`${data.message} error!!! status: ${response.status}`);
    return data;
  } catch (err) {
    throw err;
  }
};