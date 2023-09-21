export const AppPages = {
  start: "start",
  summary: "summary",
};

export const documentTypes = [
  { value: "CC", label: "Cedula de ciudadanía" },
  { value: "PA", label: "Pasaporte" },
];

export const initialValuesStartPage = {
  typeDocument: "",
  numberDocument: "",
  country: "",
};

export const NUMBER_REGEXP = /^\d+$/;
