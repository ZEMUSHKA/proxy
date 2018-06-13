# Local proxy with PAC

1. Install https://github.com/sjitech/proxy-login-automator, we will need it to get passwordless local proxy for a PAC script.
2. Get an http proxy HOST, PORT, USER and PASSWORD (you can setup this on a VPS with squid).
3. Run `nohup node proxy-login-automator/proxy-login-automator.js -remote_host {HOST} -remote_port {PORT} -usr {USER} -pwd {PASSWORD} &`.
Add `-is_remote_https true -ignore_https_cert true` if you're using https proxy.
4. In Mac Proxy settings check "Auto Proxy Discovery" and "Automatic Proxy Configuration" with the following URL: `https://raw.githubusercontent.com/ZEMUSHKA/proxy/master/proxy.pac`.
