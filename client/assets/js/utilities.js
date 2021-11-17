// Returns URL query params as object
export function getParams() {
    return location.search
      .substring(1)
      .split("&")
      .reduce((acc, curr) => {
        const [key, value] = curr.split("=");
  
        acc[key] = value;
        return acc;
      }, {});
  }


export function removeSpecialCharsFromString(str) {
    return str.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").replace(/\s/g, "");
  }