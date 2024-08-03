import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(url);
        if (response.ok === false) {
          setIsError(true);
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log(error);
      }

      setIsLoading(false);
    };

    getUser();
  }, []);

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  if (isError) {
    return <h2>Error...</h2>;
  }
  return (
    <li key={user.id} style={{ listStyle: "none" }}>
      <img
        src={user.avatar_url}
        alt={user.login}
        style={{ width: "150px", borderRadius: "25px" }}
      />
      <h2>{user.login}</h2>
      <h3>Works at {user.company}</h3>
      <h4>{user.bio}</h4>
    </li>
  );
};
export default MultipleReturnsFetchData;
