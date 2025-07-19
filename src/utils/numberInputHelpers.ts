export const inputTextToFormattedNumber = (
  value: string,
  setValue: (v: string) => void
) => {
  const receivedString = value.replace(".", "");

  let valorCentavos = Number(receivedString);

  if (isNaN(valorCentavos)) {
    valorCentavos = 0;
  }

  const valorReaisFormattedString = (valorCentavos / 100).toFixed(2);

  setValue(valorReaisFormattedString);
};
