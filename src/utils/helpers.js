export function removeHyphen(string) {
  const str = string.replace(/-/g, ' ');
  return str;
}

export function capitalize(string) {
  const str = string.charAt(0).toUpperCase() + string.slice(1);
  return str;
}
