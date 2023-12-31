
const NavLink = ({href, text}) => {

    return (
      <a
        className="hover:text-purple-400 text-lg uppercase font-semibold"
        href={href}
      >
        {text}
      </a>
    );
  };
  
  export default NavLink;