# Squid http proxy

Install `sudo apt install squid`.
User with password: `htpasswd -cb /etc/squid/passwd user password`.

Config `/etc/squid/squid.conf`:

```
http_port 80
auth_param basic program /usr/lib/squid/basic_ncsa_auth /etc/squid/passwd
auth_param basic realm proxy
acl authenticated proxy_auth REQUIRED
http_access allow authenticated
```

# Dante socks proxy

Install: https://www.tazdij.com/post/setup-dante-1.4.1-sockd-dante-server-on-ubuntu-16.04

Config `/etc/sockd.conf`:

```
logoutput: syslog
user.privileged: root
user.unprivileged: nobody

# The listening network interface or address.
internal: 0.0.0.0 port=8080

# The proxying network interface or address.
external: eth0

# socks-rules determine what is proxied through the external interface.
# The default of "none" permits anonymous access.
socksmethod: username

# client-rules determine who can connect to the internal interface.
# The default of "none" permits anonymous access.
clientmethod: none

client pass {
        from: 0.0.0.0/0 to: 0.0.0.0/0
        log: connect disconnect error
}

socks pass {
        from: 0.0.0.0/0 to: 0.0.0.0/0
        log: connect disconnect error
}
```

Add user:
```
sudo useradd --shell /usr/sbin/nologin user
sudo passwd user
```

Run with `sudo /home/zian/dante/sbin/sockd -D`.