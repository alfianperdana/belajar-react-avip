import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Nike Air Max 270",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor culpa obcaecati enim, blanditiis quis voluptas nulla perferendis labore temporibus esse. Sunt enim cum perspiciatis fugiat? Impedit quibusdam dolorem exercitationem porro?",
    price: "Rp. 1.000.000",
    image: "/images/shoes-1.jpg",
  },
  {
    id: 2,
    name: "Nike Air Max 280",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor culpa obcaecati enim, blanditiis quis voluptas nulla perferendis labore temporibus esse.",
    price: "Rp. 2.000.000",
    image: "/images/shoes-1.jpg",
  },
  {
    id: 3,
    name: "Nike Air Max 290",
    description:
      "Ini sepatu baru yang dikeluarkan oleh Nike.",
    price: "Rp. 3.000.000",
    image: "/images/shoes-1.jpg",
  },
];

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <CardProduct>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body name={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))};
    </div>
  );
};

export default ProductsPage;
