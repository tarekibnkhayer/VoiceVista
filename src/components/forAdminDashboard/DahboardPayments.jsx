import { useEffect, useState } from "react";
import usePayments from "../../myHooks/usePayments";
import SectionTitle from "../shared/SectionTitle";


const DahboardPayments = () => {
    const [payments, isPending] = usePayments();
    const [allPayment, setAllPayment] = useState([]);
    useEffect(() => {
        if(!isPending){
            setAllPayment(payments);
        }
    },[isPending, payments])
    return (
        <div>
            <SectionTitle title="All Payments"></SectionTitle>
            <div className="mt-12">
            <div className="flex w-full overflow-x-auto">
	<table className="table">
		<thead>
			<tr>
				<th>Serial</th>
				<th>Payment Email</th>
				<th>Paid</th>
				<th>Date of payment</th>
			</tr>
		</thead>
		<tbody>
			{
                allPayment?.map((payment, i) => <tr key={payment._id}>
                    <th>{i+1}</th>
                    <td>{payment.email}</td>
                    <td>$ {payment.price}</td>
                    <td>{payment.date}</td>
                </tr>)
            }
		</tbody>
	</table>
</div>
            </div>

        </div>
    );
};

export default DahboardPayments;