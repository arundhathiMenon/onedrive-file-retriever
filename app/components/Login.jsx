import { useMsal } from "@azure/msal-react";

const Login = ({ setAccessToken }) => {
    const { instance } = useMsal();

    const handleLogin = () => {
        instance
            .loginPopup({
                scopes: ["Files.Read.All"],
            })
            .then((response) => {
                setAccessToken(response.accessToken);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <button
            onClick={handleLogin}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
            Login to OneDrive
        </button>
    );
};

export default Login;
