import { useEffect, useState } from "react";
import { fetchUsersTypes } from "../../Config/AppData";

export const useUsersTypes = () => {
  const [usersTypes, setUsersTypes] = useState({
    message: "",
    data: "",
    status: "",
    status_code: 0,
  });

  useEffect(() => {
    const g = async () => {
      try {
        const response = await fetchUsersTypes();
        setUsersTypes(response);
      } catch (error) {
        console.log(error);
      }
    };
    g();
  }, []);

  return {
    usersTypes,
  };
};
