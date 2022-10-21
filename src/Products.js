import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "./store/index";
import { Link } from "react-router-dom";
const Products = () => {
  const dispatch = useDispatch();
  const dataByVbl = useSelector((state) => state.counter.vbl);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data);
        dispatch(counterActions.api({ payload: response.data }));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Products</h1>
      </div>

      {dataByVbl?.payload?.map((row) => {
        return (
          <div key={row.id} className="stu">
            <Link to={"/productdetail/" + row.id}>{row.title}</Link>
          </div>
        );
      })}
    </>
  );
};
export default Products;
