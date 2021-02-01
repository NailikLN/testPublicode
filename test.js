console.log("gooooo");
import Engine from './node_modules/publicodes/esm/index';

// On définit une liste de règles publicodes
const rules = `
prix . carottes: 2€/kg
prix . champignons: 5€/kg
prix . avocat: 2€/avocat

dépenses primeur:
  formule: 
    somme:
      - prix . carottes * 1.5 kg
      - prix . champignons * 500g
      - prix . avocat * 3 avocat
`

// On initialise un moteur en lui donnant le publicode.
// Ce publicode va être parsé
const engine = new Engine(rules);
console.log(engine.evaluate('dépenses primeur'));