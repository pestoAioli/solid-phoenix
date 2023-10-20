import { Show, createSignal } from 'solid-js';
import { Login } from '../components/login';
import '../styles/home.css';
import SignUp from '../components/sign-up';
import { SocketContextProvider } from '../contexts/socket-context-provider';

export const Home = () => {
  const [loginOrRegister, setLoginOrRegister] = createSignal(true);
  const [loggingIn, setLoggingIn] = createSignal(false);
  const [error, setError] = createSignal(false);

  return (
    //example of how you can connect to a channel in a page
    <SocketContextProvider>
      <div class='home-login'>
        <Show when={!loggingIn() && loginOrRegister()}>
          <Login setLoggingIn={setLoggingIn} setError={setError} />
          <p style={{ "margin-top": "0" }}>Don't have an account? <button onClick={() => setLoginOrRegister(false)}>Sign up</button></p>
        </Show>
        <Show when={!loggingIn() && !loginOrRegister()}>
          <SignUp timeToLogin={setLoginOrRegister} />
        </Show>
        <Show when={loggingIn()}>
          <Show when={!error()}>
            <h1>One sec while I log you in 🧐</h1>
          </Show>
          <Show when={error()}>
            <p>something went wrong :/ please <button style={{ "text-decoration": "underline" }} onClick={() => {
              setError(false)
              setLoggingIn(false)
            }}><b>refresh</b></button> and try again, and make sure you're logged in</p>
          </Show>
        </Show>
      </div >
    </SocketContextProvider>
  )
}
