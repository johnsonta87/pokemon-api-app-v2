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

  if (name === chainLevel1?.species?.name.toString()) {
    const chainLevel2 =
      chain && chain?.evolves_to[0]?.evolves_to.map((pokemon) => pokemon);

    return chainLevel2?.species?.name.toString();
  }

  return chainLevel1[0];
}
