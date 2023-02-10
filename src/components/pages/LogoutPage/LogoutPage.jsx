//импорт модулей
import React, {useEffect} from 'react';
import API from "../../../api";

const LogoutPage = () => {
    useEffect(() => {
        async function fetch() {
            try {
                localStorage.removeItem("user");
                await API.get('/users/logout');
            } catch (e) {
                console.log(e)
            }
        }

        fetch();
        window.location.href = "/";
    }, []);
    return (
        <>

        </>
    );
};

export default LogoutPage;