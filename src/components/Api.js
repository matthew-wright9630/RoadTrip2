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

  addLocation(list) {
    console.log(list.coordinates);
    let locationList = "";
    let iterationNum = 0;
    list.forEach((location) => {
      locationList += `${location.coordinates}|marker-${iterationNum}||`;
      console.log(locationList, "locationList");
      iterationNum++;
    });
    console.log(locationList, "locationList");
    return fetch(
      `${this._baseUrl}?locations=${locationList}&key=${this._authToken}&center=36.778259,-119.417931&zoom=5&size=@2x`
    ).then((res) => res.url);
  }
}

export { Api };
