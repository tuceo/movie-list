
const Header = ({children}) => {
    return (
        <div className={"title-wrapper"}>
            <h3  className={"title"}>
                {children}
            </h3>
        </div>
    );
};

export default Header;
