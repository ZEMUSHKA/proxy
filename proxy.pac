function FindProxyForURL(url, host) {
    
    if (shExpMatch(host, "*.media-amazon.com") || shExpMatch(host, "media-amazon.com")) {
        return "SOCKS localhost:8888";
    }
    
    if (shExpMatch(host, "*.amazon.com") || shExpMatch(host, "amazon.com")) {
        return "SOCKS localhost:8888";
    }
    
    if (shExpMatch(host, "*.amazon.de") || shExpMatch(host, "amazon.de")) {
        return "SOCKS localhost:8888";
    }
    
    if (shExpMatch(host, "*.clarins.de") || shExpMatch(host, "clarins.de")) {
        return "SOCKS localhost:8888";
    }
    
    if (shExpMatch(host, "*.twitter.com") || shExpMatch(host, "twitter.com")) {
        return "SOCKS localhost:8888";
    }

    if (shExpMatch(host, "*.twimg.com") || shExpMatch(host, "twimg.com")) {
        return "SOCKS localhost:8888";
    }

    if (shExpMatch(host, "*.rutracker.org") || shExpMatch(host, "rutracker.org")) {
        return "SOCKS localhost:8888";
    }
    
    // blocked on AWS :(
    if (shExpMatch(host, "nnm-club.to") || shExpMatch(host, "nnm-club.me") 
        || shExpMatch(host, "nnmclub.to") || shExpMatch(host, "nnmclub.me")) 
    {
        return "SOCKS localhost:8888";
    }
    
    if (shExpMatch(host, "linkedin.com") || shExpMatch(host, "*.linkedin.com")) {
        return "SOCKS localhost:8888";
    }
    
    if (shExpMatch(host, "*.slideshare.net") || shExpMatch(host, "*.slidesharecdn.com") 
        || shExpMatch(host, "slideshare.net")) 
    {
        return "SOCKS localhost:8888";
    }
    
    if (shExpMatch(host, "kino.pub") || shExpMatch(host, "*.kino.pub")) {
        return "SOCKS localhost:8888";
    }
    
    if (shExpMatch(host, "facebook.com") || shExpMatch(host, "*.facebook.com")) {
        return "SOCKS localhost:8888";
    }
    
    if (shExpMatch(host, "pornhub.com") || shExpMatch(host, "*.pornhub.com")) {
        return "SOCKS localhost:8888";
    }
    
    if (shExpMatch(host, "phncdn.com") || shExpMatch(host, "*.phncdn.com")) {
        return "SOCKS localhost:8888";
    }
    
    if (shExpMatch(host, "interactivebrokers.co.uk") || shExpMatch(host, "*.interactivebrokers.co.uk")) {
        return "SOCKS localhost:8888";
    }
    
    return "DIRECT";
}
