import { callExternalApi } from "./external-api.service";

const apiServerUrl = 'https://promanitasapi.onrender.com/api/v1/';

export const getPublicResource = async () => {
  const config = {
    url: `${apiServerUrl}/log`,
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  };

  const { data, error } = await callExternalApi({ config });

  return {
    data: data || null,
    error,
  };
};

export const getProtectedResource = async (accessToken) => {
  const config = {
    url: `${apiServerUrl}/log`,
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const { data, error } = await callExternalApi({ config });

  return {
    data: data || null,
    error,
  };
};

// export const getAdminResource = async (accessToken) => {
//   const config = {
//     url: `${apiServerUrl}/log`,
//     method: "GET",
//     headers: {
//       "content-type": "application/json",
//       Authorization: `Bearer ${accessToken}`,
//     },
//   };

//   const { data, error } = await callExternalApi({ config });

//   return {
//     data: data || null,
//     error,
//   };
// };