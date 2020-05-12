import React from 'react';

export const Chart = () => {
    return (
        <div className='page chart'>
            <div className='chart_header'>
                <p className='heading_two'>
                    Hand Chart
                </p>
                <p className='body_two'>
                    One of the first things you need to learn when starting to play poker is which hands are stronger and can win you
                    a pot. Everybody needs to get a grip of this at times, so don't be afraid to refer to this chart when you need a quick
                    refresher.
                </p>
                <hr />
            </div>
            <div className='chart_main'>
                <div className='chart_main_hand'>
                    <p className='body_one'>Royal Flush - Probability: 1 in 649,737</p>
                    <p className='body_two'>
                        This one is the nuts of all nuts, completely unbeatable.
                        If you find yourself with 10 through Ace with the same suit, better be taking your table
                        for all it's worth.
                    </p>
                    <hr />
                </div>
                <div className='chart_main_hand'>
                    <p className='body_one'>Straight Flush - Probability: 1 in 72,139</p>
                    <p className='body_two'>
                        Connected cards of the same suit.
                        Pretty much as unbeatable as a Royal Flush, given how rare it is to see two players with suited
                        cards in a straight draw. Bet big!
                    </p>
                    <hr />
                </div>
                <div className='chart_main_hand'>
                    <p className='body_one'>Four of a kind - Probability: 1 in 4,164</p>
                    <p className='body_two'>
                        Exactly what it says on the tin. Another table destroyer, though you may need to play it slow to maximize
                        the pot size.
                    </p>
                    <hr />
                </div>
                <div className='chart_main_hand'>
                    <p className='body_one'>Full House - Probability: 1 in 693</p>
                    <p className='body_two'>
                        A pair plus three of a kind. This sneaky winner that will sometimes be missed by less experienced players, particularly
                        if you get a pair right off the bat and they think they have a strong hand. Don't get too excited and scare them off and 
                        you can really crush pots with this one.
                    </p>
                    <hr />
                </div>
                <div className='chart_main_hand'>
                    <p className='body_one'>Flush - Probability: 1 in 508</p>
                    <p className='body_two'>
                        Five cards of the same suit, but out of order. A good hand to play with suited cards in your hand, but be aware
                        of what your kicker is if four appear on the table.
                    </p>
                    <hr />
                </div>
                <div className='chart_main_hand'>
                    <p className='body_one'>Straight - Probability: 1 in 253</p>
                    <p className='body_two'>
                        Five unsuited cards in order. A strong hand at most tables, but be aware of other players' outs. A straight isn't
                        worth anything when there's a flush or a full house on the table.
                    </p>
                    <hr />
                </div>
                <div className='chart_main_hand'>
                    <p className='body_one'>Three of a kind - Probability: 1 in 46</p>
                    <p className='body_two'>
                        Three of one card. A solid, winning hand in many pots.
                    </p>
                    <hr />
                </div>
                <div className='chart_main_hand'>
                    <p className='body_one'>Two pairs - Probability: 1 in 20</p>
                    <p className='body_two'>
                        Two different pairings of two cards. A solid hand, particularly if one is aces or faces.
                    </p>
                    <hr />
                </div>
                <div className='chart_main_hand'>
                    <p className='body_one'>Pair - Probability: 1 in 1.36</p>
                    <p className='body_two'>
                        Can be a decent pot builder, particularly when you have an overpair. Just be aware of what could sneak up on you.
                    </p>
                    <hr />
                </div>
                <div className='chart_main_hand'>
                    <p className='body_one'>High Card - Probability: 1 in 0.99</p>
                    <p className='body_two'>
                        No matching cards. Can be a winner, but be careful of what else is out there.
                    </p>
                </div>
            </div>
        </div>
    )
};