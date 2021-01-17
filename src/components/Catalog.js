import { useSelector } from "react-redux";

function Catalog() {
  const catalog = useSelector(state => state);

  console.log(catalog);

  return <h1>Hello World</h1>;
};

export default Catalog;