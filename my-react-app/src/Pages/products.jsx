import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.jpg"/>
        <CardProduct.Body title="Nike Air Max 270">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor culpa
          obcaecati enim, blanditiis quis voluptas nulla perferendis labore
          temporibus esse. Sunt enim cum perspiciatis fugiat? Impedit quibusdam
          dolorem exercitationem porro?
        </CardProduct.Body>
        <CardProduct.Footer price="Rp. 1.000.000" />
      </CardProduct>
    </div>
  );
};

export default ProductsPage;
