
---
title: Web Elements of Style
url: /projects/web-elements-of-style/
---

An in-progress draft of some short, practical opinions on what makes good written web markup.

## Links

Links are one of the most important differentiators between paper and webpages. Links combine context and citation into one user-friendly element. Unfortunately, many links wrap the incorrect part of a sentence, which makes them feel off-putting. 

Generally, a link should start its anchor with the verb that immediately precedes the main subject of the linked content and continue until the end of the clause.

**Yes:** In his book on the stock market, Mr. Dreger [wrote about the fall of the 2008 market](#)

**Yes:** [In his book on the stock market](#), Mr. Dreger wrote about the fall of the 2008 market.

Avoid linking to entire sentences or independent clauses. These _run-on_ links are both aesthetically unappealing and sloppy markup.

**No:** [In his book on the stock market, Mr. Dreger wrote about the fall of the 2008 market.](#)

**No:** In his book on the stock market, [Mr. Dreger wrote about the fall of the 2008 market.](#)

In certain situations, especially when linking to definitions or individual works like movies, books, or music, anchor the link as closely to the subject as possible: 

**Yes:** While looking up dictionary terms, Mr. Dreger came across the term [onomatopoeia](#).

**Yes:** The [reviews for "La La Land"](#) are out.

## Headers

Although the HTML spec outlines six unique header declarations, the first three are sufficient. If you find yourself consistently needing four, five, or all six headers, consider rewriting or reorganizing. 