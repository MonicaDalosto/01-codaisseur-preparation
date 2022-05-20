let teller = {
  guess: () => {
    const millions = Math.random();
    const message = `You will earn ${millions} million Euros this year`;
    console.log(message);
  }
};
teller.guess();
