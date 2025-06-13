import dns2 from 'dns2';

const { UDPClient } = dns2;

const resolve = UDPClient({
  dns: '8.8.8.8'
});

export async function dnsChecker(domain) {
  const start = Date.now();
  try {
    const response = await resolve(domain);
    const duration = Date.now() - start;

    const addresses = response.answers.map(ans => ans.address);

    return {
      success: true,
      timeMs: duration,
      addresses,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}