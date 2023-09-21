import users from "../constans/user.json";
export const searchUser = ({
  typeDocument: typeDocumentFilter,
  numberDocument: numberDocumentFilter,
  country: countryFilter,
}) => {
  return users.filter(({ typeDocument, numberDocument, country }) => {
    const isValid =
      typeDocument === typeDocumentFilter &&
      numberDocument === numberDocumentFilter;
    if (countryFilter) {
      return countryFilter === country && isValid;
    }
    return isValid;
  });
};
