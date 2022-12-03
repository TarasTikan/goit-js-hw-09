const formEl = document.querySelector('.form')

formEl.addEventListener('submit', onAddProm)
function onAddProm (e) {
  e.preventDefault()

  let delay = Number(formEl.delay.value);
  let position = Number(formEl.amount.value);
  let step = Number(formEl.step.value)
  for(let i = 1; i <= position; i += 1){
    createPromise(position, delay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  delay += step;
  } 
}

function createPromise(position, delay) {
  const form = {
    position,
    delay
}
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      if (shouldResolve) {
        resolve(form)
      } else {
        reject(form)
      }
    }, delay)
  })
}


