import axios from "axios";

export async function checkHttp(domain) {
  const url = `http://${domain}`;

  try {
    const res = await fetch(url, { method: "HEAD" });
    return {
      success: res.ok,
      status: res.status,
    };
  } catch (err) {
    return {
      success: false,
      error: err.message,
    };
  }
}