export function getMarginTop (elem) {
    if (elem) {
        var cs = window.getComputedStyle(elem);
        var top = parseInt(cs.marginTop);
        return (top);
    };
    return (9999);
}
export function getMarginLeft (elem) {
    if (elem) {
        var cs = window.getComputedStyle(elem);
        var left = parseInt(cs.marginLeft);
        return (left);
    };
    return(9999);
}
export function getRandomInt(min, max) {
      return (Math.floor(Math.random() * (max - min + 1)) + min);
}