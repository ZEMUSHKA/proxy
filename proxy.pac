function FindProxyForURL(url, host) {

    if (shExpMatch(host, "(*.slack.com|*.slack-msgs.com|*.slack-files.com|*.slack-imgs.com|*.slack-edge.com|*.slack-core.com|*.slack-redir.net)")
        || shExpMatch(host, "(*.nnm-club.ws|*.nnmclub.to|nnmclub.to|nnm-club.me|rutracker.org|*.nnm-club.me|*.rutracker.org)")
        || shExpMatch(host, "(*.slideshare.net|*.slidesharecdn.com|*.linkedin.com)")
        || shExpMatch(host, "(*.telegram.*|telegram.*)")
        || shExpMatch(host, "(*.transloadit.com|transloadit.com)")
        || shExpMatch(host, "(*.sci-hub.*|*.sci-hub.tw)"))
    {
        return "PROXY localhost:8080; DIRECT";
    }

    if (shExpMatch(host, "(zian-nix|zian-nix.yandex.net)")) {
        return "SOCKS localhost:1234";
    }
    
    return "DIRECT";
}


