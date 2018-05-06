function FindProxyForURL(url, host) {

    if (shExpMatch(host, "(*.slack.com|*.slack-msgs.com|*.slack-files.com|*.slack-imgs.com|*.slack-edge.com|*.slack-core.com|*.slack-redir.net)")
        || shExpMatch(host, "(*.nnm-club.ws|*.nnmclub.to|nnmclub.to|nnm-club.me|rutracker.org|*.nnm-club.me|*.rutracker.org)")
        || shExpMatch(host, "(*.slideshare.net|*.slidesharecdn.com|*.linkedin.com)")) 
    {
        return "PROXY localhost:8080; DIRECT";
    }
    
    return "DIRECT";
}


