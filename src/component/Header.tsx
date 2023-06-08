import icon from "../assets/people.jpg";

const Header = (props: any) => {
  return (
    <div className="navbar navbar-expand-lg navbar-light"
    style={{ backgroundColor: "#e3f2fd" }}
    >
      <img src={icon} className="d-inline-block align-text-top" 
      style={{width:"80px", height: "auto", marginRight: "30px", marginLeft: "20px"}}
      />
      <h3>Customer Management</h3>
    </div>
  );
};

export default Header;