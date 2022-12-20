# Welcome to Emoji Deets! 🪡

This package is used to get details of an emoji.

## Installation
To install this package, run the following command:

```
npm install emoji-deets
```
## Usage
To use this package in your code, you can import it like this:

```
import emojiCheck from 'emoji-deets'
```
You can then use the package's functions like this:

```
emojiCheck('🚀') 
/* returns
    {
        emoji: '🚀',
        unicodeEndpoint: '0x1f680',
        occurences: 40,
        position: 
        negative:
        neutral:
        sentimentScore: 0.488
        unicodeName: 'ROCKET',
        unicodeBlock: 'Transport and Map Symbols'
    }
/*
```

## Example usage
Here are some examples of how you can use this package:
```
import emojiCheck from 'emoji-deets'

console.log(emojiCheck('🚀').sentimentScore)   // returns sentiment of passed emoji
console.log(emojiCheck('🚀'))                  // returns an object with all the details
```
## Contributing
If you want to contribute to this package, please follow these steps:

1. Fork the repository.
2. Create a new branch for your contribution.
3. Make your changes and commit them.
4. Push your changes to your branch.
5. Create a pull request from your branch to the main repository.

We welcome all contributions, including bug reports, bug fixes, and new features.

## References

* https://kt.ijs.si/data/Emoji_sentiment_ranking/


## License
This package is licensed under the MIT license.