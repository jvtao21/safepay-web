import React, { Component } from 'react'

const styles = {
  environment: {
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 'auto',
    width: '100%',
    padding: '30px 20px',
    overflowY: 'scroll'
  },
  sectionHeader: {
    backgroundColor: '#3d95ce',
    position: 'relative',
    padding: '20px',
    boxSizing: 'border-box',
    marginLeft: '-20px',
    marginRight: '-20px',
    marginTop: '-30px'
  },
  title: {
    fontSize: '28px',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'bold'
  },
  paragraph: {
    margin: '15px 0px',
    lineHeight: '26px',
    marginTop: '26px',
    marginBottom: '26px',
    fontFamily: 'Montserrat, sans-serif',
  },
  h3: {
    fontSize: '18px',
    marginBottom: '0px',
    marginTop: '20px',
    lineHeight: '26px',
    fontWeight: 'bold',
    fontFamily: 'Montserrat, sans-serif',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    textRendering: 'optimizeLegibility',
  },
  ul: {
    fontSize: '16px',
    fontFamily: 'Montserrat, sans-serif',
    display: 'block',
    paddingLeft: '40px'
  },
  h4: {
    textDecoration: 'underline',
    fontSize: '16px',
    fontFamily: 'Montserrat, sans-serif'
  },
  contentBody: {
    display:'flex',
    alignItems:'center',
    justifyContent: 'center',
    flex:'1',
    height:'100%'
  },
  center: {
      maxWidth:'880px',
      width:'100%'
  }
}

class Terms extends Component {
  render() {
    return (
      <div className="home-container">
        <div style={styles.environment}>
          <div style={styles.sectionHeader}>
            <h1 style={styles.title}>USER AGREEMENT</h1>
          </div>
          <div style={styles.contentBody}>
          <div style={styles.center}>
          <p style={styles.paragraph}>
            This User Agreement (“Agreement”) is a contract between you and Safepay
            that applies to your use of Safepay’s products and services (the “Services”).
            Except as set forth below, “Safepay” shall mean Intelligent Financial Technologies, Inc.
          </p>
          <p style={styles.paragraph}>
            By registering an account with Safepay or using any of the Services, you agree
            that you have read, understood and accept all of the terms and conditions contained
            in this Agreement and you acknowledge and agree that you will be bound by these
            agreements and policies. Section 23 of this Agreement governs how this Agreement may
            be changed over time. The text in the boxes throughout this Agreement is there to
            help you understand the Agreement, but is not part of the Agreement.
            If after reading this Agreement in its entirety you are still unsure of anything or
            you have any questions, please contact Support.
          </p>
          <h3 style={styles.h3}>1. Eligibility; Limitations</h3>
          <p style={styles.paragraph}>
            You must be an individual of at least 13 years of age who resides in Pakistan to enter
            into this Agreement. In order to link a bank account or debit card to your account,
            you must be at least 18 years of age. You cannot link a business bank account or
            card to Safepay and Safepay does not currently support business or merchant accounts
            (even if you link a personal bank account or debit card). Use of certain Services
            may have further eligibility requirements that will need to be verified prior to
            you using such Services or from time to time in order to continue your use of the Services.
          </p>
          <h3 style={styles.h3}>2. Registration Process; Identity Verification</h3>
          <p style={styles.paragraph}>
            You may register only one (1) Safepay Account. If you open additional accounts, we reserve
            the right to immediately close such additional accounts and transfer any balance to your
            other Safepay Account or return it to the original funding source.
          </p>
          <p style={styles.paragraph}>
            When registering for your Safepay Account, you must provide current, complete, and accurate
            information for all required elements on the registration page, including your full legal name.
            If any of this information changes, it is your obligation to update such information as soon
            as possible. From time to time we may also require you to provide further information as a
            condition for continued use of the Services, including but not limited to a copy of your
            government issued photo ID. If you wish to link a bank account or debit card to your Safepay Account,
            you authorize Safepay, directly or through third parties, to make any inquiries we deem necessary
            to validate your identity and account information. This may include requesting further information
            about you such as your date of birth, email address, physical address, social security number,
            and bank account or card information so that we can confirm your identity. We reserve the right
            to maintain your account registration information after you close your account for business and
            regulatory compliance purposes.
          </p>
          <p style={styles.paragraph}>
            From time to time we may be required to request further information regarding your transactions
            in order to comply with federal and state law. Failure to provide such information in a timely
            fashion may result in the suspension of your ability to transact until you provide such information
            or the closure of your Safepay Account.
          </p>
          <h3 style={styles.h3}>3. Privacy</h3>
          <p style={styles.paragraph}>
            We are committed to protecting your personal information and helping you understand exactly
            how your personal information is being used. You should carefully read our Privacy Policy,
            as it provides details on how your personal information is collected, stored, protected, and used.
          </p>
          <h3 style={styles.h3}>4. Communications</h3>
          <p style={styles.paragraph}>
            By entering into this Agreement, you agree to receive electronic communications and
            notifications in accordance with our E-Sign Consent Policy.
          </p>
          <p style={styles.paragraph}>
            This Agreement is provided to you and concluded in English. We will also communicate with
            you in English for all matters related to your use of our Services. Where we have provided
            you with a translation of the English language version of this Agreement, you agree that
            the translation is provided for your convenience only and that the English language version
            of the Agreement will govern your use of the Services.
          </p>
          <h3 style={styles.h3}>5. Security of User Information</h3>
          <p style={styles.paragraph}>
            You are responsible for maintaining the confidentiality and security of any and all
            account names, user IDs, passwords, personal identification numbers (PINs) and
            mobile unlock codes that you use to access the Services. You are responsible for
            keeping your email address up to date in your Safepay Account profile and for
            maintaining the confidentiality of your user information. You agree to (i) notify
            Safepay immediately if you become aware of any unauthorized use of the Services
            or any other breach of security regarding the Services and (ii) enable all
            relevant security features such as two-factor authentication and PIN Code or TouchID
            access control. Safepay will not be liable for any loss or damage arising from
            your failure to protect your account information.
          </p>
          <p style={styles.paragraph}>
            We shall not bear any liability for any damage or interruptions caused by any
            computer viruses, spyware, or other malware that may affect your computer or
            other equipment, or any phishing, spoofing, or other attack. We advise the
            regular use of a reliable virus and malware screening and prevention software.
            If you question the authenticity of a communication purporting to be from Safepay,
            you should login to your account through the Safepay mobile applications,
            not by clicking links contained in emails.
          </p>
          <h3 style={styles.h3}>6. Account Suspension & Closure</h3>
          <p style={styles.paragraph}>
            We may, in our sole and absolute discretion, without liability to you or any
            third party, refuse to let you open an account, suspend your account, or
            terminate your account or your use of one or more of the Services.
            Such actions may be taken as a result of account inactivity, failure to
            respond to customer support requests, failure to positively identify you or
            your violation of the terms of this Agreement (including, but not limited to, Sections 14 and 15).
            If you have a balance remaining in a Safepay Account which has been suspended or closed,
            you will be able to recover such funds, unless prohibited by law or a court order or
            where we have determined that such funds were obtained fraudulently.
            Safepay shall have full discretion as to the means by which you will receive such
            funds following our decision to return such funds. We reserve the right to require
            you to provide further identifying information before processing such withdrawal or
            transfer requests and to delay or prohibit such withdrawal or transfer if we believe
            fraudulent or illegal activity has occurred. If you are unable to login to your Safepay Account,
            you will need to contact Support to process such withdrawal.
          </p>
          <p style={styles.paragraph}>
            You may terminate this Agreement at any time by closing your Safepay Account and
            discontinuing use of the Services. Upon termination of this Agreement and your
            Safepay Account, you remain liable for all transactions made while your
            Safepay Account was open.
          </p>
          <h3 style={styles.h3}>7. Services; Third Parties</h3>
          <p style={styles.paragraph}>
            Safepay provides you with a secure and convenient way to establish an account
            for purposes of (i) depositing funds from a linked bank account debit card or
            credit card (if available), (ii) holding an account balance,
            (iii) sending and receiving fiat currency with other Safepay users; provided
            that any of these Services can be discontinued at any time in
            accordance with Section 11.
          </p>
          <p style={styles.paragraph}>
            Safepay is an independent contractor for all purposes and is not your agent or
            trustee. Safepay does not have control of, or liability for, any products
            or services that are purchased or sold by third parties using the Services.
            Safepay does not guarantee the identity of any user or other party or ensure
            that a buyer or seller is authorized to complete a transaction or will complete a
            transaction. Safepay is not liable for any losses or issues that may arise from
            such third party transactions, including, but not limited to, legality, quality,
            delivery, or satisfaction with any products purchased. If you are not satisfied
            with any goods or services purchased from, or sold to, a third party using the Services,
            you must handle those issues directly with the third party seller or buyer,
            as applicable.
          </p>
          <h3 style={styles.h3}>8. Mobile Services</h3>
          <p style={styles.paragraph}>
            To the extent you access the Services through a mobile device, your wireless service
            carrier’s standard charges, data rates, and other fees may apply. In addition,
            downloading, installing, or using certain mobile applications may be prohibited or
            restricted by your carrier, and not all Services may work with all carriers or devices.
            By using mobile Services, you agree that we may communicate with you by SMS, MMS,
            text message, push notification, and/or other electronic means via your mobile device
            and that certain information about your usage of the Services may be communicated to us.
            In the event that you change or deactivate your mobile telephone number, you agree to
            promptly update your account information to ensure that your messages are not sent
            to any person who might acquire your old number.
          </p>
          <p style={styles.paragraph}>
            You hereby confirm that with respect to any mobile phone number provided,
            you own the account corresponding to that mobile phone number or otherwise
            have the account holder’s permissions to use this service.
          </p>
          <h3 style={styles.h3}>9. Fees; Authorization</h3>
          <p style={styles.paragraph}>
            Except as disclosed in this Section 9 or as disclosed to you prior to confirming
            a transaction that would incur a fee, Safepay does not charge any fees for
            deposits from bank accounts or debit cards, storing funds, or sending or
            receiving funds, or bitcoin insurance. If you choose to withdraw funds to a
            debit card, you may be charged certain fees based on the frequency of your
            withdrawals, but any such fees will be disclosed to you prior to confirming
            such withdrawals. If you choose to deposit funds using a credit card (if available to you),
            you will incur a percentage-based fee that will be disclosed to you at the time
            of such deposit. You also agree to pay any other fees that are disclosed to you
            with respect to the Services or that may be charged by your bank.
          </p>
          <p style={styles.paragraph}>
            By linking a bank account, debit card, or credit card to your account, you authorize
            Safepay to communicate with your bank or card issuer to provide or obtain any
            information required by Safepay or your bank or card issuer in connection with providing
            the Services to you. By providing this information your bank is neither endorsing
            Safepay nor is it in any way responsible for the Services.
          </p>
          <p style={styles.paragraph}>
            When you use your bank account, debit card, or credit card to deposit funds,
            you are requesting an electronic transfer of funds. For bank account transactions,
            Safepay will make electronic fund transfers from your bank account in the amount you
            specify. You agree that such requests constitute your authorization to Safepay to make
            such transfers. Once you have provided your authorization for a transfer, you will not
            be able to cancel the electronic transfer. You hereby give Safepay the right to
            resubmit any electronic fund transfer you authorized that is returned for insufficient
            or uncollected funds. You also authorize us to amend your Safepay Account activity to
            correct such error. You authorize Safepay to take necessary action to reverse, credit,
            or debit any payment in connection with any necessary chargebacks, reversals,
            refunds, or adjustments.
          </p>
          <p style={styles.paragraph}>
            You agree that you will not receive interest or other earnings on the funds that
            you hold on deposit with Safepay and that Safepay handles and places in pooled
            accounts with its banking partners. In consideration for your use of Safepay’s
            product and services, you irrevocably transfer and assign to Safepay any ownership
            right that you may have in the interest (if any) that may accrue on funds held on
            your behalf by Safepay in pooled accounts in consideration for the expenses incurred
            by Safepay in connection with maintaining such accounts. This assignment applies only
            to interest earned on your funds, and nothing in this Agreement grants Safepay any
            ownership right to the principal of the funds you maintain as a balance in your
            Safepay Account.
          </p>
          <h3 style={styles.h3}>10. Transaction Limits</h3>
          <p style={styles.paragraph}>
            Safepay reserves the right to change the deposit, withdrawal, conversion, storage,
            and velocity limits on your account as we deem necessary. We may establish
            individual or aggregate transaction limits on the size or number of deposits or
            withdrawals you make during any specified time period.
          </p>
          <h3 style={styles.h3}>11. Right to Change/Remove Features or Suspend/Delay Transactions</h3>
          <p style={styles.paragraph}>
            We reserve the right to change, suspend, or discontinue any aspect of the Services
            at any time, including hours of operation or availability of any feature,
            without notice and without liability. We may decline to process any deposit or
            withdrawal without prior notice and may limit or suspend your use of one or more
            Services at any time, in our sole discretion. Suspension of your use of any of the
            Services will not affect your rights and obligations pursuant to this Agreement.
            We may, in our sole discretion, delay deposits or withdrawals if we believe the
            transaction is suspicious, may involve fraud or misconduct, violates applicable
            laws, or violates the terms of this Agreement.
          </p>
          <h3 style={styles.h3}>12. Insufficient Funds</h3>
          <p style={styles.paragraph}>
            If at any point your account has a negative balance (as a result of a deposit being
            charged back, rejected, reversed or otherwise), Safepay may deduct amounts you owe
            from the balance of your account from funds you subsequently deposit or receive into
            your account or from any other Safepay Account that you hold. If Safepay requests
            that you complete a deposit in order to resolve a negative balance issue and you fail
            to do so, you authorize Safepay to initiate a deposit in the amount of such deficiency
            from your linked bank account or debit card. If you have more than one account,
            Safepay may set off the negative balance in one account by using any balance that you
            hold in your other accounts (and then close such additional accounts). To secure your
            performance of this Agreement, you grant to Safepay a lien on and security interest
            in and to the balances in your account.
          </p>
          <p style={styles.paragraph}>
            In the event that Safepay is forced to engage a third party to assist with the
            recovery of any negative balance, overdraft or chargeback, you will be charged
            any fees or expenses that are incurred by Safepay in connection with such recovery
            efforts, including, but not limited to, collection fees or convenience fees charged
            by third parties. You hereby explicitly agree that all communication in relation to a
            delinquent account will be made by electronic mail or phone. Such communication may
            be made by Safepay or by any third party acting on its behalf, including but not
            limited to a third party collection agent.
          </p>
          <h3 style={styles.h3}>13. Refunds; Reversals</h3>
          <p style={styles.paragraph}>
            Once a transaction has been initiated, it cannot be reversed. Deposits using a
            bank account, debit card, or credit card may be reversed or may be subject to a
            chargeback or related claim. Except as set forth in this Agreement, all payment
            transactions processed through the Services are non-refundable. You may have
            additional refund or charge-back rights under your agreement with the recipient
            of such funds, your bank, or applicable law. You should periodically review statements
            from your bank, which should reflect all applicable payment transactions made using
            that payment method. You can also always access the record of your transactions
            by logging into your Safepay Account.
          </p>
          <h3 style={styles.h3}>14. Restricted Activities</h3>
          <p style={styles.paragraph}>
            In connection with your use of Services, you hereby agree that you will not:
          </p>
          <ul style={{...styles.paragraph, ...styles.ul}}>
            <li>violate (or assist any other party in violating) any applicable law, statute, ordinance, or regulation;</li>
            <li>intentionally try to defraud (or assist in the defrauding of) Safepay or other Safepay users;</li>
            <li>provide false, inaccurate, or misleading information;</li>
            <li>take any action that interferes with, intercepts, or expropriates any system, data, or information;</li>
            <li>partake in any transaction involving the proceeds of illegal activity;</li>
            <li>transmit or upload any virus, worm, or other malicious software or program;</li>
            <li>attempt to gain unauthorized access to other Safepay Accounts, the Safepay website, or any related networks or systems;</li>
            <li>use the Services on behalf of any third party or otherwise act as an intermediary between Safepay and any third parties;</li>
            <li>collect any user information from other Safepay users, including, without limitation, email addresses;</li>
            <li>defame, harass, or violate the privacy or intellectual property rights of Safepay or any other Safepay users; or</li>
            <li>upload, display or transmit any messages, photos, videos or other media that contain illegal goods,
            pornographic, violent, obscene or copyrighted images or materials for use as an avatar,
            in connection with a payment or payment request, or otherwise.</li>
          </ul>
          <h3 style={styles.h3}>15. Prohibited Payments</h3>
          <p style={styles.paragraph}>
            Using the Services to make the following types of payments is prohibited, and Safepay reserves
            the right to monitor for payments that relate to:
          </p>
          <ul style={{...styles.paragraph, ...styles.ul}}>
            <li>any Restricted Persons or persons or entities located in Restricted Territories;
            </li>
            <li>weapons of any kind, including but not limited to firearms, ammunition, knives, or related accessories;</li>
            <li>controlled substances including but not limited to narcotics, prescription drugs, steroids,
              or related paraphernalia or accessories;
            </li>
            <li>
              gambling activities including but not limited to sports betting,
              casino games, horse racing, dog racing, lotteries, games of chance, sweepstakes,
              games of skill that may be classified as gambling (i.e. poker), or
              other activities that facilitate any of the foregoing;
            </li>
            <li>constitute money-laundering or terrorist financing;</li>
            <li>any sort of ponzi scheme, pyramid scheme, or multi-level marketing program;</li>
            <li>
              goods or services that infringe or violate any copyright, trademark, or proprietary rights under
              the laws of any jurisdiction;
            </li>
            <li>debt settlement, refinance, or credit repair services;</li>
            <li>court ordered payments, structured settlements, tax payments, or tax settlements;</li>
            <li>the sale of money orders or cashier’s checks or any money transmitter activity;</li>
            <li>lottery contracts, layaway systems, or annuities;</li>
            <li>counterfeit goods, including but not limited to fake or “novelty” IDs;</li>
            <li>
              purchasing goods from Tor hidden service markets or “Darknet” markets, or any other service or
              website that acts as a marketplace for illegal goods (even though such marketplace might also sell legal goods);
            </li>
            <li>
              any other matters which we communicate to you that are unacceptable from time to time
              and which, for example, may be restricted by our and your bank or payment partners.
            </li>
          </ul>
          <p style={styles.paragraph}>
            In the event that Safepay learns that you are making any such prohibited payments, Safepay may
            suspend or terminate your Safepay Account.
          </p>
          <h3 style={styles.h3}>16. Unauthorized Transactions</h3>
          <p style={styles.paragraph}>
            If an Unauthorized Transaction (as defined below) or Error (as defined below) occurs
            through your account, and you follow the procedures set forth in this Section 19,
            Safepay will reimburse you for the amount of any eligible Unauthorized
            Transaction and any losses resulting from an Error, subject to the limitations
            set forth in this Section 16.
          </p>
          <h4 style={{...styles.paragraph, ...styles.h4}}>What Constitutes an Unauthorized Transaction or Error?</h4>
          <p style={styles.paragraph}>
            For purposes of this Section 16, “Unauthorized Transaction” means a transaction
            that was initiated from your account without your authorization and that does not benefit you.
          </p>
          <p style={styles.paragraph}>
            For purposes of this Section 16, an “Error” means one of the following: (i) if your bank account,
            debit card or credit card is charged for a deposit, Safepay receives the funds, but it doesn’t
            show up in your account, (ii) if you complete a withdrawal and the funds are not properly
            delivered by Safepay to your bank account, debit card or credit card, (iii) if you send a
            payment and we debit your account for an amount in excess of the send amount, (iv) if you
            receive a payment and we do not add the proper amount to your account, (v) if the transaction
            records in your Safepay Account do not accurately reflect your transactions, or (vi) there is
            some other material mathematical or computational error by Safepay.
          </p>
          <h4 style={{...styles.paragraph, ...styles.h4}}>Notifying Safepay of an Unauthorized Transaction or Error</h4>
          <p style={styles.paragraph}>
            You should notify us immediately if you believe that (i) an Unauthorized Transaction or Error
            has occurred, (ii) your password and/or two-factor authentication access has been compromised,
            (iii) a device on which you have downloaded the Safepay app or which contains an active Safepay
            session has been stolen or lost, or (iv) you believe there is an Error in your transaction
            records or account history, or you have a question regarding your transaction records or
            account history.
          </p>
          <p style={styles.paragraph}>
            In order for Unauthorized Transactions or Errors to be covered by Safepay, you must notify
            us within sixty (60) days of such Unauthorized Transaction or Error showing up in your transaction
            history and/or account statement. If you do not notify us within sixty (60) days, then
            you will not be covered by the protections of this Section 16.
          </p>
          <h4 style={{...styles.paragraph, ...styles.h4}}>Notification Process</h4>
          <p style={styles.paragraph}>
            The fastest and most efficient way to notify us of an Unauthorized Transaction or Error is to
            contact Support via email at hello@getsafepay.com.
          </p>
          <p style={styles.paragraph}>
            However you choose to notify us, you must include: (i) the name, email and
            phone number associated with your Safepay Account, (ii) a detailed description of what
            Unauthorized Transaction or Error you believe occurred, or what information you need
            in order to determine if an Unauthorized Transaction or Error occurred, and (iii)
            the rupee amount of such Unauthorized Transaction or Error.
          </p>
          <p style={styles.paragraph}>
            Note that in connection with investigating and/or resolving any Unauthorized
            Transaction or Error, we may need to request further information from you
            regarding the circumstances of the Unauthorized Transaction or Error.
            If you do not provide such additional information, it may inhibit our ability
            to resolve your issue or your rights under this Section 16.
          </p>
          <h4 style={{...styles.paragraph, ...styles.h4}}>Steps Safepay Will Take Following Notification</h4>
          <p style={styles.paragraph}>
            Once you have provided us with proper notification (including delivering all of the
            information set forth in the subsection above and responding to any requests for
            further information), we will investigate the potential Unauthorized Transaction
            or Error. We will typically be able to complete our investigation within ten (10)
            days, but may require up to thirty (30) days if your account is new
            (meaning your account has been open for less than thirty (30) days at the
            time we receive your notification).
          </p>
          <p style={styles.paragraph}>
            Sometimes, we may need more time in order to complete our investigation
            (up to thirty (30) days, or sixty (60) days for a new account). If we need to take more
            than ten (10) days to investigate your claim (or thirty (30) days for new accounts),
            we will provisionally credit your account with the amount of such
            Unauthorized Transaction or Error.
          </p>
          <p style={styles.paragraph}>
            Once we have completed our investigation, we will notify you of our decision
            within three (3) business days. If we have determined that your claim of an
            Unauthorized Transaction or Error is valid and eligible, we will credit your
            account for the amount of the Unauthorized Transaction or Error, subject to the
            limitations set forth below. If we have already provisionally credited your
            account and determine that your claim of an Unauthorized Transaction or Error
            is valid and eligible, you will be allowed to keep such provisional credit.
            If we have already provisionally credited your account and determine that your
            claim of an Unauthorized Transaction or Error is not valid and/or eligible,
            the amount provisionally credited will be debited from your account.
          </p>
          <p style={styles.paragraph}>
            Regardless of the results of our investigation, we will send you an email
            explaining the basis for our decision. If you have any questions or concerns
            regarding our decision, you can request further information regarding the
            details that led to our decision.
          </p>
          <h4 style={{...styles.paragraph, ...styles.h4}}>Errors We Discover</h4>
          <p style={styles.paragraph}>
            If we discover an Error on our own that results in you receiving less than
            the amount of funds to which you are entitled, we will rectify it by crediting
            your account for the difference. If we discover an Error on our own that
            results in you receiving more than the amount of funds to which you are entitled,
            we will rectify it by debiting your account for the difference.
          </p>
          <h4 style={{...styles.paragraph, ...styles.h4}}>Your Liability for Unauthorized Transactions</h4>
          <p style={styles.paragraph}>
            Your liability for Unauthorized Transactions is determined by how quickly
            you report it to us. If you tell us within two (2) business days after you l
            earn of the compromise of your account or login credentials,
            you can lose no more than Rs 5000 if someone used your login credentials
            without your permission. If you do NOT tell us within two (2) Business Days
            after you learn of the compromise of your account or login credentials,
            and we can prove we could have stopped someone from using your account
            without your permission if you had told us, you could lose as much as Rs 50,000.
          </p>
          <h3 style={styles.h3}>17. Reversals, Chargebacks & Other Claims</h3>
          <p style={styles.paragraph}>
            If a payment that you receive is later invalidated for any reason, you are
            responsible to Safepay for the full amount of such payment. This means that
            if the sender disputes the authorization for transaction or initiates a
            chargeback with their bank or card issuer, you may be liable for the full
            amount of such payment. If it is determined that such transaction was
            unauthorized or the chargeback is validated by the sender’s bank or card issuer,
            you authorize Safepay to recover any amounts due to Safepay by deducting
            such amount from your Safepay Account balance. In the event that your Safepay Account
            balance is not sufficient to cover the full amount, you authorize Safepay to
            reverse any withdrawals or require you to take other steps to reimburse Safepay.
            If Safepay is unable to recover the full amount that is owed, Safepay may take
            additional steps including the initiation of legal actions to recover
            the full amount, to the extent allowed by applicable law.
          </p>
          <h3 style={styles.h3}>18. Taxes</h3>
          <p style={styles.paragraph}>
            Safepay will maintain a record of your transaction history, which you will
            be able to access through your Safepay Account for purposes of making any
            required tax filings or payments, but it is your responsibility to determine what,
            if any, taxes apply to the payments you make or receive, and to collect,
            report, and remit the correct tax to the appropriate tax authority.
            Safepay will make any tax withholdings or filings that we are required by law
            to make, but Safepay is not responsible for determining whether taxes apply
            to your transaction, or for collecting, reporting, or remitting any taxes arising
            from any transaction.
          </p>
          <h3 style={styles.h3}>19. Indemnification; Release</h3>
          <p style={styles.paragraph}>
            You agree to indemnify and hold Safepay, its affiliates, and service providers,
            and each of their officers, directors, agents, joint venturers, employees, and
            representatives harmless from any claim or demand (including attorneys’ fees and
            any losses, fines, fees or penalties imposed by any regulatory authority)
            arising out of your breach of this Agreement, your violation of any law or
            regulation or your use of the Services.
          </p>
          <p style={styles.paragraph}>
            For the purpose of this Section 19, the term “losses” means all net costs
            reasonably incurred by us or the other persons referred to in this Section
            which are the result of the matters set out in this Section 19 and which may
            relate to any claims, demands, causes of action, debt, cost, expense or other
            liability, including reasonable legal fees (without duplication).
          </p>
          <p style={styles.paragraph}>
            If you have a dispute with one or more users or third parties, you release
            Safepay (and its affiliates and service providers, and each of their
            officers, directors, agents, joint ventures, employees and representatives)
            from any and all claims, demands, and damages (actual and consequential) of
            every kind and nature arising out of or in any way connected with such disputes.
          </p>
          <h3 style={styles.h3}>20. Limitation of Liability; No Warranty</h3>
          <p style={styles.paragraph}>
            YOU EXPRESSLY UNDERSTAND AND AGREE THAT Safepay AND OUR AFFILIATES AND
            SERVICE PROVIDERS, AND THEIR RESPECTIVE OFFICERS, DIRECTORS, AGENTS, JOINT
            VENTURERS, EMPLOYEES, AND REPRESENTATIVES WILL NOT BE LIABLE FOR ANY INDIRECT,
            INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY DAMAGES, OR DAMAGES FOR LOSS
            OF PROFITS INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF GOODWILL, USE,
            DATA, OR OTHER INTANGIBLE LOSSES (EVEN IF Safepay HAS BEEN ADVISED OF THE
            POSSIBILITY OF SUCH DAMAGES), WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE,
            STRICT LIABILITY, OR OTHERWISE, RESULTING FROM: (I) THE USE OR THE INABILITY TO USE THE SERVICES;
            (II) THE COST OF PROCUREMENT OF SUBSTITUTE GOODS AND SERVICES RESULTING FROM ANY GOODS, DATA,
            INFORMATION, OR SERVICES PURCHASED OR OBTAINED OR MESSAGES RECEIVED OR TRANSACTIONS ENTERED
            INTO THROUGH OR FROM THE SERVICES; (III) UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR
            TRANSMISSIONS OR DATA; OR (IV) ANY OTHER MATTER RELATING TO THE SERVICES.
          </p>
          <p style={styles.paragraph}>
            SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES OR THE
            LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES.
            ACCORDINGLY, SOME OF THE LIMITATIONS SET FORTH ABOVE MAY NOT APPLY TO YOU.
            IF YOU ARE DISSATISFIED WITH ANY PORTION OF THE SERVICES OR WITH THIS AGREEMENT,
            YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USE OF THE SERVICES AND CLOSE
            YOUR ACCOUNT.
          </p>
          <p style={styles.paragraph}>
            THE SERVICES ARE PROVIDED "AS IS" AND WITHOUT ANY REPRESENTATION OR WARRANTY,
            WHETHER EXPRESS, IMPLIED OR STATUTORY. Safepay, OUR AFFILIATES, AND OUR RESPECTIVE
            OFFICERS, DIRECTORS, AGENTS, JOINT VENTURERS, EMPLOYEES, AND SUPPLIERS SPECIFICALLY
            DISCLAIM ANY IMPLIED WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR
            PURPOSE OR NON-INFRINGEMENT. Safepay MAKES NO WARRANTY THAT (I) THE SERVICES WILL
            MEET YOUR REQUIREMENTS, (II) THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE,
            OR ERROR-FREE, OR (III) THE QUALITY OF ANY PRODUCTS, SERVICES, INFORMATION,
            OR OTHER MATERIAL PURCHASED OR OBTAINED BY YOU WILL MEET YOUR EXPECTATIONS.
          </p>
          <p style={styles.paragraph}>
            Safepay will make reasonable efforts to ensure that requests for electronic
            debits and credits involving bank accounts, credit cards, and check issuances
            are processed in a timely manner, but Safepay makes no representations or
            warranties regarding the amount of time needed to complete processing because
            the Services are dependent upon many factors outside of our control,
            such as delays in the banking system or the Pakistani mail service.
          </p>
          <h3 style={styles.h3}>21. Force Majeure</h3>
          <p style={styles.paragraph}>
            Safepay shall have no liability for any failure or delay resulting from any
            condition beyond our reasonable control, including but not limited to
            governmental action or acts of terrorism, earthquake, fire, flood, or other
            acts of God, labor conditions, power failures, equipment failures,
            and Internet disturbances.
          </p>
          <h3 style={styles.h3}>22. Arbitration</h3>
          <p style={styles.paragraph}>
            Except for claims for injunctive or equitable relief or claims regarding
            intellectual property rights (which may be brought, in an individual
            capacity only, and not on a class-wide or representative basis, in the courts
            specified in Section 30 without the posting of a bond), any dispute between
            you and Safepay related in any way to, or arising in any way from, our Services or this
            Agreement (“Dispute”) shall be finally settled on an individual, non-representative
            basis in binding arbitration, as modified by this Agreement, or in accordance with rules
            on which we may mutually agree; provided, however, that to the extent a Dispute
            is within the scope of a small claims court’s jurisdiction, either you or Safepay
            may commence an action in small claims court, in the county of your most recent
            physical address, to resolve the Dispute.
          </p>
          <p style={styles.paragraph}>
            Any arbitration will be conducted by a single, neutral arbitrator and shall
            take place in the county of your most recent physical address. The arbitrator
            may award any relief that a court of competent jurisdiction could award,
            including attorneys’ fees when authorized by law. The arbitral decision may
            be enforced in any court of competent jurisdiction. An arbitral decision is
            subject to very limited review by a court.
          </p>
          <h3 style={styles.h3}>23. Amendments</h3>
          <p style={styles.paragraph}>
            We may amend any portion of this Agreement at any time by posting the revised
            version of this Agreement with an updated revision date. The changes will
            become effective, and shall be deemed accepted by you, the first time you
            use the Services after the initial posting of the revised User Agreement
            and shall apply on a going-forward basis with respect to transactions
            initiated after the posting date. In the event that you do not agree with
            any such modification, your sole and exclusive remedy is to terminate your
            use of the Services and close your account. You agree that we shall not be
            liable to you or any third party as a result of any losses suffered by
            any modification or amendment of this Agreement.
          </p>
          <p style={styles.paragraph}>
            If the revised Agreement includes a material change we will provide you
            with prior notice via our website and/or email before the material
            change becomes effective. For this purpose a “material change”
            means a significant change other than changes that (i) are to your benefit,
            (ii) are required to be made to comply with applicable laws and/or regulations
            or as otherwise required by one of our regulators, (iii) relates to a
            new product or service made available to you, or (iv) to otherwise
            clarify an existing term.
          </p>
          <h3 style={styles.h3}>24. Assignment</h3>
          <p style={styles.paragraph}>
            You may not transfer or assign this Agreement or any rights or obligations
            hereunder, by operation of law or otherwise and any such attempted assignment
            shall be void. We reserve the right to freely assign this Agreement and the
            rights and obligations of this Agreement to any third party at any time without
            notice or consent. If you object to such transfer or assignment, you may stop
            using our Services and terminate this Agreement by contacting Support and
            asking us to close your account.
          </p>
          <h3 style={styles.h3}>25. Survival</h3>
          <p style={styles.paragraph}>
            Upon termination of your account or this Agreement for any other reason, all rights
            and obligations of the parties that by their nature are continuing
            will survive such termination.
          </p>
          <h3 style={styles.h3}>26. Third Party Applications</h3>
          <p style={styles.paragraph}>
            If you grant express permission to a third party to connect to your account,
            either through the third party's product or through Safepay, you acknowledge
            that granting permission to a third party to take specific actions on your
            behalf does not relieve you of any of your responsibilities under this Agreement.
            Further, you acknowledge and agree that you will not hold Safepay responsible
            for, and will indemnify Safepay from, any liability arising from the actions
            or inactions of this third party in connection with the permissions you grant.
          </p>
          <h3 style={styles.h3}>27. Website; Third Party Content</h3>
          <p style={styles.paragraph}>
            Safepay strives to provide accurate and reliable information and content on
            the Safepay website, but such information may not always be correct,
            complete, or up to date. Safepay will update the information on the
            Safepay website as necessary to provide you with the most up to date
            information, but you should always independently verify such information.
            The Safepay website may also contain links to third party websites,
            applications, events or other materials (“Third Party Content”).
            Such information is provided for your convenience and links or
            references to Third Party Content do not constitute an endorsement by
            Safepay of any products or services. Safepay shall have no liability
            for any losses incurred as a result of actions taken in reliance on the
            information contained on the Safepay website or in any Third Party Content.
          </p>
          <h3 style={styles.h3}>28. Limited License; IP Rights</h3>
          <p style={styles.paragraph}>
            We grant you a limited, non-exclusive, non-sublicensable, and non-transferable
            license, subject to the terms and conditions of this Agreement, to access
            and use the the Services solely for approved purposes as determined by Safepay.
            Any other use of the Services is expressly prohibited. Safepay and its
            licensors reserve all rights in the Services and you agree that this Agreement
            does not grant you any rights in or licenses to the Services except for the
            limited license set forth above. Except as expressly authorized by Safepay,
            you agree not to modify, reverse engineer, copy, frame, scrape, rent, lease,
            loan, sell, distribute, or create derivative works based on the Services,
            in whole or in part. If you violate any portion of this Agreement, your permission
            to access and use the Services may be terminated pursuant to this Agreement. "getsafepay.com",
            "Safepay", and all logos related to the Services are either trademarks, or registered
            marks of Safepay or its licensors. You may not copy, imitate, or use them without
            Safepay's prior written consent. All right, title, and interest in and to the
            Safepay website, any content thereon, the Services, and all technology and any
            content created or derived from any of the foregoing is the exclusive
            property of Safepay and its licensors.
          </p>
          <h3 style={styles.h3}>29. Unclaimed Property</h3>
          <p style={styles.paragraph}>
            If Safepay is holding funds in your account, and Safepay is unable to contact
            you and has no record of your use of the Services for several years,
            applicable law may require Safepay to report these funds as unclaimed
            property to the applicable jurisdiction. If this occurs,
            Safepay will try to locate you at the address shown in our records,
            but if Safepay is unable to locate you, it may be required to deliver
            any such funds to the applicable state or jurisdiction as unclaimed property.
            Safepay reserves the right to deduct a dormancy fee or other administrative charges
            from such unclaimed funds, as permitted by applicable law.
          </p>
          <h3 style={styles.h3}>30. Entire Agreement</h3>
          <p style={styles.paragraph}>
            The failure of Safepay to exercise or enforce any right or provision of the
            Agreement shall not constitute a waiver of such right or provision.
            If any provision of this Agreement shall be adjudged by any court of
            competent jurisdiction to be unenforceable or invalid, that provision
            shall be limited or eliminated to the minimum extent necessary so
            that this Agreement shall otherwise remain in full force and effect
            and remain enforceable between the parties, except as specified in Section 23.
            The heading and explanatory text are for reference purposes only and in no way define,
            limit, construe, or describe the scope or extent of such section. This Agreement,
            including Safepay’s policies governing the Services referenced herein,
            the Privacy Policy, the Cookie Policy and the E-Sign Consent constitute
            the entire agreement between you and Safepay with respect to the use of the Services.
            This Agreement is not intended and shall not be construed to create any rights or
            remedies in any parties other than you and Safepay and other Safepay affiliates which
            each shall be a third party beneficiary of this Agreement, and no other person shall
            assert any rights as a third party beneficiary hereunder.
          </p>
        </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Terms
