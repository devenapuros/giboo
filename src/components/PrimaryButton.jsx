import { PrimaryBtn } from "../styles/Button";

export const PrimaryButton = ({ label, icon, name, handleClick }) => {
    return (
        <PrimaryBtn className={name || "primary-btn"} onClick={handleClick}>
            {label}
            {icon}
        </PrimaryBtn>
    );
};
