import sslChecker from 'ssl-checker';

export async function checkSSL(domain) {
  try {
    const data = await sslChecker(domain, { method: "GET", port: 443 });
    return {
      valid: data.valid,
      daysRemaining: data.daysRemaining,
      validFrom: data.validFrom,
      validTo: data.validTo,
      issuer: data.issuer,
    };
  } catch (error) {
    return {
      valid: false,
      error: error.message,
    };
  }
}
