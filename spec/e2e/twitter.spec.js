describe('twitter app', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have tweets', function () {
    var tweets = element.all(by.repeater('tweet in tweets'));
    expect(tweets.count()).toBe(3);
  });

  it('should link to twitter profile', function () {
    var tweets = element.all(by.repeater('tweet in tweets'));
    tweets.get(0).findElement(by.css('.media-heading a')).click();
    browser.ignoreSynchronization = true;
    expect(browser.getCurrentUrl()).toMatch('/twitter.com/');
  });

  it('should show more information if button is clicked', function () {
    var tweets = element.all(by.repeater('tweet in tweets'));
    var tweet = tweets.get(0);
    tweet.findElement(by.css('.btn')).click();
    expect(tweet.findElement(by.css('.info')).isDisplayed()).toBe(true);
  });

  it('should filter tweets', function () {
    var search = element(by.model('search'));
    search.sendKeys('yolo');
    expect(element.all(by.repeater('tweet in tweets')).count()).toBe(1);
  });

  it('should clear filter', function () {
    var search = element(by.model('search'));
    search.sendKeys('yolo');
    expect(element.all(by.repeater('tweet in tweets')).count()).toBe(1);
    search.clear();
    expect(element.all(by.repeater('tweet in tweets')).count()).toBe(3);
  });
});
