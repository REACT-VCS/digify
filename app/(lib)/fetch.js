const GetData = async (route) => {
  try {
    let fetching = await fetch(process.env.API_URL + route);
    return fetching.json();
  } catch (e) {
    throw new Error("Data Fetching Fail!");
  }
};

export { GetData };
