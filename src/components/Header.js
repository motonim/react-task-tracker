import PropTypes from 'prop-types'
import Button from "./Button"
import { FaTasks } from "react-icons/fa"

const Header = ({title, onAdd, showAdd, subtitle}) => {

    return (
        <header className="header">
            <div className="header-title">
                <FaTasks 
                        style={{ color: "#52706B", marginLeft: "5px", height: "1.5em", width: "1.5em" }} 
                />
                <h1>{title}{subtitle}</h1>
            </div>
            <Button 
                color={showAdd ? "#F29BAB" : "#52706B"} 
                text={showAdd ? "Close" : "Add"} 
                onClick={onAdd}
                
            />
        </header>
    )
}

Header.defaultProps = {

    title: "Task Tracker   ",
    subtitle: <span style={{fontSize: "0.8rem"}}>by Jaeri</span>
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
