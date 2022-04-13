export function removeHyphen(string) {
  const str = string.replace(/-/g, ' ');
  return str;
}

export function capitalize(string) {
  const str = string.charAt(0).toUpperCase() + string.slice(1);
  return str;
}

export function getNextEvolution(name, chain) {
  const chainLevel1 = chain && chain?.evolves_to.map((pokemon) => pokemon);
  const chainLevel2 = chain && chain?.evolves_to[0]?.evolves_to;

  if (name === chainLevel1[0]?.species?.name.toString()) {
    return chainLevel2[0];
  }

  if (name === chainLevel2[0]?.species?.name.toString()) {
    return null;
  }

  return chainLevel1[0];
}
