### C2X
A simple CLI tool for converting a CSS selector to XPath

Install:
```$ npm install -g c2x ```

Run:
```
$ c2x .class
XPATH:  .//*[contains(concat(' ', normalize-space(./@class), ' '), ' class ')]
```

Or:
```
$ c2x
Welcome to the C2X CLI tool for converting CSS to XPATH :)

Insert valid CSS selector below, or type 'quit' to stop:
.class
XPATH:  .//*[contains(concat(' ', normalize-space(./@class), ' '), ' class ')]

Insert valid CSS selector:
#id
XPATH:  .//*[./@id = 'id']

Insert valid CSS selector:
)invalid
Invalid css selector! try again!

Insert valid CSS selector:
quit

Bye n00b
```





   

