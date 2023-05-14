
import moment from "moment";
const SingleList = ({ data }) => {
// const handeleDelete = async (id) => {
//     const res =  await axios.delete(`/payments/deleteById/${id}`)
//     if(res.data.acknowledged){
//         window.location.reload()
//     }
//   }
  return (
      <tr>
        <td>
          {data.firstName} {data.lastName}
        </td>
        <td>{data.email}</td>
        <td>{data.contact}</td>
        <td>{data.billingAddress}</td>
        <td>{data.destination}</td>
        <td>{data.adult}</td>
        <td>{data.children}</td>
        <td>{data.reservationNo}</td>
        <td>{data.hotelData.name}</td>
        <td>
          {" "}
          <ul>{data.rooms && data.rooms.map((room) => <li>{room}</li>)}</ul>
        </td>
        <td>
          {" "}
          {data.dates && (
            <span>{`From  ${moment(data.dates.startdate).format(
              "MMMM Do YYYY"
            )} to ${moment(data.dates.endDate).format("MMMM Do YYYY")} `}</span>
          )}{" "}
        </td>
        <td>{data.totalBill}</td>
        <td>{data.paymentData && data.paymentData.bank_txn}</td>
        <td>{data.paymentData && data.paymentData.card_type}</td>
        {/* <td>
          <div className="dropdown">
            <button
              className="btn btn-dark dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Actions
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#" onClick={() => handeleDelete(data._id)} >
                Delete
              </a>
            </div>
          </div>
        </td> */}
      </tr>
  );
};

export default SingleList;
