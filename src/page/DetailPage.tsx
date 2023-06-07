import DetailCusomer from "../component/DetailCusomer";

function DetailPage(props: any) {
    return(
      <>
          <h2>Customer Information</h2>
          <img src="" alt="" />
        <p>
            {props.firstName}
            {props.address}
        </p>
      </>
    );
    
  }
export default DetailPage;