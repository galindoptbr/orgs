import green from "../assets/produtores/green.png";
import salad from "../assets/produtores/salad.png";
import grow from "../assets/produtores/grow.png";
import jenny from "../assets/produtores/jenny-jack.png";
import potager from "../assets/produtores/potager.png";

const generateNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const produtores = {
  titulo: "Produtores",
  lista: [
    {
      nome: "Green",
      image: green,
      distance: `${generateNumber(1, 500)}m`,
      stars: generateNumber(1, 5),
    },

    {
      nome: "Salad",
      image: salad,
      distance: `${generateNumber(1, 500)}m`,
      stars: generateNumber(1, 5),
    },

    {
      nome: "Grow",
      image: grow,
      distance: `${generateNumber(1, 500)}m`,
      stars: generateNumber(1, 5),
    },

    {
      nome: "Jenny-Jack",
      image: jenny,
      distance: `${generateNumber(1, 500)}m`,
      stars: generateNumber(1, 5),
    },

    {
      nome: "Potager",
      image: potager,
      distance: `${generateNumber(1, 500)}m`,
      stars: generateNumber(1, 5),
    },
  ],
};

export default produtores;
