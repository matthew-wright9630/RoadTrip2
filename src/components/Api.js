class Api {
  constructor(options) {
    this._options = options;
    this._baseUrl = options.baseUrl;
    this._authToken = options.headers.authorization;
  }

  getBaseMap() {
    return fetch(
      `${this._baseUrl}?key=${this._authToken}&center=36.778259,-119.417931&zoom=5&size=@2x`
    ).then((res) => {
      return res.url;
    });
  }

  setRoute(list) {
    return fetch(`https://www.mapquestapi.com/directions/v2/route/locations=${list[1].coordinates}||${list[2].coordinates}||${list[3].coordinates}||${list[4].coordinates}||${list[5].coordinates}&key=${this._authToken}`, {
      method: "POST",
      body: JSON.stringify(list.coordinates),
    });
  }

  addRoute(list) {
    return fetch(
      `https://www.mapquestapi.com/directions/v2/route&from=${list[1].coordinates}&to=${list[5].coordinates}&key=${this._authToken}&center=36.778259,-119.417931&zoom=5&size=@2x`
    )
      .then((res) => {
        console.log(res, "get route");
        return res;
      })
      .catch((err) => {
        console.log(err.message, "error message");
      });
  }

  addLocation(list, routeNum) {
    console.log(routeNum);
    let locationList = "";
    let iterationNum = 1;
    list.forEach((location) => {
      locationList += `${location.coordinates}|marker-${iterationNum}||`;
      iterationNum++;
    });
    return fetch(
      `${this._baseUrl}?start=${list[routeNum].coordinates}|marker-${routeNum+1}&end=${list[routeNum+1].coordinates}|marker-${routeNum+2}&locations=${locationList}&key=${this._authToken}&center=36.778259,-119.417931&zoom=5&size=@2x`
    ).then((res) => res.url);
  }
}

export { Api };
