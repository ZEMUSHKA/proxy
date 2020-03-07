function FindProxyForURL(url, host) {
    
    if (shExpMatch(host, "zian-nix.yandex.net")) {
        return "SOCKS localhost:1234";
    }
    
    if (shExpMatch(host, "zomb02")) {
        return "SOCKS localhost:12302";
    }
    
    if (shExpMatch(host, "*.rutracker.org") || shExpMatch(host, "rutracker.org")) {
        return "PROXY localhost:8080";
    }
    
    if (shExpMatch(host, "*.nnmclub.to") || shExpMatch(host, "*.nnm-club.ws") || shExpMatch(host, "*.nnm-club.me")
        || shExpMatch(host, "nnmclub.to") || shExpMatch(host, "nnm-club.ws") || shExpMatch(host, "nnm-club.me")) 
    {
        return "PROXY localhost:8080";
    }

//     if (shExpMatch(host, "(||nnm-club.me|||)")
//         || shExpMatch(host, "(*.slideshare.net|*.slidesharecdn.com|*.linkedin.com)")
//         || shExpMatch(host, "(*.telegram.*|telegram.*|*.telegram-store.com)")
//         || shExpMatch(host, "(*.transloadit.com|transloadit.com)")
//         || shExpMatch(host, "(*.sci-hub.*|sci-hub.tw)"))
//     {
//         return "PROXY localhost:8080";
//     }
    
    return "DIRECT";
}
