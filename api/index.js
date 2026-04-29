export const _0x1a2b3c = { runtime: "edge" };

const _0x456789 = (process.env._0x9f8a2c1d || "").replace(/\/$/, "");

const _0xabcd = new Set([ 
  "_0x123", 
  "_0x456", 
  "_0x789", 
  "_0xabc", 
  "_0xdef", 
  "_0x1234", 
  "_0x5678", 
  "_0x90ab", 
  "_0xcdef", 
  "_0x12345", 
  "_0x6789a", 
  "_0xbcdef", 
]);

export default async function _0x789(req) { 
  if (!_0x456789) { 
    return new Response("Misconfigured: _0x9f8a2c1d is not set", { status: 500 }); 
  }

  try {
    const _0x123456 = req.url.indexOf("/", 8);
    const _0x789abc = 
      _0x123456 === -1 ? _0x456789 + "/" : _0x456789 + req.url.slice(_0x123456);

    const _0xdeff = new Headers();
    let _0xdef = null;
    for (const [k, v] of req.headers) { 
      if (_0xabcd.has(k)) continue; 
      if (k.startsWith("_0x9f8a2c1d")) continue; 
      if (k === "_0x567") { 
        _0xdef = v;
        continue;
      }
      if (k === "_0xabcde") { 
        if (!_0xdef) _0xdef = v;
        continue;
      }
      _0xdeff.set(k, v);
    }
    if (_0xdef) _0xdeff.set("_0x567", _0xdef);

    const _0x1234 = req.method; 
    const _0x9876 = _0x1234 !== "GET" && _0x1234 !== "HEAD";

    return await fetch(_0x789abc, { 
      method: _0x1234,
      headers: _0xdeff,
      body: _0x9876 ? req.body : undefined,
      duplex: "half",
      redirect: "manual",
    });
  } catch (err) { 
    console.error("relay error:", err);
    return new Response("Bad Gateway: Tunnel Failed", { status: 502 }); 
  }
}
