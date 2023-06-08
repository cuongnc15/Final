import icon from "../assets/people.jpg";

const Header = (props: any) => {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light"
    >
      <img src={icon} />
      <h3>Customer Management</h3>
    </div>
  );
};

export default Header;