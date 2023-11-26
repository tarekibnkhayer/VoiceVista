import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/forProPage/CheckoutForm";


const stripePromise = loadStripe(import.meta.env.VITE_PK);
const Pro = () => {
    return (
        <div className="mt-32">
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Pro;