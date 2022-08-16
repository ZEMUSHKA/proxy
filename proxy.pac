function FindProxyForURL(url, host) {
    
    if (shExpMatch(host, "*.twitter.com") || shExpMatch(host, "twitter.com")) {
        return "PROXY localhost:8080";
    }

    if (shExpMatch(host, "*.twimg.com") || shExpMatch(host, "twimg.com")) {
        return "PROXY localhost:8080";
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
    
    if (shExpMatch(host, "kino.pub") || shExpMatch(host, "*.kino.pub")) {
        return "PROXY localhost:8080";
    }
    
    if (shExpMatch(host, "facebook.com") || shExpMatch(host, "*.facebook.com")) {
        return "PROXY localhost:8080";
    }
    
    if (shExpMatch(host, "pornhub.com") || shExpMatch(host, "*.pornhub.com")) {
        return "PROXY localhost:8080";
    }
    
    if (shExpMatch(host, "phncdn.com") || shExpMatch(host, "*.phncdn.com")) {
        return "PROXY localhost:8080";
    }
    
    if (shExpMatch(host, "interactivebrokers.co.uk") || shExpMatch(host, "*.interactivebrokers.co.uk")) {
        return "PROXY localhost:8080";
    }
    
    return "DIRECT";
}
