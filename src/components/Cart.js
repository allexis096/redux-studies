import { useSelector } from "react-redux";

function Cart() {
  const state = useSelector(state => state);

  console.log(state);

  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>

      </tbody>
    </table>
  )
};

export default Cart;