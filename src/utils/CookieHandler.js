import cookie from "js-cookie";

export const getCookie = (key) => {
	cookie.get(key);
};

export const setCookie = (key, value, expTime) => {
	cookie.set(key, value, {
		sameSite: "Lax",
		secure: true,
		expires: expTime,
	});
};
