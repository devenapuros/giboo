import { useAuth } from "../context/authContext";
import { PrimaryLink } from "./PrimaryLink";
import { UserDropdown } from "./UserDropdown";

export const AuthWidget = () => {
    const { user } = useAuth();

    if (user) return <UserDropdown user={user} />;
    else
        return (
            <PrimaryLink name="auth-widget" label="Join" anchorRef="/join" />
        );
};
