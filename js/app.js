const img = document.getElementById('art');
const descTitle = document.getElementById('desc');
const PriceTitle = document.getElementById('price');

const div1 = document
  .getElementById('first')
  .addEventListener('click', function () {
    img.src = 'images/1.jpg';
    descTitle.innerText =
      ' First-Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa exercitationem qui molestias autem, et vero dolore ea quam adipisci, obcaecati nihil incidunt nesciunt natus. Eligendi minima id nemo explicabo natusfdgg';

    PriceTitle.innerText = '750';
    upDateTotal();
  });
const div2 = document
  .getElementById('second')
  .addEventListener('click', function () {
    img.src = 'images/2.jpg';
    descTitle.innerText =
      ' second-Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa exercitationem qui molestias autem, et vero dolore ea quam adipisci, obcaecati nihil incidunt nesciunt natus. Eligendi minima id nemo explicabo natus.';

    PriceTitle.innerText = '550';
    upDateTotal();
  });
const div3 = document
  .getElementById('third')
  .addEventListener('click', function () {
    img.src = 'images/3.jpg';
    descTitle.innerText =
      'third-Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa exercitationem qui molestias autem, et vero dolore ea quam adipisci, obcaecati nihil incidunt nesciunt natus. Eligendi minima id nemo explicabo natuslogfg';

    PriceTitle.innerText = '350';
    upDateTotal();
  });
const freeShipping = document.getElementById('shipping');

const freekho = document
  .getElementById('free')
  .addEventListener('click', function () {
    freeShipping.innerText = '0';
    upDateTotal();
  });
const takaDiyekhaw = document
  .getElementById('express')
  .addEventListener('click', function () {
    freeShipping.innerText = '30';
    upDateTotal();
  });

const totalPrice = document.getElementById('total');

//   updateTotal

function upDateTotal() {
  const shoppingCharge = Number(freeShipping.innerText);
  const prodctPrice = Number(PriceTitle.innerText);
  const fullTotalPrice = shoppingCharge + prodctPrice;
  totalPrice.innerText = fullTotalPrice;
}
