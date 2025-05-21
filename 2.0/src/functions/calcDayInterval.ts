function calcDayInterval(dataInicio: string): string {
  const begin = new Date(dataInicio);
  const now = new Date();

  let message: string;
  let years = now.getFullYear() - begin.getFullYear();
  let months = now.getMonth() - begin.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }
  console.log(months);
  if (months === 1) {
    message = `${years} anos e ${months} mês`;
  } else {
    message = `${years} anos e ${months} meses`;
  }
  return message;
}

export default calcDayInterval;
