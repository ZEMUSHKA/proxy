# proxy

1. Install https://github.com/sjitech/proxy-login-automator to use proxy-forwarder in PAC script.
2. Run `nohup node proxy-login-automator/proxy-login-automator.js -remote_host {HOST} -remote_port {PORT} -usr {USER} -pwd {PASSWORD} &`
3. In Mac Proxy settings check "Auto Proxy Discovery" and "Automatic Proxy Configuration" with the following URL: `https://raw.githubusercontent.com/ZEMUSHKA/proxy/master/proxy.pac`.
4. Slack should now work.
