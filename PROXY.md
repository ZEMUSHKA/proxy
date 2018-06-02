# Squid http proxy

Install `sudo apt install squid apache2-utils -y`.
User with password: `sudo htpasswd -cb /etc/squid/passwd user password`.

Config `/etc/squid/squid.conf`:

```
http_port 80
auth_param basic program /usr/lib/squid/basic_ncsa_auth /etc/squid/passwd
auth_param basic realm proxy
acl authenticated proxy_auth REQUIRED
http_access allow authenticated
```

`sudo systemctl enable squid`

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

Add `/home/zian/dante/sbin/sockd -D` to `/etc/rc.local`.

# MTProto

```
sudo apt-get update
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

sudo apt-get update
sudo apt-get install docker-ce

sudo usermod -aG docker $(whoami)
docker run hello-world
```

Then follow https://hub.docker.com/r/telegrammessenger/proxy/
