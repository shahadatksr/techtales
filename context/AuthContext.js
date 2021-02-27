import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { parseCookies } from 'nookies'


const AuthContext = createContext();

export const AuthProvider = (props) => {

    const { usertoken } = parseCookies()

    const [user, setUser] = useState(usertoken);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {props.children}
        </AuthContext.Provider>
    );
};

// export const ProtectRoute = ({ children }) => {
//     const { user } = useContext(AuthContext);
//     if ((!user && window.location.pathname !== '/login')) {
//         return <h1>Loading...</h1>;
//     }
//     if ((window.location.pathname == '/sample')) {
//         return <h1> Sample </h1>;
//     }
//     return children;
// };

export default AuthContext