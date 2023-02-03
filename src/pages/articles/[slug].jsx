import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Faq = () => {
  const [link, setLink] = useState('')
  const [answer, setAnswer] = useState()
  const [points, setPoints] = useState([])

  const router = useRouter()

  const supportLinks = [
    {
      id: 1,
      title: 'Getting Started',
      links: [
        {
          id: 1,
          title: 'What is FT9ja?',
          morea: `We are Nigeria's 1st next-generational proprietary trading firm. Built with love by Nigerian Traders for Nigerians. Our Traders trade CFD Forex, Crypto, Indices, and Commodities
          `,
          break2:`break2`,
          moreb: 'We empower you to take your Trading to the next level with up to $50,000 in Funding. You trade with our funds, and we split the profit. It’s really a win-win! We want to see Nigerian retail Traders succeed',
          link: '/articles/what-is-ft9ja',
        },
        {
          id: 2,
          title: 'Why FT9ja?',
          morea: `We speak your language. We are a Nigerian-based Prop Trading firm with our offices in Abuja and Lagos.
          
          `,
          moreb: 'No monthly charges or other hidden fees.',
          break2:`break2`,
          morec:
            'Timely Payouts: weekly or monthly payouts allow our Traders to get paid promptly and consistently.',
          mored:
            'Freedom to use any responsible trading style. You can use stacking, hedging, or trade the news.',
          moree:
            'Second Chance Account: we give you a second account free of charge if you blow the 1st one.',
          moref: 'Trade Synthetic Indices via Deriv broker.',
          link: '/articles/why-ft9ja',
        },
        {
          id: 3,
          title: 'How do I register?',
          answer: `Simply go to ft9ja.com to register, our website is very easy to navigate and is made to ensure a smooth sign up process.
          `,
          link: '/articles/how-do-i-register',
        },
        {
          id: 4,
          title: 'How do I pay the one-time fee?',
          answer: '',
          point: `Please pay by transferring into our FirstBank Account: Enovation Concept 3075036936
          `,
          point1: `Alternatively, you can pay on the website:`,
          point2: `Finally, you can pay securely online using PayPal: `,
          more2: `Our prices in USD for our Classic Funding Model are as follows:`,
          more3: `$43 - $3,000 `,
          more4: `$65 - $5,000 `,
          more5: `$258- $25,000 `,
          more6: `Our prices in USD for our Challenge Funding Model are as follows:`,
          more7: ` $42 - $5,000`,
          more8: `$70 - $10,000 `,
          more9: `$142- $25,000 `,
          redirect: 'ft9ja.com',
          redirect2: 'Pay Here ',
          link: '/articles/how-do-i-pay',
        },
        {
          id: 5,
          title: 'What happens after purchasing an account size?',
          answer: `Your Account details will be emailed to you within 24hrs of purchase.`,
          link: '/articles/what-happens-after-purchasing',
        },
      ],
    },
    {
      id: 2,
      title: 'Frequently Asked Questions',
      links: [
        {
          id: 1,
          title: 'Are you a Broker?',
          point3: `No, we are not.
          `,
          point4: `We have accounts with third-party Brokers which we give our Traders access to.`,
          link: '/articles/are-you-a-broker',
        },
        {
          id: 2,
          title: 'Is this an investment offer?',
          point3: `No. You are not “investing” any money into our company or into any trading account.
          `,
          point4: `At FT9ja, we invest our funds into talented, profitable, and reliable Traders. We discover our AsoRock Traders by onboarding them through an evaluation process. Traders get paid even during the onboarding period!
          `,
          link: '/articles/investments',
        },
        {
          id: 3,
          title: 'Will I be responsible for losses?',
          answer: `No! We cover the losses.`,
          link: '/articles/will-i-be-responsible-for-losses/',
        },
        {
          id: 4,
          title: 'Which Brokers do you offer?',
          answer: `IC Markets, FXTM, and Deriv are available  on the Classic Model while the Challenge Model offers IC Markets and FXTM.
          `,
          link: '/articles/which-brokers-do-you-offer',
        },
        {
          id: 5,
          title: 'What is the Zuma Account?          ',
          answer: `The Zuma account is the first account you trade on the FT9ja Classic Model, it is a demo account which the traders get upon signing up with FT9ja. Your onboarding is done using this account and if you are successful in meeting our targets with this account you then get an Aso Account.`,
          link: '/articles/what-is-the-zuma-account',
        },
        {
          id: 6,
          title: 'What is the Aso Account?',
          answer: `An Aso account is the live account provided by FT9ja after the trader meets the necessary criteria on the Zuma account. On this account you can earn up to 80% profit split weekly!
          `,
          link: '/articles/what-is-the-aso-account',
        },
        {
          id: 7,
          title: 'What is the Challenge Account?',
          answer: `The Challenge account is the first account you trade on FT9ja’s traditional 2-step funding model where traders have to make 10% profit in 4 weeks while maintaining the minimum trading days and drawdown rules.`,
          link: '/articles/what-is-the-challenge-account',
        },
        {
          id: 8,
          title: 'What is the Verification Account?',
          answer: `The Verification account is the second account you trade on FT9ja’s traditional 2-step funding model after you successfully pass the challenge account where traders have to make 5% profit in 8 weeks while maintaining the minimum trading days and drawdown rules. `,
          link: '/articles/what-is-the-verification-account',
        },
        {
          id: 9,
          title: 'What is Talent Bonus?',
          answer: `This is the bonus paid to our traders while they are trading their Zuma account which is the Evaluation Account on the Classic Model and it is 5% of your profits made weekly(if you are on the weekly payout option) or 10% monthly(if you are on the monthly payout plan). 
          
          `,
          break: 'break',
          more: `Upon signing up, Our Traders get to choose if they would like to get paid weekly or monthly, this payout frequency continues even on the Aso accounts.`,
          link: '/articles/what-is-talent-bonus',
        },
        {
          id: 10,
          title: 'Free 2nd Chance Account. How do I get it?',
          answer: `Ft9ja is the only prop firm in the world that offers a second chance account free of charge! You can simply request it and it will be sent to you ASAP.
         
          `,
          break: 'break',
          more: `Note: Second chance accounts only apply to the Classic Model.`,
          link: '/articles/free-2nd-chance-account',
        },
        {
          id: 11,
          title: 'Can I request a second chance account Aso account?          ',
          answer: `Answer: You can only request for a second chance account on the Zuma account which is the evaluation stage.`,
          link: '/articles/can-i-request-a-second-chance-account-aso-account',
        },
        {
          id: 12,
          title: 'Does the consistency rule still apply?          ',
          answer: `No, the consistency rule has been removed.`,
          link: '/articles/does-the-consistency-rule-still-apply',
        },
        {
          id: 13,
          title: 'Can I get my payout any day of the week?          ',
          answer: `Payouts are processed on Fridays for the weekly payouts, and every 4 Fridays for the Monthly payout option.`,
          link: '/articles/can-i-get-my-payout-any-day-of-the-week',
        },
        {
          id: 14,
          title:
            'How long does it take for me to get my Aso account login details after passing the Zuma account and Challenge/verification account ?          ',
          answer: `You’ll get your Aso account login details within 7 working days.
          `,
          link: '/articles/how-long-does-it-take-for-me-to-get-my-aso-account-login-details',
        },
        {
          id: 15,
          title:
            'Can I receive my talent bonus if I haven’t met the 25% target required to pass the Zuma account?          ',
          answer: `Yes! FT9ja pays you even during your evaluation. You are however eligible for your first payout after 10 trading days even if you’re on the weekly plan.
          `,
          link: '/articles/can-i-receive-my-talent-bonus-if-i-havent-met-the-25-target-required-to-pass-the-zuma-account',
        },
        {
          id: 16,
          title:
            'Can I trade volatility indices, currency pairs and crypto on one account? Or do I have to choose one of them?          ',
          answer: `You can trade all financial instruments including Volatility indices and Crypto on one account. 
          `,
          link: '/articles/can-i-trade-volatility-indices-currency-pairs-and-crypto-on-one-account-or-do-i-have-to-choose-one-of-them',
        },
        {
          id: 17,
          title: 'Does FT9ja offer direct funding?          ',
          answer: `FT9ja doesn’t offer direct funding options at this time. 
          `,
          link: '/articles/does-ft9ja-offer-direct-funding',
        },
        {
          id: 18,
          title:
            'Has my account been violated if I don’t meet the requirement of the minimum trading rule?          ',
          answer: `Answer: No, it hasn’t. When you fail to meet the minimum trading day rule, you are required to trade for an additional week or weeks depending on the number of days missed.
          `,
          break: 'break',
          more: 'This time around, make sure to abide by the rule which says a minimum of 2 days a week and 10 days in a month, you must trade.',
          link: '/articles/has-my-account-been-violated',
        },
        {
          id: 19,
          title: 'What are the trading rules at FT9ja?          ',
          answer: `The drawdown rule and the minimum trading day rule.  `,
          point6: `Drawdown rule:`,
          section: `At FT9ja, we have a daily drawdown rule of 5% of the account’s starting equity per day and an overall drawdown rule of 10% of the original account size i.e the account’s starting equity.
          
          `,
          break: 'break',
          section1: `Example: The account drawdown is 10% of the starting account equity and in the case of a $25,000 account that would be $2500, meaning your account is not supposed to get to $22,500 or below.`,
          // break: 'break',
          section2: `For the daily drawdown, it is calculated as 5% of the starting equity per day.`,
          section3: `i.e In the case where you start with a $25,000 account, on that first day, your drawdown limit is $1250.`,
          section4: `And If that day you are in profit of $2000 and at 00:00 hours going into the following day your account equity starts reading at $27,000 then the drawdown for that day is 5% of $27,000 which is $1350.`,
          point7: `Minimum Trading Days rule:          `,
          section6: `For FT9ja Challenge and verification, you are required to trade for 6 or more days in each stage.`,
          section7: `Trading days do not need to be consecutive.`,
          section8: `No maximum amount of trades.          `,

          // Drawdown rule:
          // At FT9ja, we have a daily drawdown rule of 5% of the account’s starting equity per day and an overall drawdown rule of 10% of the original account size i.e the account’s starting equity.

          // Example: The account drawdown is 10% of the starting account equity and in the case of a $25,000 account that would be $2500, meaning your account is not supposed to get to $22,500 or below.

          // For the daily drawdown, it is calculated as 5% of the starting equity per day.

          // i.e In the case where you start with a $25,000 account, on that first day, your drawdown limit is $1250.

          // And If that day you are in profit of $2000 and at 00:00 hours going into the following day your account equity starts reading at $27,000 then the drawdown for that day is 5% of $27,000 which is $1350.

          // Minimum Trading Days rule:

          // For FT9ja Challenge and verification, you are required to trade for 6 or more days in each stage.
          // Trading days do not need to be consecutive.
          // No maximum amount of trades.

          link: '/articles/what-are-the-trading-rules-at-ft9ja',
        },
        {
          id: 20,
          title:
            'Do I need to reach a certain percentage in profit before receiving my payout on the Aso account?         ',
          answer: `No, there is no percentage requirement for withdrawal on the Aso Account.
          `,
          link: '/articles/do-i-need-to-reach-a-certain-percentage',
        },
        {
          id: 21,
          title:
            'Do I have to pass another evaluation stage after the Zuma account stage?            ',
          answer: `No, the Zuma account is the only evaluation stage you are required to pass.`,

          link: '/articles/do-i-have-to-pass-another-evaluation',
        },
        {
          id: 22,
          title:
            'Where can I interact with other traders on your platform?          ',
          more11: `We have a very vibrant community of Traders where topics like: `,
          more12: `Beginner Education          `,
          break1: 'break1',
          more13: `Fundamental Analysis
          `,
          more14: `Indicators and Price Action`,
          more15: `Trading Systems and Strategies.
          `,
          more16: `Are discussed and deliberated, this community is one which will go a long way in improving your trading experience with FT9ja.`,
          link: '/articles/where-can-i-interact-with-other-traders',
        },
      ],
    },
    {
      id: 3,
      title: 'How it works',
      links: [
        {
          id: 1,
          title: 'How many account sizes do you offer',
          answer: `We offer 3 account sizes for the FT9ja classic model:`,
          more2: `$3,000, $5,000 and $25,000.`,
          more3: `We also have 3 account sizes for the FT9ja Challenge Model:
          `,
          more4: `$5,000, $10,000 and $25,000`,

          link: '/articles/how-many-account-sizes-do-you-offer',
        },
        {
          id: 2,
          title: 'Can I merge my accounts?',
          answer: `Yes, you can purchase multiple Zuma accounts and request that they be merged into a single account.
          
           `,
          more2: `Note: On the FT9ja Challenge Model you can only have one account.`,
          link: '/articles/can-i-merge-my-accounts',
        },
        {
          id: 3,
          title:
            'How long does it take for me to get my account login details?',
          answer: `Within 24 hours of purchase, your account login details will be sent to you.
           `,
          link: '/articles/how-long-does-it-take-for-me-to-get-my-account-login-details',
        },
        {
          id: 10,
          title: 'How often do I get paid?',
          answer: `If you choose the weekly payout option, you get paid out every week and if you choose the monthly payout option then you get paid every 4 weeks. 
           
           `,
          more2: `Note: Payouts are processed on Fridays ONLY.`,
          link: '/articles/how-often-do-i-get-paid',
        },
        {
          id: 4,
          title: 'What are my payment options?',
          answer: `You can pay via Paystack, Local Bank Transfer and Paypal, we are always looking to integrate other payment options to meet the needs of our growing client base.
           `,
          link: '/articles/what-are-my-payment-options',
        },
        {
          id: 5,
          title: 'Are there any recurring monthly fees?',
          answer: `There are no recurring fees with FT9ja.
           `,
          link: '/articles/are-there-any-recurring-monthly-fees',
        },
        {
          id: 6,
          title: 'What percentage of my Zuma account profits will I be paid?',
          answer: `You will be paid 5% of your profits every week if you are on the weekly payout plan or 10% of your profits every four weeks if you choose to be paid monthly.
          
           `,
          more2: `Note: The maximum Talent Bonus is 5% of your account size.`,
          link: '/articles/what-percentage-of-my-zuma-account-profits',
        },
        {
          id: 7,
          title: 'What percentage of my Aso account will I get paid?',
          answer: `You earn:`,
          more2: `80% Profit Split if you qualify for the Aso Account within 1 month of placing your first trade.`,
          more3: `60% Profit Split if you qualify for the Aso Account within 1-3 months and`,
          more4: `40% Profit Split if you qualify for the Aso Account after 3 months.`,

          link: '/articles/what-percentage-of-my-aso-account-will-i-get-paid',
        },
        {
          id: 8,
          title:
            'What percentage of my funded challenge account will I get paid?',
          answer: `You get paid 80% of your profits on your funded challenge account.
           `,
          link: '/articles/what-percentage-of-my-funded-challenge-account-will-i-get-paid',
        },
        {
          id: 9,
          title: 'What’s the leverage on the accounts?',
          answer: `We offer a maximum leverage of 1:100.
           `,
          link: '/articles/whats-the-leverage-on-the-accounts',
        },
        {
          id: 11,
          title: 'Is there a scaling plan?',
          answer: `Presently there is no scaling plan but you can compound your account to 2x the original size.
           `,
          link: '/articles/is-there-a-scaling-plan',
        },
        {
          id: 12,
          title: 'How soon can I start earning?          ',
          answer: `As soon as you have satisfied the 10 trading days rule, you can request for a payout with FT9ja.
           `,
          link: '/articles/how-soon-can-i-start-earning',
        },
        {
          id: 13,
          title: 'How can I visit your office?',
          answer: `We have our offices in Abuja and Lagos. You can book an appointment on calendly.com/ft9ja for our Abuja office or calendly.com/ft9ja-lagos for our Lagos office.
           `,
          link: '/articles/how-can-i-visit-your-office',
        },
        {
          id: 14,
          title: 'Are there any lot size rules?',
          answer: `There are no lot size restrictions with FT9ja.
           `,
          link: '/articles/are-there-any-lot-size-rules',
        },
      ],
    },
    {
      id: 4,
      title: 'Rules',
      links: [
        {
          id: 1,
          title: 'How many days do I have to trade in a week?',
          point3: `You are required to open and close trading positions for 2 or more separate days in a trading week. In addition, you are required to trade 10 or more separate days in a trading month. 
          
          `,
          point4: `For FT9ja Challenge and verification, you are required to trade for 6 or more days in each stage.`,
          point5: `Trading days do not need to be consecutive.
          `,
          point6: `No maximum amount of trades.`,
          link: '/articles/how-many-days-do-i-have-to-trade-in-a-week',
        },
        {
          id: 2,
          title: 'What’s the maximum drawdown (loss) allowed?  ',
          answer: `You are allowed a maximum daily loss (drawdown) of 5% and an overall loss (drawdown) of 10%.
          `,
          link: '/articles/whats-the-maximum-drawdown-loss-allowed',
        },
        {
          id: 3,
          title: 'Are signals or Expert Advisors (EA or Robots) Allowed?',
          point3: `Signals and Expert Advisors are allowed! Just make sure the robot is not breaking any of our rules.
          
          `,
          point4: `
          In addition, we might ask you to share the details of the inner workings of the EA/robot with us. ‘Blackbox’ robots are not allowed. If this request is not granted, we reserve the right to not release payments and terminate your account.
          `,
          link: '/articles/are-signals-or-expert-advisors-ea-or-robots-allowed',
        },
        {
          id: 4,
          title: 'Am I free to use my own unique trading style?',
          point3: `There are no restrictions on trading styles.
          
          `,
          point4: `
          We look out for responsible and consistent trading behavior.
          
          `,
          point5: `
          You are allowed to use a mixture of scalping, swing, discretionary trading, and so on as long as you are consistent with your chosen strategy.
          `,
          link: '/articles/am-i-free-to-use-my-own-unique-trading-style',
        },
        {
          id: 5,
          title: 'Can I change my trading account login details?',
          answer: `No. You are not allowed to change your login details for any reason. If you change your password or any other details on the account, it will result in immediate account termination.`,
          link: '/articles/can-i-change-my-trading-account-login-details',
        },
      ],
    },
    {
      id: 5,
      title: 'Getting Paid',
      links: [
        {
          id: 1,
          title: 'When will I be paid?',
          answer: `As soon as 10 days, once you have traded for 10 days you can request for your talent bonus or profit split.`,
          link: '/articles/when-will-i-be-paid',
        },
        {
          id: 2,
          title: 'How will I be paid?',
          answer: `You can request payouts through your client area.`,
          link: '/articles/how-will-i-be-paid',
        },
        {
          id: 3,
          title: 'How much can I make?',
          answer: `There are no limits to how much you can make, with FT9ja you earn as you make profits.`,
          link: '/articles/how-much-can-i-make',
        },
      ],
    },
    {
      id: 6,
      title: 'FT9ja Referral Program',
      links: [
        {
          id: 1,
          title: 'What is FT9ja’s Referral Program?',
          answer: `The FT9ja referral program was put in place by FT9ja to reward those in the community who are dedicated  towards spreading the good word concerning FT9ja and in this program, the referrer gets 10% of the sign-on fee of the person referred. `,
          link: '/articles/what-is-ft9jas-referral-program',
        },
        {
          id: 2,
          title: 'How does it work?',
          answer: `Upon request, you are given a code which is specific to you, you then share this code with people you refer and when they are making their payment, all they need to do is mention the code and voila!, your 10% commission is heading to your account.`,
          link: '/articles/how-does-it-work',
        },
        {
          id: 3,
          title: 'What are the benefits?',
          answer: `A 10% referral commission paid directly to you!
          `,
          link: '/articles/what-are-the-benefits',
        },
        {
          id: 4,
          title: 'How do I get started?',
          answer: `Simply contact our official support line and it will be sent to you, also on your dashboard after you register, a code will be assigned to you.
          It’s as easy as that!
          `,
          link: '/articles/how-do-i-get-started',
        },
      ],
    },
    {
      id: 7,
      title: 'FT9ja Hero',
      links: [
        {
          id: 1,
          title: 'What is FT9ja Hero?          ',
          answer: `The FT9ja hero program is a program where you get to be rewarded for your knowledge of how FT9ja works and your ability to spread this knowledge in social groups and communities online and onsite!
          `,
          link: '/articles/what-is-ft9ja-hero',
        },
        {
          id: 2,
          title: 'How does it work?',
          answer: `All prospective heroes must take a mandatory quiz which measures your knowledge of how FT9ja works, this is your ticket to becoming a FT9ja Hero. You are then required to, over the course of each month, share the information regarding FT9ja with at least 1,000 people over the internet or offline via word of mouth, seminars, etc. We expect our heroes to be creative. The Heroes will have to be committed to continuous learning from the FT9ja as regular updates and refreshers will be implemented.`,
          link: '/articles/how-does-it-work1',
        },
        {
          id: 3,
          title: 'What are the benefits?',
          more0: `Some of the benefits include:`,
          point3: `The opportunity to earn an extra stipend as a super affiliate`,
          point4: `The opportunity to be awarded FT9ja merchandise like shirts, pens, etc.`,
          point5: `All expense paid trips by FT9ja and many more!`,
          // The opportunity to earn an extra stipend as a super affiliate,
          // The opportunity to be awarded FT9ja merchandise like shirts, pens, etc.
          //                  - All expense paid trips by FT9ja and many more!

          link: '/articles/nwhat-are-the-benefits',
        },
        {
          id: 4,
          title: 'How do I get started?',
          answer: `Simply go to our FT9ja Hero site and sign up!
          `,
          link: '/articles/how-do-i-get-started',
        },
      ],
    },
    {
      id: 8,
      title: 'Frequently Asked Questions',
      links: [
        {
          id: 1,
          title: 'I need more clarification. How can I contact you?',
          answer: `All our contact lines are open and you can contact us via any of these means.`,
          more2: `Email Address: info@ft9ja.com `,
          more3: `Whatsapp: +2348138462394`,
          more4: `We’re only a dm away on both Facebook and Instagram.`,
          more5: `Facebook: @ft9ja`,
          more6: `Instagram: @ft9ja.official`,
          more7: `We also have our offices in Abuja and Lagos. You can book an appointment on calendly.com/ft9ja for our Abuja office or calendly.com/ft9ja-lagos for our Lagos office.`,

          link: '/articles/i-need-more-clarification-how-can-i-contact-you',
        },
        {
          id: 2,
          title:
            'I want to make FT9ja better. How do I make a suggestion or complaint?',
          more3: `We sincerely appreciate this and because of how much value we place on the input of our community members we have a designated email address for those suggestions or complaints.`,
          more4: `makeft9jabetter@ft9ja.com`,
          more5: `Simply send your suggestions and complaints to the mail provided above and they will be addressed accordingly.`,
          link: '/articles/i-want-to-make-ft9ja-better-how-do-i-make-a-suggestion-or-complaint',
        },
        {
          id: 3,
          title: 'I want to partner with you. How should I contact you?',
          answer: `All our contact lines are open and you can contact us via any of these means.`,
          more2: `Email Address: info@ft9ja.com `,
          more3: `Whatsapp: +2348138462394`,
          more4: `We’re only a dm away on both Facebook and Instagram.`,
          more5: `Facebook: @ft9ja`,
          more6: `Instagram: @ft9ja.official`,

          link: '/articles/i-want-to-partner-with-you-how-should-i-contact-you',
        },
      ],
    },
    // // {
    // //   id: 9,
    // //   title: 'My account and login',
    // //   links: [
    // //     {
    // //       id: 1,
    // //       title: 'How to sign in to Robinhood from a new device',
    // //       answer: ``,
    // //       link: '/articles/how-to-sign-in-to-robinhood-from-a-new-device',
    // //     },
    // //     {
    // //       id: 2,
    // //       title: 'Updating your notification settings',
    // //       answer: ``,
    // //       link: '/articles/updating-your-notification-settings',
    // //     },
    // //     {
    // //       id: 3,
    // //       title: 'Getting familiar with your username',
    // //       answer: ``,
    // //       link: '/articles/getting-familiar-with-your-username',
    // //     },
    // //   ],
    // },
  ]

  useEffect(() => {
    if (link) {
      const linkData = ''
      if (router.asPath != '/articles/[slug]') {
        localStorage.setItem('linkData', JSON.stringify(link))
        linkData = localStorage.getItem('linkData')
      } else {
        linkData = localStorage.getItem('linkData')
      }
      const data = supportLinks.map((item) =>
        item.links.filter((i) => i.link === link)
      )

      data.map((item) => item.map((i) => setAnswer(i)))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [link])

  useEffect(() => {
    const linkData = ''

    if (router.asPath != '/articles/[slug]') {
      localStorage.setItem('linkData', JSON.stringify(router.asPath))
      linkData = localStorage.getItem('linkData')
    } else {
      linkData = localStorage.getItem('linkData')
    }

    const data = supportLinks.map((item) =>
      item.links.filter((i) => i.link === linkData.replaceAll('"', ''))
    )

    data.map((item) => item.map((i) => setAnswer(i)))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Header />
      <div className="w-full">
        <div className="mx-auto max-w-screen-xl md:px-10">
          <div className="flex py-10">
            <div className="hidden w-1/3 px-5 md:block">
              {supportLinks.map(({ id, title, links }) => (
                <div key={id} className="py-4">
                  <p className="py-2 font-bold">{title}</p>
                  {links.map(({ id, title, link, points }) => (
                    <div
                      key={id}
                      className="py-2 pl-4"
                      onClick={() => setLink(link)}
                    >
                      <Link href={`${link}`}>
                        <a>{title}</a>
                      </Link>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="w-full px-6 sm:px-10 md:w-2/3">
              {answer && (
                <div>
                  <p className="pt-3 pb-10 text-2xl font-bold md:text-4xl">
                    {answer.title}
                  </p>
                  <p>{answer.more0}</p>
                  {answer.point && <li className="py-1">{answer.point}</li>}
                  {answer.point1 && (
                    <li className="py-1">
                      {answer.point1}
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={`https://www.${answer.redirect}`}
                      >
                        <a>{answer.redirect}</a>
                      </a>
                    </li>
                  )}
                  {answer.point2 && (
                    <li className="py-1">
                      {answer.point2}{' '}
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={`https://www.paypal.me/ft9ja`}
                      >
                        <a>{answer.redirect2}</a>
                      </a>
                    </li>
                  )}

                  {answer.point3 && <li className="py-1">{answer.point3}</li>}
                  {answer.point4 && <li className="py-1">{answer.point4}</li>}
                  {answer.point5 && <li className="py-1">{answer.point5}</li>}
                  <p>{answer.answer}</p>
                  {answer.break && <br />}
                  <p>{answer.more}</p>
                  <p>{answer.more1}</p>
                  {answer.point6 && <li className="py-1">{answer.point6}</li>}
                  {answer.section && (
                    <p style={{ marginLeft: '5%' }}>{answer.section}</p>
                  )}
                  {answer.break && <br />}
                  {answer.section1 && (
                    <p style={{ marginLeft: '5%' }}>{answer.section1}</p>
                  )}
                  {answer.break && <br />}
                  {answer.section2 && (
                    <p style={{ marginLeft: '5%' }}>{answer.section2}</p>
                  )}
                  {answer.break && <br />}
                  {answer.section3 && (
                    <p style={{ marginLeft: '5%' }}>{answer.section3}</p>
                  )}
                  {answer.break && <br />}
                  {answer.section4 && (
                    <p style={{ marginLeft: '5%' }}>{answer.section4}</p>
                  )}
                  {answer.break && <br />}
                  {answer.point7 && <li className="py-1">{answer.point7}</li>}
                  {answer.section5 && (
                    <p style={{ marginLeft: '5%' }}>{answer.section5}</p>
                  )}
                  {answer.break && <br />}
                  {answer.section6 && (
                    <p style={{ marginLeft: '5%' }}>{answer.section6}</p>
                  )}
                  {answer.break && <br />}
                  {answer.section7 && (
                    <p style={{ marginLeft: '5%' }}>{answer.section7}</p>
                  )}
                  {answer.break && <br />}
                  {answer.section8 && (
                    <p style={{ marginLeft: '5%' }}>{answer.section8}</p>
                  )}
                  {answer.break && <br />}
                  {answer.section9 && (
                    <p style={{ marginLeft: '5%' }}>{answer.section9}</p>
                  )}
                  {answer.break && <br />}
                  <p>{answer.more2 && answer.more2}</p>
                  <p>{answer.more3 && answer.more3}</p>
                  <p>{answer.more4 && answer.more4}</p>
                  <p>{answer.more5 && answer.more5}</p>
                  <p>{answer.more6 && answer.more6}</p>
                  <p>{answer.more7 && answer.more7}</p>
                  <p>{answer.more8 && answer.more8}</p>
                  <p>{answer.morea && answer.morea}</p>
                  {answer.break2 && <br />}
                  <p>{answer.moreb && answer.moreb}</p>
                  {answer.break2 && <br />}
                  <p>{answer.morec && answer.morec}</p>
                  {answer.break2 && <br />}
                  <p>{answer.mored && answer.mored}</p>
                  {answer.break2 && <br />}
                  <p>{answer.moree && answer.moree}</p>
                  {answer.break2 && <br />}
                  <p>{answer.moref && answer.moref}</p>
                  <p>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`https://www.community.ft9ja.com/`}
                    >
                      {answer.more11 && <a>Here</a>}
                    </a>{' '}
                    {answer.more11}
                  </p>
                  {answer.break1 && <br />}
                  <p>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`https://www.community.ft9ja.com/forum/forex-101-beginner-education`}
                    >
                      <a>{answer.more12}</a>
                    </a>
                  </p>
                  {answer.break1 && <br />}
                  <p>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`https://www.community.ft9ja.com/forum/fundamental-analysis`}
                    >
                      <a>{answer.more13}</a>
                    </a>
                  </p>
                  {answer.break1 && <br />}
                  <p>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`https://www.community.ft9ja.com/forum/indicators-and-price-action`}
                    >
                      <a>{answer.more14}</a>
                    </a>
                  </p>
                  {answer.break1 && <br />}
                  <p>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`https://www.community.ft9ja.com/forum/trading-systems-and-strategies`}
                    >
                      <a>{answer.more15}</a>
                    </a>
                  </p>
                  {answer.break1 && <br />}
                  <p>{answer.more16}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Faq
