import { useEffect, useState } from "react";
import AuthorizedView from "../Components/AuthorizedView";
import UnauthorizedView from "../Components/UnauthorizedView";

const withAuthorization = (Component) => {
  return (props) => {
    const [isAuthorized, setIsAuthorized] = useState(false);

    const fetchData = async () => {
      let result = await (await fetch("https://yesno.wtf/api")).json();
      setIsAuthorized(result.answer === "yes");
    };

    function handleLogout() {
      setIsAuthorized(false);
    }

    function handleLogin() {
      setIsAuthorized(true);
    }

    useEffect(() => {
      fetchData();
    }, []);

    return (
      <Component
        login={handleLogin}
        logout={handleLogout}
        isAuthorized={isAuthorized}
      />
    );
  };
};

export const ParentComponent = () => {
  const [authorized, setAuthorized] = useState(false);

  const fetchData = async () => {
    let result = await (await fetch("https://yesno.wtf/api")).json();
    setAuthorized(result.answer === "yes");
  };

  function handleLogout() {
    setAuthorized(false);
  }

  function handleLogin() {
    setAuthorized(true);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {authorized ? (
        <AuthorizedView logout={handleLogout} />
      ) : (
        <UnauthorizedView login={handleLogin} />
      )}
    </>
  );
};

export default withAuthorization;
