function FindProxyForURL(url, host) {

    if (shExpMatch(host, "(*.slack.com|*.slack-msgs.com|*.slack-files.com|*.slack-imgs.com|*.slack-edge.com *.slack-core.com|*.slack-redir.net)")) {        
        return "PROXY localhost:8080; DIRECT";
    }

    return "DIRECT";
}


