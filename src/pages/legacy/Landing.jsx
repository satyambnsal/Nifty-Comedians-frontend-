// import 'regenerator-runtime/runtime';
import React from 'react';
import { logout } from '../../common/utils/near_contract';

import './global.css';

export default function Home() {
  const [greeting, setGreeting] = React.useState();
  const [buttonDisabled, setButtonDisabled] = React.useState(true);

  // after submitting the form, we want to show Notification
  const [showNotification, setShowNotification] = React.useState(false);

  // The useEffect hook can be used to fire side-effects during render
  // Learn more: https://reactjs.org/docs/hooks-intro.html
  React.useEffect(
    () => {
      // in this case, we only care to query the contract when signed in
      if (window.walletConnection.isSignedIn()) {
        // window.contract is set by initContract in index.js
        window.contract
          .getGreeting({ accountId: window.accountId })
          .then((greetingFromContract) => {
            setGreeting(greetingFromContract);
          });
      }
    },

    // The second argument to useEffect tells React when to re-run the effect
    // Use an empty array to specify "only run on first render"
    // This works because signing into NEAR Wallet reloads the page
    []
  );

  return (
    <>
      <button className='link' style={{ float: 'right' }} onClick={logout}>
        Sign out
      </button>
      <main>
        <h1>
          <label
            htmlFor='greeting'
            style={{
              color: 'var(--secondary)',
              borderBottom: '2px solid var(--secondary)',
            }}
          >
            {greeting}
          </label>
          {
            ' ' /* React trims whitespace around tags; insert literal space character when needed */
          }
          {window.accountId}!
        </h1>
        <form
          onSubmit={async (event) => {
            event.preventDefault();

            // get elements from the form using their id attribute
            const { fieldset, greeting } = event.target.elements;

            // hold onto new user-entered value from React's SynthenticEvent for use after `await` call
            const newGreeting = greeting.value;

            // disable the form while the value gets updated on-chain
            fieldset.disabled = true;

            try {
              // make an update call to the smart contract
              await window.contract.setGreeting({
                // pass the value that the user entered in the greeting field
                message: newGreeting,
              });
            } catch (e) {
              alert(
                'Something went wrong! ' +
                  'Maybe you need to sign out and back in? ' +
                  'Check your browser console for more info.'
              );
              throw e;
            } finally {
              // re-enable the form, whether the call succeeded or failed
              fieldset.disabled = false;
            }

            // update local `greeting` variable to match persisted value
            setGreeting(newGreeting);

            // show Notification
            setShowNotification(true);

            // remove Notification again after css animation completes
            // this allows it to be shown again next time the form is submitted
            setTimeout(() => {
              setShowNotification(false);
            }, 11000);
          }}
        >
          <fieldset id='fieldset'>
            <label
              htmlFor='greeting'
              style={{
                display: 'block',
                color: 'var(--gray)',
                marginBottom: '0.5em',
              }}
            >
              Change greeting
            </label>
            <div style={{ display: 'flex' }}>
              <input
                autoComplete='off'
                defaultValue={greeting}
                id='greeting'
                onChange={(e) => setButtonDisabled(e.target.value === greeting)}
                style={{ flex: 1 }}
              />
              <button
                disabled={buttonDisabled}
                style={{ borderRadius: '0 5px 5px 0' }}
              >
                Save
              </button>
            </div>
          </fieldset>
        </form>
        <p>
          Look at that! A Hello World app! This greeting is stored on the NEAR
          blockchain. Check it out:
        </p>
        <ol>
          <li>
            Look in <code>src/App.js</code> and <code>src/utils.js</code> ???
            you'll see <code>getGreeting</code> and <code>setGreeting</code>{' '}
            being called on <code>contract</code>. What's this?
          </li>
          <li>
            Ultimately, this <code>contract</code> code is defined in{' '}
            <code>assembly/main.ts</code> ??? this is the source code for your{' '}
            <a
              target='_blank'
              rel='noreferrer'
              href='https://docs.near.org/docs/develop/contracts/overview'
            >
              smart contract
            </a>
            .
          </li>
          <li>
            When you run <code>yarn dev</code>, the code in{' '}
            <code>assembly/main.ts</code> gets deployed to the NEAR testnet. You
            can see how this happens by looking in <code>package.json</code> at
            the <code>scripts</code> section to find the <code>dev</code>{' '}
            command.
          </li>
        </ol>
        <hr />
        <p>
          To keep learning, check out{' '}
          <a target='_blank' rel='noreferrer' href='https://docs.near.org'>
            the NEAR docs
          </a>{' '}
          or look through some{' '}
          <a target='_blank' rel='noreferrer' href='https://examples.near.org'>
            example apps
          </a>
          .
        </p>
      </main>
      {showNotification && <Notification />}
    </>
  );
}
