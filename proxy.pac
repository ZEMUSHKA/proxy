function FindProxyForURL(url, host) {

    if (shExpMatch(host, "(*.nnm-club.ws|*.nnmclub.to|nnmclub.to|nnm-club.me|rutracker.org|*.nnm-club.me|*.rutracker.org)")
        || shExpMatch(host, "(*.slideshare.net|*.slidesharecdn.com|*.linkedin.com)")
        || shExpMatch(host, "(*.telegram.*|telegram.*|*.telegram-store.com)")
        || shExpMatch(host, "(*.transloadit.com|transloadit.com)")
        || shExpMatch(host, "(*.sci-hub.*|sci-hub.tw)"))
    {
        return "PROXY localhost:8080; DIRECT";
    }

    if (shExpMatch(host, "(zian-nix|zian-nix.yandex.net)")) {
        return "SOCKS localhost:1234";
    }
    
    if (shExpMatch(host, "(zomb-clyo-gpu0-2|zomb-clyo-gpu0-2.zombie.yandex.net)")) {
        return "PROXY localhost:12302";
    }
    
    return "DIRECT";
}
