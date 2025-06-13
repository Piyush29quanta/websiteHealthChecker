import { dnsChecker } from "../services/dnsService.js";
import { checkHttp } from "../services/httpService.js";
import { checkSSL } from "../services/sslService.js";
import { checkPort } from "../services/portService.js";

export async function checkHealth(domain) {
  const results = {
    domain,
    dns: null,
    http: null,
    ssl: null,
    ports: {}
  };

  try {
    const [dnsResult, httpResult, sslResult, port80Result, port443Result] = await Promise.all([
      dnsChecker(domain),
      checkHttp(domain),
      checkSSL(domain),
      checkPort(domain, 80),
      checkPort(domain, 443)
    ]);

    results.dns = dnsResult;
    results.http = httpResult;
    results.ssl = sslResult;
    results.ports = {
      80: port80Result,
      443: port443Result
    };
  } catch (error) {
    results.error = error.message;
  }

  return results;
}
