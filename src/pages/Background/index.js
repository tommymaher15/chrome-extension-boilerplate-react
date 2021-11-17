import axios from 'axios';

console.log('This is the background page.');
console.log('Put the background scripts here.');

const Popup = () => {
  const getCurrentGas = () => {
    axios
      .get(
        'https://data-api.defipulse.com/api/v1/egs/api/ethgasAPI.json?api-key=c784b468e4ffe935d6332f19e3708c354fb97834b591b908248fa0c2d479'
      )
      .then((response) => {
        console.log(response, 'Data:');
      })
      .catch((error) => {
        console.log(error, 'Error:');
      });
  };
};

console.log(Popup);
