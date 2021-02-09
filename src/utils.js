export const findObjInArrayById = (array, id) => {
  return array.find((item) => item.id === id);
};

export const getIdFromRouteProps = (props) => {
  return Number(props.match.params.id);
};

export const renameDashedAttribute = (attr) => {
  return attr.replace(/(-.)/g, (x) => x[1].toUpperCase());
};
