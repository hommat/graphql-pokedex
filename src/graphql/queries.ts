export const GET_POKEMON_DATA = (name: string) => `{
  pokemon(name: "${name}"){
    name,
    number,
    weight{
      maximum,
      minimum
    },
    height{
      maximum,
      minimum
    },
    types,
    resistant,
    attacks{
      fast{
        name,
        type,
        damage
      },
      special{
        name, type, damage
      }
    },
    weaknesses,
    fleeRate,
    maxCP,
    evolutions{
      number,
      name,
      image,
      types
    },
    maxHP
    classification,
    image
  }
}`;
