import { products } from "../constants";

function PopularProducts() {
    return (
        <section
            id="products"
            className="max-container max-sm:mt-12 border-2 border-emerald-500"
        >
            <div className="flex flex-col justify-start gap-5">
                <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span> Products</h2>
                <p>Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, desing, and value.</p>
            </div>
        </section>
    )
}

export default PopularProducts
