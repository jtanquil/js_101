### Twenty-One Notes ###

**Overall game flow**

1. Initialize the game (deck + hands)
2. Deal cards to the player
3. Deal cards to the dealer
4. Player turn: hit or stay
  - repeat until player bust or stay
  - if the player busts, the dealer wins
5. Dealer turn: hit or stay
  - repeat until total >= 17
  - if dealer busts, player wins
6. Compare cards and declare winner

---

**Initialize the deck**

**Input:** none

**Output:**
  - a randomized deck of playing cards
  - a 52-card deck containing 4 of each of 2-10, Jack, Queen, King, Ace, in a random order
  - suits don't matter

**Data Structure:** since the output is a set of elements in a randomized order, the output should be an array. The elements of the array can be represented as strings.

**Algorithm:**

1. create an array, `arr`, whose elements are the cards in a standard deck of playing cards (4 copies of 2-10, Jack, Queen, King, Ace)
2. create a new empty array, `outputArr`.
3. let `randomIndex` be a random integer from 0 to `arr.length - 1`.
4. splice the element `arr[randomIndex]` from `arr` and push it into `outputArr`.
5. repeat steps 3 and 4 until `arr` is empty.
6. return `outputArr`.

**Initialize a game of Twenty-One**

**Input:** none

**Output:** an object representing a game of Twenty-One, containing:
  - a `deck`, a randomized deck of playing cards that the player and dealer draw from
  - `playerHand`, the cards in the player's hand, empty before the game starts
  - `dealerHand`, the cards in the dealer's hand, empty before the game starts

**Data Structure:** the output is an object, `deck` is an array (from step 1). Since `playerHand` and `dealerHand` are lists of elements and the flow of the game adds cards to these lists in sequence, it makes sense for them to both be represented by arrays whose elements are the cards from `deck`.

**Computing the value of a hand**

**Input:** an array whose values are strings representing cards from the deck (`2` - `10`, `J`, `Q`, `K`, `A`)

**Output:**
  - an integer representing the value of the hand
  - the value of the hand is the sum of the values of each card:
    - `2`-`10` are worth 2-10 points, respectively
    - the face cards `J`, `Q` and `K` are each worth 10 points
    - aces `A` are worth either 1 point or 11 points depending on the following rule: if the rest of the hand is worth 10 or less points, the first ace in the hand is worth 11 points, otherwise it's worth 1 point. Aces can never bring the value of a hand over 21 points, so each subsequent ace is worth 1 point. If, after summing the values of each ace after the first, the value of the hand is still over 21, then the value of the first ace is set to 1.
    - alternatively, the value of all the aces in the hand is either just the number of aces (they're worth 1 point each), or they're the number of aces + 10 (if the first ace is worth 11, and the rest are worth 1). They can only be worth the latter value if that doesn't bring the total value of the hand over 21 points.

**Examples:**

```javascript
calculateHandValue(['1', '2']) // 1 + 2 = 3
calculateHandValue(['2', 'K', 'J']) // 2 + 10 + 10 = 22
calculateHandValue(['3', 'A']) // 3 + 11 = 14
calculateHandValue(['3', 'A', 'A']) // 3 + 11 + 1 = 15
calculateHandValue(['4', 'A', '5', 'A', 'A']) // 4 + 1 + 5 + 1 + 1 = 12
```

**Data Structure:**
  - input: array
  - output: an integer, obtained by using array methods on the input. We need to deal with the aces and non-ace cards separately; we can filter out the non-aces into an separate array, and find their value via reduce. The values of the non-ace cards can be stored in an object that acts as a lookup table.

**Algorithm:** given a hand `hand`

1. let `CARD_VALUES` be an object whose keys are `2`-`10`, `J`, `Q`, `K` and whose values are the corresponding point values for those cards.
2. filter the non-aces to another array `nonAces`.
3. find the sum of the point values of the cards of `nonAces` and assign the result to `handScore`.
4. if there are no aces in hand, return `handScore`.
5. otherwise, let `numberOfAces` be the number of aces in `hand`.
6. if `handScore + (numberOfAces - 1) + 11 <= 21`, then return that value.
7. if not, return `handScore + numberOfAces`.

**Player Turn Sequence**

1. Ask the player if they want to hit or stay
2. If stay, end the turn (break)
3. If hit, add a card to `playerHand`
4. If `playerHand` is worth > 21 points, the player busts, end the turn (break)
5. Go back to step 1

**Dealer Turn Sequence**

1. If `dealerHand` is worth at least 17 points, stay.
2. Otherwise, hit.
3. If the dealer busts, end the turn (break)
4. Go back to step 1