function FindProxyForURL(url, host) {
    
    if (shExpMatch(host, "zian-nix.yandex.net")) {
        return "SOCKS localhost:1234";
    }
    
    if (shExpMatch(host, "zomb02")) {
        return "SOCKS localhost:12302";
    }
    
    if (shExpMatch(host, "zomb1")) {
        return "SOCKS localhost:1231";
    }
    
    if (shExpMatch(host, "*.rutracker.org") || shExpMatch(host, "rutracker.org")) {
        return "PROXY localhost:8080";
    }
    
    // blocked on AWS :(
    if (shExpMatch(host, "nnm-club.to") || shExpMatch(host, "nnm-club.me") 
        || shExpMatch(host, "nnmclub.to") || shExpMatch(host, "nnmclub.me")) 
    {
        return "PROXY localhost:8080";
    }
    
    if (shExpMatch(host, "linkedin.com") || shExpMatch(host, "*.linkedin.com")) {
        return "PROXY localhost:8080";
    }
    
    if (shExpMatch(host, "*.slideshare.net") || shExpMatch(host, "*.slidesharecdn.com") 
        || shExpMatch(host, "slideshare.net")) 
    {
        return "PROXY localhost:8080";
    }
    
    return "DIRECT";
}
