import URL from "./settings";
let loggedIn = false;

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() })
  }
  return res.json();
}

function apiFacade() {
  /* Insert utility-methods from a later step (d) here (REMEMBER to uncomment in the returned object when you do)*/
  const setToken = (token) => {
    localStorage.setItem('jwtToken', token)
  }
  const getToken = () => {
    return localStorage.getItem('jwtToken')
  }

  const loggedIn = () => {
    return getToken() != null;
  }
  const logout = () => {
    loggedIn();
    localStorage.removeItem("jwtToken");
  }


  const login = (user, password) => {
    const options = makeOptions("POST", true, { username: user, password: password });
    loggedIn();
    return fetch(URL + "/api/login", options)
      .then(handleHttpErrors)
      .then(res => { setToken(res.token) })
  }
  const fetchUserInfo = async () => {
    const options = makeOptions("GET", true); //True add's the token
    const res = await fetch(URL + "/api/info/userinfo", options);
    const data = await res.json()
    return data;
  }

  const fetchFavorites = () => {
    const options = makeOptions("GET", true);
    return fetch(URL + "/api/info/favorites", options).then(handleHttpErrors);
  }

  

  const fetchCat = () => {
    const options = makeOptions("GET", true); //True add's the token
    return fetch(URL + "/api/cat/cat", options).then(handleHttpErrors);
  }

  const fetchDog = () => {
    const options = makeOptions("GET", true); //True add's the token
    return fetch(URL + "/api/dog/dog", options).then(handleHttpErrors);
  }

  const addFavorites = (data) => {
    const options = makeOptions("PUT", true, data)
    console.log(data);
    return fetch(URL + "/api/info/addfavorite", options)
      .then(handleHttpErrors)
      .then(res => res.json())
  }

  const removeFavorites = (data) => {
    const options = makeOptions("DELETE", true, data)
    console.log(data);
    return fetch(URL + "/api/info/removefavorite", options)
      .then(handleHttpErrors)
      .then(res => res.json())
  }

  const create = (username, password) => {
    const options = makeOptions("POST", true, { userName: username, userPass: password }); //True add's the token
    console.log(username + " " + password);
    return fetch(URL + "/api/info/newuser", options)
      .then(handleHttpErrors)
      .then(res => { setToken(res.token) })
  }

  const makeOptions = (method, addToken, body) => {
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        'Accept': 'application/json',
      }
    }
    if (addToken && loggedIn()) {
      opts.headers["x-access-token"] = getToken();
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  }
  return {
    makeOptions,
    setToken,
    getToken,
    loggedIn,
    login,
    logout,
    fetchUserInfo,
    fetchFavorites,
    fetchCat,
    fetchDog,
    addFavorites,
    removeFavorites,
    create,
  }
}
const facade = apiFacade();
export default facade;
