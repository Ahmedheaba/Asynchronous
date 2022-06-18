'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const getParentCountry = function (data) {
  const html = `
        <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const getError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};
//CALLED API BY USING XMLHTTPRQUEST.

// const loadFFunc = function (country) {
//   //get current country
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     getParentCountry(data);

//     const [neighbor] = data.borders;
//     if (!neighbor) return;
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);
//       getParentCountry(data2);
//     });
//   });
// };
// loadFFunc('egypt');
// loadFFunc('german');

//FETCH
//old Way
// const getCountry = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// };
// getCountry('egypt');

// const getJSON = function (url, errorMessage = 'Something went Wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMessage} (${response.status})`);
//     return response.json();
//   });
// };

// const getCountry = function (countries) {
//   getJSON(
//     `https://restcountries.com/v2/name/${countries}`,
//     'Cannot read property'
//   ).then(data => {
//     getParentCountry(data[0]);
//     const neighbor = data[0].borders?.[0];
//     return getJSON(
//       `https://restcountries.com/v2/alpha/${neighbor}`,
//       'Something went Wrong'
//     );
//   });

//   // .catch(err => alert(err));
// };
// // getCountry('china');
// getCountry('efefefeefe');
// const getCountry = function (countries) {
//   fetch(`https://restcountries.com/v2/name/${countries}`)
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Something went Wrong (${response.status})`);

//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       getParentCountry(data[0]);
//       //   const neighbor = data[0].borders?.[0];
//       const neighbor = 'dssfsdfd';
//       return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Something went Wrong (${response.status}`);
//       return response.json();
//     })
//     .then(data => getParentCountry(data))
//     .catch(err => getError(`country is not find ${err.message}`))
//     .finally(() => (countriesContainer.style.opacity = 1));
// };
// btn.addEventListener('click', function () {
//   getCountry('egypt');
// });

// const buildPrmise = new Promise(function (resolve, rejected) {
//   const num = Math.trunc(Math.random() * 10);
//   console.log(num);
//   setTimeout(function () {
//     if (num >= 5) {
//       resolve('YOU WIN');
//     } else {
//       rejected(new Error('Please Try Agin!'));
//     }
//   }, 2000);
// });
// buildPrmise.then(res => console.log(res)).catch(err => console.error(err));

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 5000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log('1Secons Passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2Secons Passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3Secons Passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('4Secons Passed');
//     return wait(1);
//   });

// setTimeout(() => {
//   console.log('1Secons Passed');
//   setTimeout(() => {
//     console.log('1Secons Passed');
//     setTimeout(() => {
//       console.log('1Secons Passed');
//       setTimeout(() => {
//         console.log('1Secons Passed');
//         setTimeout(() => {
//           console.log('1Secons Passed');
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// Promise.resolve('Hello World').then(res => console.log(res));
// Promise.reject(new Error('OPPS!')).catch(err => console.log(err));

// const getPosition = new Promise(function (resolve, reject) {
//   navigator.geolocation.getCurrentPosition(resolve, reject);
// });
// getPosition.then(res => console.log(res));

//CODECHALLING 1
// const whereIam = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => {
//       console.log(res);
//       return res.json();
//     })
//     .then(data => {
//       console.log(`You Are From ${data.city}, ${data.country}`);
// //       return fetch(`https://restcountries.com/v3.1/name/${data.country}`)}
// //         .then(res => {
// //           if (!res.ok) throw new Error(`Country Not Found (${res.status})`);
// //           return res.json();
// //         })
// //         .then(data => getParentCountry(data[0]))
// //         .catch(err => console.error(`${err.message}!!!`));
// //     };

// const whereIam = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => {
//       console.log(res);
//       if (!res.ok) throw new Error('Something Went Wrong!');
//       return res.json();
//     })
//     .then(data => {
//       console.log(`You Are From ${data.city}, ${data.country}`);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`couuntry is not found (${res.status})`);
//       console.log(res);
//       return res.json();
//     })
//     .then(data => {
//       getParentCountry(data[0]);
//     })
//     .catch(err => console.error(`${err.message}`))
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// whereIam(52.508, 13.381);

//////////////////////////////////////////////////////////////////////
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => getParentCountry(data[0]))
    .catch(err => console.error(`${err.message} `));
};
whereAmI(52.508, 13.381);
