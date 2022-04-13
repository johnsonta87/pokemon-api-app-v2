export function removeHyphen(string) {
  const str = string.replace(/-/g, ' ');
  return str;
}

export function capitalize(string) {
  const str = string.charAt(0).toUpperCase() + string.slice(1);
  return str;
}

export function getPreviousEvolution(name, chain) {
  // we assume maximum 3 levels of chain for now
  const chainLevel1 =
    chain &&
    chain?.evolves_to.length > 0 &&
    chain?.evolves_to.map((pokemon) => pokemon);
  const chainLevel2 =
    chain && chain?.evolves_to.length > 0 && chain?.evolves_to[0]?.evolves_to;

  if (name === chainLevel2[0]?.species?.name.toString()) {
    return chainLevel1[0];
  }

  if (name === chainLevel1[0]?.species?.name.toString()) {
    return chain;
  }

  return null;
}

export function getNextEvolution(name, chain) {
  // we assume maximum 3 levels of chain for now
  const chainLevel1 =
    chain &&
    chain?.evolves_to.length > 0 &&
    chain?.evolves_to.map((pokemon) => pokemon);
  const chainLevel2 =
    chain && chain?.evolves_to.length > 0 && chain?.evolves_to[0]?.evolves_to;

  if (name === chainLevel1[0]?.species?.name.toString()) {
    return chainLevel2[0];
  }

  if (name === chainLevel2[0]?.species?.name.toString()) {
    return null;
  }

  return chainLevel1[0];
}
