function FindProxyForURL(url, host) {
    
    if (shExpMatch(host, "zian-nix.yandex.net")) {
        return "SOCKS localhost:1234";
    }
    
    if (shExpMatch(host, "zomb02")) {
        return "SOCKS localhost:12302";
    }
    
    if (dnsDomainIs(host, ".rutracker.org") || dnsDomainIs(host, "rutracker.org")) {
        return "PROXY localhost:8080";
    }

//     if (shExpMatch(host, "(*.nnm-club.ws|*.nnmclub.to|nnmclub.to|nnm-club.me|rutracker.org|*.nnm-club.me|*.rutracker.org)")
//         || shExpMatch(host, "(*.slideshare.net|*.slidesharecdn.com|*.linkedin.com)")
//         || shExpMatch(host, "(*.telegram.*|telegram.*|*.telegram-store.com)")
//         || shExpMatch(host, "(*.transloadit.com|transloadit.com)")
//         || shExpMatch(host, "(*.sci-hub.*|sci-hub.tw)"))
//     {
//         return "PROXY localhost:8080";
//     }
    
    return "DIRECT";
}
