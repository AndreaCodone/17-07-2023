import styles from "@/styles/Products.module.scss";
import ReturnBtn from "../components/ReturnBtn";
import Footer from "../components/Footer";

function Products() {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.navbar}`}>
        <ReturnBtn />
        <h1>Products</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
