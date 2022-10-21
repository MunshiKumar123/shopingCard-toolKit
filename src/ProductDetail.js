import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "./store/index";
import { useParams } from "react-router-dom";
const ProductDetail = () => {
  const [result, setResult] = useState([]);
  const dispatch = useDispatch();
  const moreData = useSelector((state) => state.counter.moreData);
  const { n } = useParams();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/" + n)
      .then((response) => {
        // console.log(response.data);
        const dt = [...result];
        dt.push(response.data);
        dispatch(counterActions.secondApi({ payload: dt }));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="container">
        <h4>ProductDetail component</h4>
        {moreData?.payload?.map((row) => {
          return (
            <div key={row.id} className="stu1">
              {row.title} <br />
              <img src={row.image} alt={row.title} height="200px" /> <br />
              <p>
                {" "}
                {"price: " + row.price} <br />
              </p>
            </div>
          );
        })}
      </div>{" "}
    </>
  );
};
export default ProductDetail;
